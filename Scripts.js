const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav ul');

let active = 0;
let total = items.length;
let timer;

// Só roda o carrossel se existir carrossel na página
if (items.length > 0 && dots.length > 0 && prevButton && nextButton && numberIndicator) {

    function update(direction) {
        document.querySelector('.item.active')?.classList.remove('active');
        document.querySelector('.dot.active')?.classList.remove('active');

        if (direction > 0) {
            active = active + 1;
            if (active === total) active = 0;
        } else if (direction < 0) {
            active = active - 1;
            if (active < 0) active = total - 1;
        }

        items[active].classList.add('active');
        dots[active].classList.add('active');
        numberIndicator.textContent = String(active + 1).padStart(2, '0');
    }

    clearInterval(timer);
    timer = setInterval(() => update(1), 5000);

    prevButton.addEventListener('click', () => update(-1));
    nextButton.addEventListener('click', () => update(1));
}


// --- MENU MOBILE --- //
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    const lis = nav.querySelectorAll('li');

    if (nav.classList.contains('active')) {
        lis.forEach((li, index) => {
            li.style.opacity = '0';
            li.style.transform = 'translateX(20px)';
            setTimeout(() => {
                li.style.transition = 'all 0.4s ease';
                li.style.opacity = '1';
                li.style.transform = 'translateX(0)';
            }, index * 100);
        });
    } else {
        lis.forEach(li => {
            li.style.opacity = '0';
            li.style.transform = 'translateX(20px)';
        });
    }
});
