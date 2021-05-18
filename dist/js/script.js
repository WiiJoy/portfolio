//hamburger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// skill lines

const counters = document.querySelectorAll('.myskills__index-mark'),
      lines = document.querySelectorAll('.myskills__index-sb span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// btns

function toogleActiveBtn(link) {
    link.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.classList.add('btn_active');
        });
        item.addEventListener('mouseout', (e) => {
            e.target.classList.remove('btn_active');
        });
    });
}
const promoLinks = document.querySelectorAll('.promo__link'),
      contactBtn = document.querySelectorAll('.contacts__btn');

toogleActiveBtn(promoLinks);
toogleActiveBtn(contactBtn);

// pageup

const pageUp = document.querySelector('.pageup');


window.addEventListener('scroll', function() {
    if (pageYOffset > 1000) {
        pageUp.style.display = 'inline';
    } else {
        pageUp.style.display = 'none';
    }
});
