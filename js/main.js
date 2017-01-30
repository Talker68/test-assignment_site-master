var scrollButton = document.getElementsByClassName("sidebar__up-button")[0];
var newsButton = document.getElementsByClassName("sidebar__news-button")[0];
var newsList = document.getElementsByClassName("sidebar__item");
var visibleNews = 9;
var newsOpened = false;

window.onload = function() {

  hideNews();

  newsButton.addEventListener("click", addNews, false);

  scrollButton.addEventListener("click", function() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, false);

};

/*
Функция вызывается вначале и прячет лишние новости.
Таким образом без js новости будут тоже доступны.
*/
function hideNews() {

  for (var i=visibleNews; i < newsList.length; i++) {
    newsList[i].className += "  sidebar__item--hidden";
  }
  document.getElementsByClassName("sidebar")[0].className += "  sidebar--limited-height";
  document.getElementsByClassName("sidebar__navigation")[0].className += "  sidebar__navigation--opened";

}

function addNews() {

  if (newsOpened) return;

  var sidebarClasslist = document.getElementsByClassName("sidebar")[0].className;
  document.getElementsByClassName("sidebar")[0].className = sidebarClasslist.substring(0, sidebarClasslist.lastIndexOf(" "));

  var navigationClasslist = document.getElementsByClassName("sidebar__navigation")[0].className;
  document.getElementsByClassName("sidebar__navigation")[0].className = navigationClasslist.substring(0, navigationClasslist.lastIndexOf(" "));

  for (var i=0; i < newsList.length; i++) {
    newsList[i].className = "sidebar__item";
  }

  newsOpened = true;

}
