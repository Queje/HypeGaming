import '../sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {routes} from './routes.js';
import {PageList} from './PageList.js';

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

window.addEventListener("submit", () => {
  let searchInput = document.getElementById('search-input').value;
  PageList(searchInput);
});

const moregames = document.getElementById("buttonshowmore");
moregames.addEventListener("click", () => PageList());