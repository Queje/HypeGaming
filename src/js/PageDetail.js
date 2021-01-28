const PageDetail = (argument = "") => {
    
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, background_image, developers, genres, tags, parent_platforms, website, clip } = response;
          console.log(response)

          let devname = "";
          let developersID = [];
          developers.forEach(element => { 
            devname += element.name;
            developersID += element.id
          });

          let gamegenres = "";
          let genreID = [];
          genres.forEach((e) => {
            gamegenres += e.name + " "
            genreID += e.id
          })

          let gametags = [];
          let tagsID = [];
            tags.forEach((e) => {
              gametags += e.name + " - "
              tagsID += e.id
          })

          let detailplatformlist = "";
          let detailplatformID = [];
          parent_platforms.forEach((platforms) => {
            
            detailplatformID += platforms.platform.id;
            
            switch(platforms.platform.name) {
              case "PC":
                detailplatformlist += '<img src="./src/images/windows.svg" alt="windows-PC"> '
                break;
              case "PlayStation":
                detailplatformlist += '<img src="./src/images/ps4.svg" alt="playstation"> '
                break;
              case "Xbox":
                detailplatformlist += '<img src="./src/images/xbox.svg" alt="xbox"> '
                break;
              case "Nintendo":
                detailplatformlist += '<img src="./src/images/switch.svg" alt="nintendo-switch"> '
                break;
              case "Android":
                detailplatformlist += '<img src="./src/images/mobile.svg" alt="mobile-android"> '
                break;
              case "Linux":
                detailplatformlist += '<img src="./src/images/linux.svg" alt="linux"> '
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
          articleDOM.querySelector("#detailwebsite").href = `"${website}"`;
          articleDOM.querySelector("#detailgenres").innerHTML = gamegenres;
          articleDOM.querySelector("#detailtags").innerHTML = gametags;
          articleDOM.querySelector("#detailvideo").src = `https://www.youtube.com/embed/${clip.video}`;
          articleDOM.querySelector("#detaildescription").innerHTML = description;
          articleDOM.querySelector("#detaildevelopers").innerHTML = devname;
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
              <br>
              <h5 id="detailgenres"></h5>
              <br>
              <p id="detailplatformlogo"></p>
              <br>
              <a id="detailwebsite">game website</a>
            </div>
          </div>
          <div class="container">
            <small id="detailtags"></small>
            <br>
            <br>
            <iframe id="detailvideo" width="420" height="315"></iframe>
            <h4>Description:</h4>
            <p id="detaildescription" class="description"></p>
            <br>
            <h4>developed by:</h4>
            <p id="detaildevelopers"></p>
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();

};

export {PageDetail};