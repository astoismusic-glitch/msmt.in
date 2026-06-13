const artistLink = "https://open.spotify.com/artist/1jpZ9Rmt16ImOSEJRJj5rn?si=blC2FSYnT-avoUlyBYGkpw";
const discLink = "https://www.youtube.com/playlist?list=PL-U1sM5M3U2iKT-coO7Vphm9dnckEwBd-";

const localVideoCandidates = {
  "video-1": [
    "assets/videos/video-1.mov",
    "assets/videos/video-1.mp4",
    "assets/videos/video 1.mp4",
    "assets/videos/video1.mp4",
    "assets/videos/video-1.webm"
  ],
  "video-2": [
    "assets/videos/video-2.mov",
    "assets/videos/video-2.mp4",
    "assets/videos/video 2.mp4",
    "assets/videos/video2.mp4",
    "assets/videos/video-2.webm"
  ],
  "visual-1": [
    "assets/videos/visual-1.mp4",
    "assets/videos/visual 1.mp4"
  ],
  "visual-2": [
    "assets/videos/visual-2.mp4",
    "assets/videos/visual 2.mp4"
  ],
  "visual-3": [
    "assets/videos/visual-3.mp4",
    "assets/videos/visual 3.mp4"
  ],
  "visual-4": [
    "assets/videos/visual-4.mp4",
    "assets/videos/visual 4.mp4"
  ]
};

const imageCandidates = {
  "--visual-1": [
    "assets/visuals/visual-1.jpg", "assets/visuals/visual 1.jpg", "assets/visuals/visual1.jpg",
    "assets/visuals/visual-1.png", "assets/visuals/visual 1.png", "assets/visuals/visual1.png",
    "assets/visuals/visual-1.webp", "assets/visuals/visual 1.webp", "assets/visuals/visual1.webp"
  ],
  "--visual-2": [
    "assets/visuals/visual-2.jpg", "assets/visuals/visual 2.jpg", "assets/visuals/visual2.jpg",
    "assets/visuals/visual-2.png", "assets/visuals/visual 2.png", "assets/visuals/visual2.png",
    "assets/visuals/visual-2.webp", "assets/visuals/visual 2.webp", "assets/visuals/visual2.webp"
  ],
  "--visual-3": [
    "assets/visuals/visual-3.jpg", "assets/visuals/visual 3.jpg", "assets/visuals/visual3.jpg",
    "assets/visuals/visual-3.png", "assets/visuals/visual 3.png", "assets/visuals/visual3.png",
    "assets/visuals/visual-3.webp", "assets/visuals/visual 3.webp", "assets/visuals/visual3.webp"
  ],
  "--visual-4": [
    "assets/visuals/visual-4.jpg", "assets/visuals/visual 4.jpg", "assets/visuals/visual4.jpg",
    "assets/visuals/visual-4.png", "assets/visuals/visual 4.png", "assets/visuals/visual4.png",
    "assets/visuals/visual-4.webp", "assets/visuals/visual 4.webp", "assets/visuals/visual4.webp"
  ],
  "--msmt-poster": [
    "assets/pics/msmt-poster.jpg", "assets/pics/msmt poster.jpg", "assets/pics/msmt-poster.png", "assets/pics/msmt poster.png",
    "assets/visuals/msmt-poster.jpg", "assets/visuals/msmt poster.jpg", "assets/visuals/msmt-poster.png", "assets/visuals/msmt poster.png"
  ]
};

const unreleased = [
  ["Track 1", "assets/tracks/track-1.mp3"],
  ["Track 2", "assets/tracks/track-2.mp3"],
  ["Track 3", "assets/tracks/track-3.mp3"],
  ["Track 4", "assets/tracks/track-4.mp3"]
];

const discs = [
  {
    name: "Disc 1",
    tracks: [
      ["i", "Main Se Main Tak (Intro)", artistLink],
      ["ii", "Needed", artistLink, [["Sam Chan", "https://open.spotify.com/artist/7yjmmXLTPE5oQ8jgCJlY88?si=Cie2aVimQTGjlXgiCFdynA"]]],
      ["iii", "Painting Picture", artistLink],
      ["iv", "Bol to Sahi", artistLink],
      ["v", "Will You Cry for Me", artistLink],
      ["vi", "Have a Nice Day", artistLink, [["13RNG", "https://youtube.com/@13rng?si=3j3FWfvdm6ZGum9I"]]],
      ["vii", "Palak Jhapakte", "https://open.spotify.com/album/3kz5DwyBy8LX4ufrFHXmyV?si=PijXuw1XRpSqeE5LfLoT3Q"],
      ["viii", "Am I Mumbling", artistLink],
      ["ix", "Chehra", artistLink],
      ["x", "No Regrets", "https://open.spotify.com/album/61APPhCNTdBdPALPPBJtlp?si=hYwBYxnEQNuoqqXhc35R2Q"],
      ["xi", "Kaun Tera", artistLink]
    ]
  },
  {
    name: "Disc 2",
    tracks: [
      ["i", "Main Aur Mein", artistLink, [["yng anand", "https://open.spotify.com/artist/3dShtAFZbtiEgyt3DW6GRQ?si=twvBEfI2Q9apSJZZReIkvw"]]],
      ["ii", "Anti-Social", artistLink],
      ["iii", "Fukk Ahre Love", artistLink],
      ["iv", "Samurai", "https://open.spotify.com/album/2kszUO22zbSXfJfxdQxoQM?si=8JQEy3kmQtG-B8hWEE-ZCw", [["Satyam Sagar", "https://open.spotify.com/artist/6uJXxVHxmsU2yLE8HG1xNZ?si=egbyxYz3TGKN8ftJFvv0-w"]]],
      ["v", "28 Freestyle", artistLink],
      ["vi", "Good Bye", artistLink, [["Roxy", "https://open.spotify.com/track/4EEq5SCusoAy4cMLzjAqpR?si=54057e08469642ec"]]],
      ["vii", "Meri Dost (Sun lo)", artistLink],
      ["viii", "Tere Prem mai Freestyle", artistLink],
      ["ix", "808", artistLink],
      ["x", "No Sense of Love", artistLink],
      ["xi", "Mein Se Main Tak (MSMT)", artistLink]
    ]
  },
  {
    name: "Disc 3",
    tracks: [
      ["i", "Reunion", artistLink],
      ["ii", "Step in My Hood", artistLink],
      ["iii", "Sheher Mohali", "https://open.spotify.com/album/1ntW1EIdg1N9DriILbEcHs?si=jUPv9KXzQ1mL6itF0YqT0w"],
      ["iv", "Swapan Nagri", "https://open.spotify.com/album/3XGx3Sl1B63mKvRZAnu7Ba?si=IhgiOHzgR0ufldzFwleD-w", [["yng anand", "https://open.spotify.com/artist/3dShtAFZbtiEgyt3DW6GRQ?si=twvBEfI2Q9apSJZZReIkvw"]]],
      ["v", "Narayana", "https://open.spotify.com/album/1VyfMtek01JMk34aJcJZb8?si=x1HsEvnQTee-1aGtkqAxyw"],
      ["vi", "Istree", artistLink],
      ["vii", "Ek Kavita Tumahre liye", artistLink],
      ["viii", "Too Close to the Moon", artistLink, [["Satyam", "https://open.spotify.com/artist/6uJXxVHxmsU2yLE8HG1xNZ?si=egbyxYz3TGKN8ftJFvv0-w"]]],
      ["ix", "Chithi Ma Pa ke liye", artistLink],
      ["x", "Family Matters Too", artistLink],
      ["xi", "Not So Bad", artistLink]
    ]
  }
];

const projects = {
  ep: [
    ["Love Scars", "https://open.spotify.com/album/5tntbSAFIBqVSmBd7npziX?si=AUHg8dGfSESrQJxt6Fq6uA"],
    ["Men In Love", "https://open.spotify.com/album/4tEn8W0W90wqmHviizWlIF?si=KCOmEUjoSVyOEvlwJLwaJA"],
    ["Twisted Love", "https://open.spotify.com/album/3lNqTjG8HJXMMhkg4itY6Y?si=2yxs3q6KSBK0ld8izQ6QHw"]
  ],
  mixtape: [
    ["Mein Se Main Tak", "https://open.spotify.com/artist/1jpZ9Rmt16ImOSEJRJj5rn?si=nbbl3J-fS2KEjDroWBQpEA"],
    ["Ecstasy", "https://open.spotify.com/album/3OlFkZD0nOmYsoJMEdvG9k?si=m-YkN4PAShaIRPrMK5i1Dw"],
    ["Navrang", "https://open.spotify.com/album/0LKBlxjsSIz2mNcbKhUVwL?si=isvYCMEqTGCEkRmkazs6fw"],
    ["Kaal", "https://open.spotify.com/album/5jqI4tSSp3OHyaknyFVUbM?si=cQpB9rPBSba9OKOIrdy3mw"]
  ],
  singles: [
    ["Khafa", "https://open.spotify.com/album/00SjL77R7JLyvusrA1suz0?si=OLrwcNG1QnuCZ9hbsnCMsA"],
    ["Numb", "https://open.spotify.com/album/2WaAR5eFTEnFaEMxnTzCwJ?si=DCAFnPcYTheBZ_bcc1qAuQ"],
    ["Tu Hi Bata", "https://open.spotify.com/album/7d4gEye9vrVjus50lduqOb?si=PWdZH2g5RcCIe0uOb2GvCA"],
    ["Dont Miss That Life", "https://open.spotify.com/album/2Y1OJw2HA7xjh4CTBhgCOl?si=rHJi4TABTX-Q2ChdpanKmw"],
    ["Naina", "https://open.spotify.com/album/7q1GkQnniEx04bM18n6QTy?si=WgSr4srFQLq_f6OikLCtpQ"],
    ["Naina Acoustic Version", "https://open.spotify.com/album/7cbpjT1IVRvxEvK2Dc1im1?si=Uyh0xrCARGiCKKGmqtzAPw"],
    ["Way Above", "https://open.spotify.com/album/67zr69ZKMa6lWhrV5qzJhn?si=JF_BbfBSQZK4uN0uHu184g"],
    ["F About You", "https://open.spotify.com/album/6NPweL12MI111ZWpblCTnA?si=4__DDI-NSRGDznsjJH_kqw"]
  ]
};

const videos = [
  ["Samurai", "https://youtu.be/ZIYpQ1NTf6g?si=mds9NPJjdUFG2UJI", "ZIYpQ1NTf6g", "assets/videos/visual-1.mp4"],
  ["Alvida", "https://youtu.be/0KPVwTAbjAs?si=ILmsUEdV2k6k-aAQ", "0KPVwTAbjAs", "assets/videos/visual-2.mp4"],
  ["Ik Dashak", "https://youtu.be/wvJ02sa4ZIw?si=gfznD0rjSBoqzp4U", "wvJ02sa4ZIw", "assets/videos/visual-4.mp4"]
];

function setLocalVideos() {
  document.querySelectorAll("[data-video-source]").forEach((video) => {
    const candidates = localVideoCandidates[video.dataset.videoSource] || [];
    let index = 0;
    const tryNext = () => {
      if (index >= candidates.length) {
        video.removeAttribute("src");
        video.classList.add("is-missing");
        return;
      }
      video.src = candidates[index];
      index += 1;
      video.load();
    };
    video.addEventListener("error", tryNext);
    video.addEventListener("loadeddata", () => {
      video.classList.remove("is-missing");
      video.play().catch(() => {});
    });
    tryNext();
  });
}

function setOptionalImages() {
  Object.entries(imageCandidates).forEach(([property, candidates]) => {
    let index = 0;
    const test = () => {
      if (index >= candidates.length) return;
      const src = candidates[index];
      index += 1;
      const img = new Image();
      img.onload = () => document.documentElement.style.setProperty(property, `url("${src}")`);
      img.onerror = test;
      img.src = src;
    };
    test();
  });
}

function stopOtherAudio(current) {
  document.querySelectorAll("audio").forEach((audio) => {
    if (audio !== current) audio.pause();
  });
  document.querySelectorAll(".audio-card").forEach((card) => card.classList.remove("playing"));
}

function renderUnreleased() {
  const grid = document.querySelector("#unreleasedGrid");
  grid.innerHTML = unreleased.map(([title, src], index) => `
    <article class="audio-card">
      <span class="track-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <audio controls controlsList="nodownload noplaybackrate" preload="metadata" src="${src}"></audio>
    </article>
  `).join("");

  grid.querySelectorAll("audio").forEach((audio) => {
    audio.addEventListener("play", () => {
      stopOtherAudio(audio);
      audio.closest(".audio-card").classList.add("playing");
    });
    audio.addEventListener("pause", () => {
      if (audio.currentTime === 0 || audio.ended) audio.closest(".audio-card").classList.remove("playing");
    });
    audio.addEventListener("ended", () => audio.closest(".audio-card").classList.remove("playing"));
  });
}

function allTrackNames() {
  return discs.flatMap((disc) => disc.tracks.map((track) => track[1]));
}

function renderMarquees() {
  const names = allTrackNames();
  ["marqueeOne", "marqueeTwo", "marqueeThree"].forEach((id, row) => {
    const shifted = [...names.slice(row * 6), ...names.slice(0, row * 6)];
    document.querySelector(`#${id}`).innerHTML = [...shifted, ...shifted].map((name) => `<span>${name}</span>`).join("");
  });
}

function renderDiscs() {
  const grid = document.querySelector("#discGrid");
  grid.innerHTML = discs.map((disc) => `
    <article class="disc-card">
      <a class="disc-title" href="${discLink}" target="_blank" rel="noreferrer">${disc.name}</a>
      <div class="disc-tracks">
        ${disc.tracks.map(([number, title, link, features = []]) => `
          <div class="track-line">
            <span>${number}</span>
            <a class="song-link" href="${link}" target="_blank" rel="noreferrer">${title}</a>
            ${features.length ? `<em>feat. ${features.map(([name, featureLink]) => `<a href="${featureLink}" target="_blank" rel="noreferrer">${name}</a>`).join(", ")}</em>` : ""}
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderCatalog(category = "ep") {
  const grid = document.querySelector("#catalogGrid");
  grid.innerHTML = projects[category].map(([name, link], index) => `
    <a class="project-card" href="${link}" target="_blank" rel="noreferrer">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${name}</strong>
    </a>
  `).join("");
}

function renderVideos() {
  const rail = document.querySelector("#videoRail");
  rail.innerHTML = videos.map(([title, link, id, localVideo]) => `
    <article class="music-video-card">
      <iframe
        title="${title} music video"
        src="https://www.youtube.com/embed/${id}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <span class="music-video-card-title">${title}</span>
      <a class="music-video-link" href="${link}" target="_blank" rel="noreferrer">Open on YouTube</a>
    </article>
  `).join("");
}

function wireCatalogTabs() {
  document.querySelectorAll(".catalog-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".catalog-tab").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      renderCatalog(button.dataset.category);
    });
  });
}

function wireDonate() {
  const modal = document.querySelector("#donateModal");
  const close = document.querySelector("#closeDonate");
  document.querySelectorAll("[data-donate]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
    });
  });
  close.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close.click();
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

setLocalVideos();
setOptionalImages();
renderUnreleased();
renderMarquees();
renderDiscs();
renderCatalog();
renderVideos();
wireCatalogTabs();
wireDonate();
revealOnScroll();
