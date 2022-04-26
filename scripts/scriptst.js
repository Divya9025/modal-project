'use strict';

const showModal= document.getElementById('btn-show');
showModal.addEventListener('click',function() {
  cardContainer.classList.add('show');
  overlay.classList.add('show')
});

const closeModal= document.getElementById('btn-close');
closeModal.addEventListener('click',function() {
  cardContainer.classList.remove('show');
  overlay.classList.remove('show');
});

const cardContainer= document.getElementById('card-container');
const overlay= document.getElementById('overlay');
overlay.addEventListener('click',function() {
  cardContainer.classList.remove('show');
  overlay.classList.remove('show');
});