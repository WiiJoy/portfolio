const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.myskills__index-mark'),
      lines = document.querySelectorAll('.myskills__index-sb span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const links = document.querySelectorAll('.promo__link');

links.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.classList.add('btn');
    });
    item.addEventListener('mouseout', (e) => {
        e.target.classList.remove('btn');
    });
});