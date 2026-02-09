import './styles/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';

const placesList = document.querySelector('.places__list');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');
const editForm = editPopup.querySelector('.popup__form');
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

function handleImageClick(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openModal(imagePopup);
}
initialCards.forEach((cardData) => {
    const card = createCard(cardData, deleteCard, handleImageClick);
    placesList.append(card);
});

editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openModal(editPopup);
});


addButton.addEventListener('click', () => {
    openModal(addPopup);
});

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => {
        closeModal(popup);
    });
});

document.querySelectorAll('.popup').forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target === popup) {
            closeModal(popup);
        }
    });
});


const addForm = addPopup.querySelector('.popup__form');
const cardNameInput = addPopup.querySelector('.popup__input_type_card-name');
const cardLinkInput = addPopup.querySelector('.popup__input_type_url');

editForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(editPopup);
});

addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCardData = {
        name: cardNameInput.value,
        link: cardLinkInput.value
    };
    const card = createCard(newCardData, deleteCard, handleImageClick);
    placesList.prepend(card);
    addForm.reset();
    closeModal(addPopup);
});