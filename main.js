'Use strict';
/*jshint esversion: 8*/

const btn = document.querySelector('.section__arrow-container');
const email = document.getElementsByClassName('section__input-email')[0];
const input_container = document.querySelector('.section__input-container');
const validation = document.querySelector('.section__validation');
const icon = document.querySelector('.section__icon-error');
let get_email;


 function run() {
    get_email = email.value;
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(get_email)) {
        input_container.classList.remove('colored--border');
        validation.classList.remove('show');
        icon.classList.remove('show');  
    }
}

btn.addEventListener('click', function(e) {   
    console.log(e.detail); 
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(get_email)) {
        alert(`Dear client,\n` +
            `-Your email ${get_email} was added to our clients list.\n` + 
             `-And we will keep you up-to-date with announcements and our launch deals.`);
        setTimeout(location.reload(), 3000);  
    } else {
        input_container.classList.add('colored--border');
        validation.classList.add('show');
        icon.classList.add('show');
    }
});

// It lets submit form and/or input with 'enter' key
//https://stackoverflow.com/questions/20484738/submit-form-on-enter-key-with-javascript#answer-20484978
//https://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript#answer-50587874
document.onkeydown = function() {
    if(window.event.keyCode == '13') {
        let evt = new Event('click');
        btn.dispatchEvent(evt); // initiate, trigger event on btn
    }
};
