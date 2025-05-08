const channelsData = [
    
    
    { 
      id: "tvn",
      name: "TVN",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/c4sLPQorjfU?autoplay=1&mute=1&hd=1"
    },
    { 
        id: "meganoticias",
        name: "MEGA Noticias",
        visibilidad: "",
        source: "https://www.youtube.com/embed/Q8mcSOHEQXs?autoplay=1&mute=1"
    },
    { 
        id: "t13",
        name: "T13",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/R_V7FhsCPwM?autoplay=1&mute=1"
    },
    { 
        id: "cnnchile",
        name: "CNN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/H0fzsJXDY_0?autoplay=1&mute=1"
    },
    { 
        id: "biobio",
        name: "Bio bio TV",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/xrKBpHpyc7g?autoplay=1&mute=1"
      },
      { 
        id: "tn",
        name: "TN",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/cb12KmMMDJA?autoplay=1&mute=1"
      },
      { 
        id: "Vaticannews",
        name: "VATICAN News",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/EjnEBKK4LHA?autoplay=1&mute=1"
      },/*
      { 
          id: "cooperativa",
          name: "Cooperativa",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/P7IwrQaFb8E?autoplay=1&mute=1"
        },
      { 
        id: "tvu",
        name: "TVU",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/tvu?volume=0&mute=1"
      },
      { 
        id: "canal9",
        name: "Canal 9 Bio bio",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/UiA8XVCd6tA?autoplay=1&mute=1"
      },
      { 
        id: "antofagastatv",
        name: "Antofagasta TV",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/_6GCd-VE5aM?autoplay=1&mute=1"
      },*/
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="channel-name"><h4>${channel.name}</h4><a target="_BLANK" href="${channel.source}"><span class="new-window">Ver en otra ventana</span><img width="16px" src="assets/img/Icon material-open-in-new.svg"></a></div>
      </div>
    `;
  }
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  