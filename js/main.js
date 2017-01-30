var scrollButton = document.getElementsByClassName("sidebar__up-button")[0];
var newsButton = document.getElementsByClassName("sidebar__news-button")[0];

window.onload = function() {

  scrollButton.addEventListener("click", scrollTop, false);

};

function scrollTop() {
  console.log("scroool");
  var scrollStep = -window.scrollY / 20,
      scrollInterval = setInterval(function(){
      if ( window.scrollY != 0 ) {
          window.scrollBy( 0, scrollStep );
      }
      else clearInterval(scrollInterval);
  },15);
}

function addNews() {

}
