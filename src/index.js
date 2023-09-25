import 'normalize.css'
import './styles/main.scss'

//popup
const openPopup = document.querySelectorAll('.open-popup');
const popup = document.querySelectorAll('.popup');

const body = document.body;

function openModal (elem) {
   elem.classList.add ('is-active');
   body.classList.add ('locked');
}

function closeModal(e) {
   if (e.target.classList.contains ('popup-close') || e.target.classList.contains('context') || e.target.classList.contains('blackout-menu') || e.target.classList.contains('modal-nav__link')) {
      e.target.closest ('.popup').classList.remove ('is-active');
      body.classList.remove ('locked');
    }  
}
openPopup.forEach(btn => {
   btn.addEventListener ('click', (e) => {
      let data = e.target.dataset.name;

      popup.forEach(modal => {
         if (modal.dataset.modal == data) {
            openModal(modal);
            }
        }) 
    })
})
popup.forEach(modal => {
   modal.addEventListener ('click', e => closeModal(e))
});
window.addEventListener ('keydown', e => {
   popup.forEach(modal => {
      if (e.key === "Escape" && modal.classList.contains ('is-active'))
         modal.classList.remove('is-active');
         body.classList.remove('locked');
      })
})