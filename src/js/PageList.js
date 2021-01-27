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
          nextpage = datasave.next;
          datasave.results.forEach((article) => {

            let platformlist = [];
            article.parent_platforms.forEach((platforms) => platformlist += platforms.platform.name);
            platformlist.split("").forEach((i) => {if (i == "PC") {replace("PC","Prout")}})

            articles += `
              <div class="card special" id="card">
                <img src=${article.background_image} class="card-img-top" id="cool-image">
                <div id="hidden-text"> 
                  <h5 class="card-text">${article.released}</h5>
                </div>
                <div class="card-body"> 
                  <h1 class="card-title">${article.name}</h1>
                  <p>${platformlist}</p>
                  <a href = "#pagedetail/${article.id}">Plus de détails</a>
                </div>
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
              element.childNodes[1].style.display="none";
              element.childNodes[3].style.display="block";
            })
          })

          cardlist.forEach((element) => {
            element.addEventListener("mouseleave", () => {
              element.childNodes[1].style.display="block";
              element.childNodes[3].style.display="none";
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
