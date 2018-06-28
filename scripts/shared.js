$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const API_URL = getHostURL();
const AUTH_URL = `${API_URL}/auth`

function getHostURL() {
  if (window.location.host.indexOf('localhost') != -1) {
    console.log('---localhost');
    return 'http://localhost:3000';
    //return 'https://impact-kobo.appspot.com';
  } else {
    console.log('---remote host');
    return 'http://localhost:3000';
    //return 'https://impact-kobo.appspot.com';
  }
}

function getUserFromForm() {
  const email = $('#email').val();
  const password = $('#password').val();

  const user = {
    email,
    password
  };

  return user;
}

function showErrorMessage(message) {
  const $errorMessage = $('#errorMessage');
  $errorMessage.text(message);
  $errorMessage.show();
}

function setIdRedirect(result) {
  localStorage.user_id = result.id;
  window.location = `/user.html?id=${result.id}`;
}

function redirectIfLoggedIn() {
  if (localStorage.user_id && localStorage.user_id != 'undefined') {
    window.location = `/user.html?id=${localStorage.user_id}`;
  }
}

function logout() {
  localStorage.removeItem('user_id');
  $.get(`${AUTH_URL}/logout`)
    .then(result => {
      window.location = '/index.html';
    });
}