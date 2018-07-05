redirectIfLoggedIn();

$(() => {
  $('form').submit((event) => {
    event.preventDefault();
    console.log('--getting user');
    const user = getUserFromForm();

    signup(user)
      .then(result => {
        console.log('--user created, redirecting');
        setIdRedirect(result);
      }).catch(error => {
        console.log('--user not created, ERROR');
        console.error(error);
        showErrorMessage(error.responseJSON.message);
      });
  });
});

function signup(user) {
  console.log('--inside signup function');
  return $.post(`${AUTH_URL}/signup`, user);
}