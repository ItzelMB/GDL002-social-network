import{changeHash} from './changePage.js';
import{basePost} from './postUser.js';

export let wall = () => {
  console.log("wal");
    const divElem = document.createElement('div');
    let viewHome = `

    <article class="post">
      <section class="mobile-barMenu">
        <a class="logoNav-mobile" href="#"><img src="src/imagenes/logo-poua-app.png" width="180"></a>
        <button id="menu-btn" class="menu-btn"><i class="fas fa-bars 2x menu-icon"></i></button>
      </section>

     <header>
      <nav class="nav">
       <ul>
         <li><a class="logoNav" href="#"><img src="src/imagenes/logo-poua-app.png" width="180"></a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>AMIGOS</a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>POR ESTADO</a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>POR ÉPOCA</a></li>
         <li><a href="#"><i class="fas fa-user fa-lg"></i></a></li>
         <li><a href="#"><i class="fas fa-calendar-plus fa-lg" style="color: #ffffff;"></i></a></li>
         <li><a href="#"><i class="fas fa-bookmark fa-lg" style="color: #ffffff;"></i></a></li>
         <li><button id="userLogoutBtn" class="logout"><i class="fas fa-sign-out-alt fa-2x"></i></button>
       </ul>
       </nav>
     </header>

     <section class="index">
      <img src="src/imagenes/boy.png" alt="user" width="45" height="45" class="user">
      <textarea name="Crea una publicación" id="createPost" class="createPost" cols="50" rows="15" placeholder="Cuenta la historia de un lugar que conoces"></textarea>
      <article class="controlsContainer">
        <img src="src/imagenes/image.png" alt="Subir foto" width="35" height="35">
        <img src="src/imagenes/location.png" alt="Localización" width="35" height="35">
        <select name="Seleccionar época" id="era" class="era">
          <option value="" selected>Seleccionar época</option>
          <option value="">México moderno</option>
          <option value="">México post-revolucionario</option>
          <option value="">Revolución mexicana</option>
          <option value="">Porfiriato</option>
          <option value="">Reforma</option>
          <option value="">México independiente</option>
          <option value="">Independencia</option>
          <option value="">Virreinato o Colonia</option>
          <option value="">La Conquista</option>
          <option value="">México prehispánico</option>
        </select>

        <select name="Seleccionar privacidad" id="privacy" class="privacy">
          <option value="">Público</option>
          <option value="">Privado</option>
        </select>
        <button id="public" class="makePost-btn">PUBLICAR</button>
      </article>
    </section>

    <section id="visualizationPost" class="visualizationPost">

    </section>

    <footer class="desktop-foot">
      <p class="foot-parr">Powered By Perla, Jess & Itinna. 2019</p>
    </footer>

    <footer class="mobile-foot">
        <i class="fas fa-home fa-2x"></i>
        <i class="fas fa-user fa-2x"></i>
        <i class="fas fa-calendar-plus fa-2x"></i>
        <i class="fas fa-bookmark fa-2x"></i>
    </footer>
    `;

     divElem.setAttribute('id', 'muro');
     divElem.innerHTML = viewHome;

     const userLogout = () =>{
      firebase.auth().signOut()

        .then (()=>changeHash('/login'))
        //console.log('saliendo');

        .catch(function(error){
          console.log(error);
        });
      };
      divElem.querySelector('#userLogoutBtn').addEventListener('click',userLogout);

      const btnPost = divElem.querySelector('#public');

      btnPost.addEventListener( 'click', basePost );
      return divElem;
};