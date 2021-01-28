const PageDetail = (argument = "") => {
    
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, background_image, developers, genres, tags, parent_platforms, website, clip, rating, rating_top, ratings_count, stores } = response;
          console.log(response)

          let devname = "";
          developers.forEach(e => {
            devname += `<a href='#pagelist/${e.id}'>${e.name}</a>` + "  " 
          });

          let gamegenres = "";
          genres.forEach((e) => {
            gamegenres += `<a href='#pagelist/${e.id}'>${e.name}</a>` + "  "
          })

          let gametags = [];
          tags.forEach((e) => {
            gametags += `<a href='#pagelist/${e.id}'>${e.name}</a>` + "  "
          })

          let detailstore = [];
          stores.forEach(e => {
            detailstore += `<a href="${e.url}">${e.store.domain}</a>` + "  "
          })

          fetch(`https://api.rawg.io/api/games/${response.id}/screenshots?&page_size=4`)
            .then((response) => response.json())
            .then((response) => {
              response.results.forEach((screenshot) => {
                let newScreen = document.createElement("IMG"); 
                newScreen.src = screenshot.image
                document.querySelector("#detailscreenshots").appendChild(newScreen)
              })
            });
          
          fetch(`https://api.rawg.io/api/games/${response.id}/suggested?&page_size=4`)
          .then((response) => response.json())
          .then((response) => {
            response.results.forEach((samegame) => {
              let samegamelist = document.createElement("a");
              samegamelist.innerHTML = samegame.name + " - "
              samegamelist.href = `#pagedetail/${samegame.id}`
              document.querySelector("#detailsuggestedgames").appendChild(samegamelist)
            })
          });

          let detailplatformlist = "";
          parent_platforms.forEach((platforms) => {
            switch(platforms.platform.name) {
              case "PC":
                detailplatformlist += `<a href='#pagelist/${platforms.platform.id}'><img src="./src/images/windows.svg" alt="windows-PC"></a>  `
                break;
              case "PlayStation":
                detailplatformlist += `<a href='#pagelist/${platforms.platform.id}'><img src="./src/images/ps4.svg" alt="playstation"></a>  `
                break;
              case "Xbox":
                detailplatformlist += `<a href='#pagelist/${platforms.platform.id}'><img src="./src/images/xbox.svg" alt="xbox"></a>  `
                break;
              case "Nintendo":
                detailplatformlist += `<a href='#pagelist/${platforms.platform.id}'><img src="./src/images/switch.svg" alt="nintendo-switch"></a>  `
                break;
              case "Android":
                detailplatformlist += `<a href='#pagelist/${platforms.platform.id}'><img src="./src/images/mobile.svg" alt="mobile-android"></a>  `
                break;
              case "Linux":
                detailplatformlist += `<a href='#pagelist/${platforms.platform.id}'><img src="./src/images/linux.svg" alt="linux"></a>  `
                break;
              default:
                break;
            }
          })

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("#detailtitle").innerHTML = name;
          articleDOM.querySelector("#detaildate").innerHTML = released;
          articleDOM.querySelector("#jumbo").style.backgroundImage= `url('${background_image}')`;
          articleDOM.querySelector("#detailplatformlogo").innerHTML = detailplatformlist; 
          articleDOM.querySelector("#detailwebsite").href = website;
          articleDOM.querySelector("#detailrating").innerHTML = rating + " / " + rating_top;
          articleDOM.querySelector("#detailratingscount").innerHTML = `for ${ratings_count} players`;
          articleDOM.querySelector("#detailgenres").innerHTML = gamegenres;
          articleDOM.querySelector("#detailtags").innerHTML = gametags;
          articleDOM.querySelector("#detailvideo").src = `https://www.youtube.com/embed/${clip.video}`;
          articleDOM.querySelector("#detaildescription").innerHTML = description;
          articleDOM.querySelector("#detaildevelopers").innerHTML = devname;
          articleDOM.querySelector("#detailstore").innerHTML = detailstore;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <div id="jumbo" class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 id="detailtitle" class="title display-4"></h1>
              <p class="release-date lead">Release date : <span id="detaildate"></span></p>
              <h5 id="detailgenres"></h5>
              <br>
              <h5>developed by:</h5>
              <div id="detaildevelopers"></div>
              <br>
              <p id="detailrating"></p>
              <p id="detailratingscount"></p>
              <br>
              <h5>Go get it now!</h5>
              <p id="detailstore"></p>
              <br>
              <p id="detailplatformlogo"></p>
              <a id="detailwebsite">game website</a>
            </div>
          </div>
          <div class="container">
            <small id="detailtags"></small>
            <br>
            <br>
            <h4>List of similar Games:</h4>
            <div id="detailsuggestedgames"></div>
            <br>
            <iframe id="detailvideo" width="420" height="315"></iframe>
            <h4>Description:</h4>
            <p id="detaildescription" class="description"></p>
            <br>
            <br>
            <br>
            <h4>Screenshots:</h4>
            <div id="detailscreenshots"></div>
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();

};

export {PageDetail};