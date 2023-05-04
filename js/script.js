//Циклическое переключения видимости изображения каждые 3 секунды.
setInterval(function() 
{
    var image = document.querySelector(".brochure");
    if (image.classList.contains("hide")) 
    {
        image.classList.remove("hide");
    } 
    else 
    {
        image.classList.add("hide");
    }
}, 3000);
//Анимация движения блока при прокрутке страницы.
var movingBlock = document.getElementById("moving-block");
window.addEventListener("scroll", function() 
{
    var newPosition = window.scrollY + window.innerWidth - 3480;
    movingBlock.style.left = newPosition + "px";
});
//Разворот карточки при клике на нее.
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) 
{
  card.addEventListener('click', function() 
  {
    card.classList.toggle('is-flipped');
  });
});
//Анимации масштабирования звезд на странице.
const images = document.querySelectorAll('.stars-container img');
let count = 0;
setInterval(() => 
{
    images.forEach((image, index) => 
    {
        const phaseShift = Math.PI * 2 / images.length;
        const amplitude = 0.5 * Math.max(0, Math.cos(count * 0.01));
        const offset = 0.3 * index;
        const scaleFactor = 1 + amplitude * Math.sin(count * 0.05 + phaseShift * index + offset);
        image.style.transform = `scale(${scaleFactor})`;
    });
  count++;
}, 50);
//Слайд-шоу с изображениями.
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}
function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//Разворот карточки при клике на нее.
const card = document.querySelectorAll('.mySlides');
card.forEach(function(card) 
{
  card.addEventListener('click', function() 
  {
    card.classList.toggle('is-flipped');
  });
});
//Выпадающего меню навигации.
document.getElementById('nav').onmouseover = function(event) 
{
  var target = event.target;
  if (target.className == 'menu-item') 
  {
      var s = target.getElementsByClassName('submenu');
      closeMenu();
      s[0].style.display='block';
  }
}
document.onmouseover = function(event) 
{
  var target = event.target;
  console.log(event.target);
  if(target.className!='menu-item' && target.className!='submenu' && target.className!='field' && target.className!= 'subfield') 
  {
      closeMenu();
  }
}
function closeMenu() 
{
  var menu = document.getElementById('nav');
  var subm = document.getElementsByClassName('submenu');
  for (var i=0; i <subm.length; i++) 
  {
      subm[i].style.display='none';
  }
}