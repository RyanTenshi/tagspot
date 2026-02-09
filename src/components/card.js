export function deleteCard(cardElement) {
    cardElement.remove();
}
export function likeCard(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

export function createCard(cardData, deleteCallback, handleImageClick){
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);
    cardTitle.textContent = cardData.name;

    deleteButton.addEventListener('click', () => {
        deleteCallback(cardElement);
    });
    likeButton.addEventListener('click', likeCard);

    cardImage.addEventListener('click', () => {
        handleImageClick(cardData.name, cardData.link);
    });

    return cardElement;
}