/*  Главное меню  */
var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');

//  Скрытие меню при инициализации JS
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');

//  Нажатие кнопки открытия/закрытия меню
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


/*  Форма  */
var profileForm = document.querySelector('.profile-form');
if (profileForm) {
  var catNameInput = profileForm.querySelector('#cat-name');
  var catWeightInput = profileForm.querySelector('#cat-weight');
  var catAgeInput = profileForm.querySelector('#cat-age');
  var ownerEmailInput = profileForm.querySelector('#owner-email');
  var ownerTelInput = profileForm.querySelector('#owner-tel');

  //  Local Storage
  var isStorageSupport = true;
  var storageCatName = '';
  var storageCatWeight = '';
  var storageCatAge = '';
  var storageOwnerEmail = '';
  var storageOwnerTtel = '';

  try {
    storageCatName = localStorage.getItem('catName');
    storageCatWeight = localStorage.getItem('catWeight');
    storageCatAge = localStorage.getItem('catAge');
    storageOwnerEmail = localStorage.getItem('ownerEmail');
    storageOwnerTel = localStorage.getItem('ownerTel');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageCatName) {
    catNameInput.value = storageCatName;
  }
  if (storageCatWeight) {
    catWeightInput.value = storageCatWeight;
  }
  if (storageCatAge) {
    catAgeInput.value = storageCatAge;
  }
  if (storageOwnerEmail) {
    ownerEmailInput.value = storageOwnerEmail;
  }
  if (storageOwnerTel) {
    ownerTelInput.value = storageOwnerTel;
  }

  profileForm.addEventListener("submit", function (evt) {
    if (!catNameInput.value || !catWeightInput.value || !ownerEmailInput.value || !ownerTelInput.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('catName', catNameInput.value);
        localStorage.setItem('catWeight', catWeightInput.value);
        localStorage.setItem('catAge', catAgeInput.value);
        localStorage.setItem('ownerEmail', ownerEmailInput.value);
        localStorage.setItem('ownerTel', ownerTelInput.value);
      }
    }
  });
}
