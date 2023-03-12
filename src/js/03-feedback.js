
import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(addToLocalStorage, 500))
form.addEventListener('submit', onSubmit)

localStorageInput();

function addToLocalStorage(e){
    
    formData[e.target.name] = e.target.value;
    const JsonFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, JsonFormData);
}

function onSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY)
}

function localStorageInput(){
    const setMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(setMassage){
        Object.entries(setMassage).forEach(([key, value]) => {
            form.elements[key].value = value;
            formData[key] = value;
        });
    }
}