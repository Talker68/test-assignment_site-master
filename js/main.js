var scrollButton = document.getElementsByClassName("sidebar__up-button")[0];
var newsButton = document.getElementsByClassName("sidebar__news-button")[0];
var newsList = document.getElementsByClassName("sidebar__item");
var visibleNews = 9;

window.onload = function() {

  hideNews();
  scrollButton.addEventListener("click", scrollTop, false);
  newsButton.addEventListener("click", addNews, false);
};

function scrollTop() {

  var scrollStep = -window.scrollY / 20,
      scrollInterval = setInterval(function(){
      if ( window.scrollY != 0 ) {
          window.scrollBy( 0, scrollStep );
      }
      else clearInterval(scrollInterval);
  },15);
}

/*
Функция вызывается вначале и прячет лишние новости.
Таким образом без js новости будут тоже доступны.
*/
function hideNews() {

  for (var i=visibleNews; i < newsList.length; i++) {
    newsList[i].classList.add("sidebar__item--hidden");
  }
  document.getElementsByClassName("sidebar")[0].classList.add("sidebar--limited-height");
  document.getElementsByClassName("sidebar__navigation")[0].classList.add("sidebar__navigation--opened");

}

function addNews() {

  document.getElementsByClassName("sidebar")[0].classList.remove("sidebar--limited-height");
  document.getElementsByClassName("sidebar__navigation")[0].classList.remove("sidebar__navigation--opened");

  for (var i=0; i < newsList.length; i++) {
    newsList[i].classList.remove("sidebar__item--hidden");
  }
}
