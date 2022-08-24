const channelsData = [
    
    /*{ 
      id: "24horas",
      name: "24 Horas",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/8YzOWIi3R2I?autoplay=1&mute=1&hd=1"
    },*/
    { 
        id: "t13",
        name: "T13",
        visibilidad: "",
        source: "https://www.youtube.com/embed/Ove87nZ_1D4?autoplay=1&mute=1"
    },
    { 
        id: "meganoticias",
        name: "MEGA Noticias",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/nVMhebdoMd4?autoplay=1&mute=1"
    },
    { 
        id: "cnnchile",
        name: "CNN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/7KOu4EGaM88?autoplay=1&mute=1"
      },
      { 
          id: "nbcnews",
          name: "NBC News",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/I96mp4LN1Kk?autoplay=1&mute=1"
        },
        { 
            id: "dwnews",
            name: "DW News",
            visibilidad: "",
            tipo: "video",
            source: "https://www.youtube.com/embed/V9KZGs1MtP4?autoplay=1&mute=1"
          },
            { 
                id: "skynews",
                name: "Sky News",
                visibilidad: "",
                tipo: "video",
                source: "https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1"
              },
              { 
                  id: "france24",
                  name: "France 24",
                  visibilidad: "",
                  tipo: "video",
                  source: "https://www.youtube.com/embed/jNhh-OLzWlE?autoplay=1&mute=1"
                },
                { 
                    id: "aljazeera",
                    name: "Al Jazeera",
                    visibilidad: "",
                    tipo: "video",
                    source: "https://www.youtube.com/embed/-upyPouRrB8?autoplay=1&mute=1"
                  },
                  { 
                      id: "rt",
                      name: "RT",
                      visibilidad: "",
                      tipo: "video",
                      source: "https://www.youtube.com/embed/o3TVbNgdHx4?autoplay=1&mute=1"
                    },
                    { 
                        id: "cbsnews",
                        name: "CBS News",
                        visibilidad: "",
                        tipo: "video",
                        source: "https://www.youtube.com/embed/GGK-wOprSu0?autoplay=1&mute=1"
                      },
                      { 
                          id: "cbsnews",
                          name: "CBS News",
                          visibilidad: "",
                          tipo: "video",
                          source: "https://www.youtube.com/embed/GGK-wOprSu0?autoplay=1&mute=1"
                        },
                        { 
                            id: "reuters",
                            name: "Reuters",
                            visibilidad: "",
                            tipo: "video",
                            source: "https://www.youtube.com/embed/jgL0mA2SeGs?autoplay=1&mute=1"
                          },
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
  