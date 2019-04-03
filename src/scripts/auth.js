// Inicializar Firebase
const config = {
  apiKey: "AIzaSyANXB1QICy5UrOliUFpOzNOBt_2fKyC0_M",
  authDomain: "poua-8a563.firebaseapp.com",
  databaseURL: "https://poua-8a563.firebaseio.com",
  projectId: "poua-8a563",
  storageBucket: "poua-8a563.appspot.com",
  messagingSenderId: "777091228447"
};
firebase.initializeApp(config);


// Registro de usuario
const register = () => {
  let email = document.getElementById('emailRegister').value;
  let password = document.getElementById('passwordRegister').value;
  console.log(email);
  console.log(password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Manejar errores
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode + errorMessage);
    alert('Correo o contraseña inválidos');
  });
};

document.getElementById('btnRegister').addEventListener('click', register);


//Inicio de sesión
const login = () => {
  const emailLogin = document.getElementById('email').value;
  const passwordLogin = document.getElementById('password').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Manejar errores
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode + errorMessage);
    alert('Correo o contraseña incorrectos');
  });
};

document.getElementById('btnLogin').addEventListener('click', login);


//Observador
const watcher = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Existe usuario activo');
      showcontent();
      
      // Usuario está logueado
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      console.log('Usuario inactivo');
      // Usuario cierra sesión
    }
  });
};
watcher();

const showcontent = () => {
  let content = document.getElementById('content');
  content.innerHTML = 'Solo lo ve usuario activo';
};