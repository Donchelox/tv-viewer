const channelsData = [
    { 
        id: "24horas",
        name: "24 Horas",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/5bFPd0wR8C8?autoplay=1&mute=1&hd=1"
    },
    { 
        id: "t13",
        name: "T13",
        visibilidad: "",
        source: "https://www.youtube.com/embed/f2t3330_mBk?autoplay=1&mute=1"
    },
    { 
        id: "meganoticias",
        name: "MEGA Noticias",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/Q-SA9a3MAmo?autoplay=1&mute=1"
    },
    { 
        id: "cnnchile",
        name: "CNN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/d-USMe-Rnsw?autoplay=1&mute=1"
      },
      { 
        id: "mediabanco",
        name: "Media Banco",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/lHarJeh2yNY?autoplay=1&mute=1"
      },
      { 
        id: "biobio",
        name: "Radio Bio bio",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/bbtv?volume=0&mute=1"
      },
      { 
        id: "cooperativa",
        name: "Radio Cooperativa",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/coopetv?volume=0&mute=1"
      },
      { 
        id: "tvu",
        name: "TVU",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/tvu?volume=0&mute=1"
      },
      { 
        id: "c9",
        name: "C9",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/c9?volume=0&mute=1"
      },
      { 
        id: "uatv",
        name: "UATV",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/uatv"
      },
      { 
        id: "servel",
        name: "SERVEL",
        visibilidad: "",
        tipo: "video",
        source: "https://vimeo.com/event/982047/embed?muted=1"
      },
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="channel-name"><h4>${channel.name}</h4><a target="_BLANK" href="${channel.source}"><span>Ver en otra ventana</span></a></div>
      </div>
    `;
  }
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  