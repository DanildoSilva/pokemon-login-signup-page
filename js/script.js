function togglePW(){
  var password = document.querySelector('#password');
  const eye = $('#eye');

  if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text');
    eye.html(feather.icons['eye-off'].toSvg());
  } else {
    password.setAttribute('type', 'password');
    eye.html(feather.icons['eye'].toSvg());
  }
}