const AUTH_URL = `${API_URL}/auth`

$(() => {
  $('form').submit((event) => {
    event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();

    const user = {
      email,
      password
    };

    login(user)
      .then(result => {
        console.log(result);
        window.location = `/user.html?id=${result.id}`;
      }).catch(error => {
        console.error(error);

        const $errorMessage = $('#errorMessage');
        $errorMessage.text(error.responseJSON.message);
        $errorMessage.show();
      });
  });
});

function login(user) {
  return $.post(`${AUTH_URL}/login`, user);
}