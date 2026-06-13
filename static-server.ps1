$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

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

$listener.Start()
Write-Host "AstroManish site running at http://localhost:$port"

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $requestPath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($requestPath)) {
    $requestPath = "index.html"
  }

  $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $requestPath))
  if (-not $filePath.StartsWith($root)) {
    $context.Response.StatusCode = 403
    $context.Response.Close()
    continue
  }

  if (-not [System.IO.File]::Exists($filePath)) {
    $context.Response.StatusCode = 404
    $context.Response.Close()
    continue
  }

  $bytes = [System.IO.File]::ReadAllBytes($filePath)
  $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
  $context.Response.ContentType = if ($types.ContainsKey($ext)) { $types[$ext] } else { "application/octet-stream" }
  $context.Response.ContentLength64 = $bytes.Length
  $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $context.Response.Close()
}
