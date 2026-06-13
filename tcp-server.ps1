$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4176
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
$listener.Start()
Write-Host "AstroManish site running at http://localhost:$port"

$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".png" = "image/png"
  ".webp" = "image/webp"
  ".mp3" = "audio/mpeg"
  ".mp4" = "video/mp4"
  ".webm" = "video/webm"
  ".mov" = "video/quicktime"
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $stream.ReadTimeout = 2000
    $reader = [System.IO.StreamReader]::new($stream)
    $requestLine = $reader.ReadLine()
    while ($true) {
      $line = $reader.ReadLine()
      if ([string]::IsNullOrEmpty($line)) { break }
    }

    $target = "index.html"
    if ($requestLine -match "^[A-Z]+\s+([^\s]+)") {
      $target = [Uri]::UnescapeDataString($matches[1].Split("?")[0].TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($target)) { $target = "index.html" }
    }

    $rootPath = [System.IO.Path]::GetFullPath($root)
    $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($rootPath, $target))
    if (-not $filePath.StartsWith($rootPath, [System.StringComparison]::OrdinalIgnoreCase) -or -not [System.IO.File]::Exists($filePath)) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $header = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 404 Not Found`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      $stream.Write($body, 0, $body.Length)
      continue
    }

    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
    $type = if ($types.ContainsKey($ext)) { $types[$ext] } else { "application/octet-stream" }
    $header = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 200 OK`r`nContent-Type: $type`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n")
    $stream.Write($header, 0, $header.Length)
    $stream.Write($bytes, 0, $bytes.Length)
  } catch {
    $message = "Server error: $($_.Exception.Message)"
    Add-Content -LiteralPath ([System.IO.Path]::Combine($root, "server-error.log")) -Value $message
    try {
      $body = [System.Text.Encoding]::UTF8.GetBytes($message)
      $header = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 500 Internal Server Error`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      $stream.Write($body, 0, $body.Length)
    } catch {}
  } finally {
    $client.Close()
  }
}
