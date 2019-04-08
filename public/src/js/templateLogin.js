import {signInWithEmailAndPassword, logInGoogle} from './userValue.js';

export let loginUser = () => {
   const formElem = document.createElement('form');
     let formSignIn= `
                      <section>
                        <img alt="logo Poua" src="src/imagenes/inicio-banner.png" class="desktop-index" width="100%"/>
                        <img alt="logo Poua" src="src/imagenes/inicio-mobile.png" class="mobile-index" width="100%"/>
                        <img alt="Texto Poua" src="src/imagenes/poua-text-mobile.png" class="mobile-index" width="100%"/>
                        <section class="inputs-buttons-img">
                        <form class= "container active" id="log-in" data-tab-for="login">
                              <button class="googleBtn">
                                  <a class="google" id="btnGmail" href="#"><i class="fab fa-google googleIcon"></i> Iniciar sesión con Google</a>
                              </button>
                              <div>
                                <input type="email" id="emaiLogin" class="input" placeholder="Correo"></input>
                              </div>
                                <input type = "password" id="passwordLogin" class= "input" placeholder="Contraseña"></input>
                              <div id="message"><p></p></div>
                              <button id="btnLogin" class="btn">INICIAR</button>

                          </form>
                        <div class="register">
                            <a id="createAccount" class="createAccount" href="#/register">CREAR CUENTA</a>
                        </div>
                        </section>
                    `;

    formElem.innerHTML = formSignIn;


    const btnSignIn = formElem.querySelector('#btnLogin');

    btnSignIn.addEventListener( 'click', () => {
        signInWithEmailAndPassword();
      });


    const btnSignInWithGoogle = formElem.querySelector('#btnGmail');

    btnSignInWithGoogle.addEventListener( 'click', () => {
        logInGoogle();
    });
    return formElem;
};