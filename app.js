// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            


    const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
    for (const item of faqItems) {
        const onClick = () => {
        item.classList.toggle('active')
    }
    item.addEventListener('click', onClick)
    }


    const carousel = document.querySelector('.carousel');
    firstImg = carousel.querySelectorAll('img')[0];
    const arrowIcons = document.querySelectorAll('.wrapper i');

                
    arrowIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        })
    });
   
   




    let isDragStart = false, prevPageX, isDragging = false, prevScrollLeft, positionDiff;
    let firstImgWidth = firstImg.clientWidth + 14;

    const autoSlide = () => {

        if (carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) return; 

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;

        if (carousel,scrollLeft > prevScrollLeft) {
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }

         carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;

    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft
    }


const dragging = (e) => {
if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging');
    isDragging = true;
    positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove('dragging');

        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mouseup', dragStop);
    carousel.addEventListener('mouseleave', dragStop);