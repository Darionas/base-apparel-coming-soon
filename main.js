'Use strict'
const btn = document.querySelector('.section__arrow-container');
const email = document.getElementsByClassName('section__input-email');
const input_container = document.querySelector('.section__input-container');
const validation = document.querySelector('.section__validation');
const icon = document.querySelector('.section__icon-error');

btn.addEventListener('click', function() {
    let get_email = email[0].value;
    function exec() {
    input_container.classList.remove('colored--border');
    validation.classList.remove('show');
    icon.classList.remove('show');
    };
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(get_email)) {
        exec();
        setTimeout(notice, 2000);
        function notice() {
            alert(`Dear client,\n` +
            `-Your email ${get_email} was added to our clients list.\n` + 
             `-And we will keep you up-to-date with announcements and our launch deals.`);
        }
        setTimeout(location.reload(), 4000);     
    } else if(get_email == null || get_email == '') {
        /*input_container.classList.add('colored--border');
        validation.classList.add('show');
        icon.classList.add('show');*/
        email[0].placeholder = 'example@gmail.com';
    } else {
        input_container.classList.add('colored--border');
        validation.classList.add('show');
        icon.classList.add('show');
    }
})
