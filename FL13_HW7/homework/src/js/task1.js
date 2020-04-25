let login = prompt('Login:');
let passStorage = {
  user: 'UserPass',
  admin: 'RootPass'
};
let currentTime = new Date().getHours();
const DAYTIME = 20;
const MINLOGINLENGTH = 4;

if (login === null) {
  alert('Canceled');
} else if (login.length < MINLOGINLENGTH && login.length !== 0) {
  alert('I don\'t know any users having name length less than 4 symbols');
} else {
  switch(login) {
    case '':
      alert('Canceled');
      break;
    case 'User':
      user();
      break;
    case 'Admin':
      admin();
      break;
    default:
      alert('I don\'t know you');
  }
}

function user() {
  let passUser = prompt('Password:');
  checkUser(passUser);

  function checkUser(passUser) {

    if (passUser === '' || passUser === null) {
      alert('Canceled');
    } else if (passUser === passStorage.user) {
      greetingsUser();
    } else {
      alert('Wrong password');
    }

    function greetingsUser() {
      currentTime < DAYTIME ? alert('Good day, dear User!') : alert('Good evening, dear User!');
    }
  }
}

function admin() {
  let passAdmin = prompt('Password:');
  checkAdmin(passAdmin);

  function checkAdmin(passAdmin) {
    if (passAdmin === '' || passAdmin === null) {
      alert('Canceled');
    } else if (passAdmin === passStorage.admin) {
      greetingsAdmin();
    } else {
      alert('Wrong password');
    }

    function greetingsAdmin() {
      currentTime < DAYTIME ? alert('Good day, dear Admin!') : alert('Good evening, dear Admin!');
    }
  }
}
