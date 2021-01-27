const PageList = (argument = "") => {
  
  let datasave = "";
  let nextpage = "";
  let count = 0;
  
  const preparePage = () => {
    const currentgame = "&dates=2021-01-20,2030-12-31";
    const pagesize = "&page_size=9";
    const cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      
      let finalURL = "";

      if (argument == "") {
        finalURL = url + "?search=" + pagesize + currentgame;
      } else if (argument != "Next") {
        finalURL = url + "?search=" + argument + pagesize;
      } else if (argument == "Next") {
        finalURL = url;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          datasave = response;
          console.log(datasave);
          nextpage = datasave.next;
          datasave.results.forEach((article) => {

            let platformlist = "";
            article.parent_platforms.forEach((platforms) => { 
              switch(platforms.platform.name) {
                case "PC":
                  platformlist += '<img src="./src/images/windows.svg" alt="windows-PC"> '
                  break;
                case "PlayStation":
                  platformlist += '<img src="./src/images/ps4.svg" alt="playstation"> '
                  break;
                case "Xbox":
                  platformlist += '<img src="./src/images/xbox.svg" alt="xbox"> '
                  break;
                case "Nintendo":
                  platformlist += '<img src="./src/images/switch.svg" alt="nintendo-switch"> '
                  break;
                case "Android":
                  platformlist += '<img src="./src/images/mobile.svg" alt="mobile-android"> '
                  break;
                case "Linux":
                  platformlist += '<img src="./src/images/linux.svg" alt="linux"> '
                  break;
                default:
                  break;
              }
            })
            
            let gamegenres = [];
            article.genres.forEach((e) => gamegenres += e.name + " ")

            articles += `
              <div class="card special" id="card">
                <a id="details" href = "#pagedetail/${article.id}">
                  <img src=${article.background_image} class="card-img-top" id="cool-image alt="${article.slug}">
                  <div id="hidden-text" class="card-body"> 
                    <h2 class="card-text">Release: ${article.released}</h2>
                    <h4 class="card-text">${article.rating} / ${article.rating_top}</h4>
                    <h6 class="card-text"> for ${article.ratings_count} players</h6>
                    <br>
                    <h6 class="card-text">${gamegenres}</h6>
                    <h6 class="card-text"></h6>
                  </div>
                  <div class="card-body"> 
                    <h1 class="card-title">${article.name}</h1>
                    <p>${platformlist}</p>
                  </div>
                </a>
              </div>
              <br>
            `;
          });

          document.querySelector(".page-list .articles").innerHTML = articles;

          let button = document.getElementById("buttonshowmore");

          button.innerHTML = `<button type="button" class="btn btn-outline-primary">Plus de Games</button>`

          const newFetch = () => {
            count += 1;
            console.log(count);
            button.removeEventListener("click", newFetch)
            console.log(nextpage);
            fetchList(nextpage, "Next")
          }

          button.addEventListener("click", newFetch)
          
          const cardlist = document.querySelectorAll("#card")
          
          cardlist.forEach((element) => {
            element.addEventListener("mouseover", () => {
              element.childNodes[1].childNodes[1].style.display="none";
              element.childNodes[1].childNodes[3].style.display="block";
            })
          })

          cardlist.forEach((element) => {
            element.addEventListener("mouseleave", () => {
              element.childNodes[1].childNodes[1].style.display="block";
              element.childNodes[1].childNodes[3].style.display="none";
            })
          })

        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {

    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles row row-cols-3">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export{PageList};
