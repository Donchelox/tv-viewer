const channelsData = [
    
    
    { 
      id: "tvn",
      name: "TVN",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/tPTqMs_81aw?autoplay=1&mute=1&hd=1"
    },
    { 
        id: "meganoticias",
        name: "MEGA Noticias",
        visibilidad: "",
        source: "https://www.youtube.com/embed/1lDzTRc77w8?autoplay=1&mute=1"
    },
    { 
        id: "t13",
        name: "T13",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/hYcZG6H_gpE?autoplay=1&mute=1"
    },
    { 
        id: "chv",
        name: "Chilevision",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/l5RgXj27LMI?autoplay=1&mute=1"
    },
    { 
        id: "cnnchile",
        name: "CNN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/gmAED3m-86s?autoplay=1&mute=1"
    },
    { 
        id: "biobio",
        name: "Bio bio TV",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/36VTNEAUmOo?autoplay=1&mute=1"
      },
      { 
        id: "latercera",
        name: "La Tercera",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/prXvtJxDrUI?autoplay=1&mute=1"
      },
      { 
        id: "adn Chile",
        name: "ADN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/Z0n1zA_myNQ?autoplay=1&mute=1"
      },
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
      /*{ 
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
  