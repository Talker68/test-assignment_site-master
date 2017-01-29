window.onload = function() {

  setImageOffset();

};

//функция устанавливает отрицательный margin для изображения, равный высоте заголовка
function setImageOffset() {
  var mainImage = document.getElementsByClassName("page-content__image--main")[0];
  var mainHeader = document.getElementsByClassName("page-content__header--main")[0];
  var imageOffset = (mainHeader.clientHeight + 6 < mainImage.height)
    ? -mainHeader.clientHeight - 6
    : mainImage.height;

  console.log(mainImage.height);
  console.log(mainHeader.clientHeight);
  console.log(-mainHeader.clientHeight + "px");

  mainImage.style.marginBottom = imageOffset + "px";
}
