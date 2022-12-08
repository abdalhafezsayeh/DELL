

var KeyName = JSON.parse(window.localStorage.getItem('user'))

// console.log(KeyName.email)


document.querySelector('#display_email').innerHTML = KeyName.email;