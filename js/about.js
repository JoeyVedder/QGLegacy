const spiderContainer = document.getElementById('spider-container');
const spiderWeb = document.getElementById('spider-web');
const spider = document.getElementById('spider');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    let newTop = 50 + scrollY / 10;

    spiderWeb.style.top = `${newTop}px`;
    spider.style.top = `${newTop + 15}px`;

    if (scrollY > 100) {
        spiderContainer.classList.add('fixed');
        spiderWeb.classList.add('fixed');
        spider.classList.add('fixed');
    } else {
        spiderContainer.classList.remove('fixed');
        spiderWeb.classList.remove('fixed');
        spider.classList.remove('fixed');
    }
});
