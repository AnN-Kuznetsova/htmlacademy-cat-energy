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
  var requiredInputs = profileForm.querySelectorAll('.form-fieldset__input[required]');
  console.log(requiredInputs);
  var catNameInput = profileForm.querySelector('#cat-name');

  //  Local Storage
  var isStorageSupport = true;
  var storageCatName = "";

}

//  Проверка заполнения обязательных полей
/* var verificationRequiredFields = function (requiredField) {
  if (!requiredField.value) {
    requiredField.classList.add('form-fieldset__input--error');
  } else {
    requiredField.classList.remove('form-fieldset__input--error');
  }
} */



//console.log(catNameInput.value);


/* //  Проверка Local Storage
try {
  storageCatName = localStorage.getItem("catName");
} catch (err) {
  isStorageSupport = false;
}

if (storageCatName) {
  catNameInput.value = storageCatName;
} */



//  Проверка обязательных полей
/* for (var i=0; i<requiredInputs.length; i++) {
  verificationRequiredFields(requiredInputs[i]);

  requiredInputs[i].onblur = function() {
    //console.log('Потеря фокуса');
    console.log(this.value);
    verificationRequiredFields(this);
  };
} */



//verificationRequiredInputs();



/* //  Проверка отправки формы
profileForm.addEventListener("submit", function (evt) {
  if (!catNameInput.value) {
    console.log("Нужно что-то ввести");
    evt.preventDefault();
    catNameInput.classList.add("form-fieldset__input--error");
    /* modalSearch.classList.remove("modal-search-error");
    modalSearch.offsetWidth = modalSearch.offsetWidth;
    modalSearch.classList.add("modal-search-error"); *//*
  } else {
    if (isStorageSupport) {
      //modalSearch.classList.remove("modal-search-error");
  if (!catNameInput.value) {
      localStorage.setItem("catName", catNameInput.value);
      //catNameInput.classList.remove("form-fieldset__input--error");
    }
  }
}); */
