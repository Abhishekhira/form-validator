"use strict";
console.log('file is attached')
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function showError(input,message) {
    const formControl=input.parentElement;
    formControl.className='form-control error'
}

form.addEventListener('click',function (e) {
    e.preventDefault()
  if (username.value==="") {
     showError(username,'username is required')
  }
})