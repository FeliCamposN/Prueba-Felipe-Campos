

function scaleCard(card) {
    card.classList.add('clicked');
    setTimeout(() => {
        card.classList.remove('clicked');
    }, 500);
}

