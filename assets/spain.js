const channelsData = [
    
    
    /*{ 
      id: "servel",
      name: "SERVEL",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/k7p6bDhJGlo?autoplay=1&mute=1"
    },*/
    { 
      id: "elpais",
      name: "El País",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/hRBzDfErMjs?autoplay=1&mute=1&hd=1"
    },
    { 
        id: "rtve",
        name: "RTVE",
        visibilidad: "",
        source: "https://www.youtube.com/embed/8GmR9H2iH8Q?autoplay=1&mute=1"
    },
    { 
        id: "marca",
        name: "Marca",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/ku8ZJU7D_zE?autoplay=1&mute=1"
    },/*
    { 
        id: "chv",
        name: "Chilevisión",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/2koKKi69ByY?autoplay=1&mute=1"
    },
    { 
        id: "latercera",
        name: "La Tercera",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/oIbybVITZEQ?autoplay=1&mute=1"
    },
    { 
        id: "cnnchile",
        name: "CNN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/VsnlQdMBYU4?autoplay=1&mute=1"
      },/*
      { 
        id: "mediabanco",
        name: "Media Banco",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/9LN56F4K_gY?autoplay=1&mute=1"
      },
      { 
        id: "biobio",
        name: "Bio bio",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/kwVRXc6AG3M?autoplay=1&mute=1"
      },{ 
        id: "copano",
        name: "Copano",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/M10BmZ__V7Q?autoplay=1&mute=1"
      },/*
      { 
          id: "adnradio",
          name: "ADN Radio",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/DwiPDjo2Bo8?autoplay=1&mute=1"
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
     /* { 
        id: "uatv",
        name: "UATV",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/uatv"
      },
      
      { 
        id: "itvpatagonia",
        name: "ITV Patagonia",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/k_O0QiiyIKU?autoplay=1&mute=1"
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
  