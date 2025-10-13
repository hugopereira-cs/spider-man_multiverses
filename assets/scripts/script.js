function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenerToCards() {
    const cardsElements = document.getElementsByClassName('s-card');
    console.log(cardsElements);

    for (let i = 0; i < cardsElements.length; i++) {
        const card = cardsElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);

function selectCarouselItem (selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1) // converte o ID para número para realizar a multiplicação, subtrai 1 porque o primeiro elemento tem ID = 1, porém, seu seu rotateY é 0deg.
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;


    // remove a classe do botão que não está mais ativo, e a adiciona no botão que está atualmente ativo
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
}