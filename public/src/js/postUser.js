import {wall} from './templatePerfil.js';

// Inicializar firebase
export let basePost=()=>{
	let comment = document.querySelector(".createPost").value;
  let time = new Date();

	firebase.firestore().collection("users").add({ //agrega un ID automatico a cada usuario
    comment: comment,
    date: time

	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
		document.querySelector(".createPost").value = "";

	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
};


//Inicializa funcion para mostrar post
export const newpost = () => {

//Visualizar template de posts
  if (wall()){
		const visualizationPost = document.querySelector('#visualizationPost');
		console.log(visualizationPost);
		firebase.firestore().collection("users").orderBy("date","desc").onSnapshot((querySnapshot) => {
			visualizationPost.innerHTML = '';

			querySnapshot.forEach((doc) => {
				visualizationPost.innerHTML += ` 
            <article id= "${doc.id}" class="postContainer">
              <h4></h4>
              <button class="edit"><i class="fas fa-pen"></i></button>
              <button class="eliminate"><i class="fas fa-trash-alt"></i></button>
              <p class="postextStyle">${doc.data().comment}</p>
              <img src=''></img>
              <button class="like"><i class="fas fa-heart"></i></button>
            </article>
          `;

					let deleteButtons = document.querySelectorAll('.eliminate');
					deleteButtons.forEach(button => button.addEventListener('click', function(event){
						dlete(event);
					}));

					let editButtons = document.querySelectorAll('.edit');
					editButtons.forEach(button => button.addEventListener('click', function(event){
							editPost(event);
					}));
          });
        });
  }
};

//Función para eliminar post
export const dlete = (e) => {
let idPost = e.target.parentNode.getAttribute("id");
firebase.firestore().collection('users')
	.doc(idPost)
	.delete()
	.then(function () {
		console.log('Document successfully deleted!');
	})
	.catch(function (error) {
		console.error('Error removing document: ', error);
	});
};

//Función para editar post
export const editPost = (e) => {
	let idPost = e.target.parentNode.getAttribute("id");
	let originalText = e.target.parentNode.querySelector('.postextStyle').textContent;
	let areaText = document.getElementById("createPost");
	areaText.value = originalText;

	let buttonEditar = document.getElementById("public");
	buttonEditar.innerHTML = 'GUARDAR';
	
	buttonEditar.removeEventListener('click',basePost);

	//Variable function because it's only temporal for update a post
	let newUpdateEvent =  function() {
		let textChanged = areaText.value;

		const idText = firebase.firestore().collection("users").doc(idPost);
		return idText.update({
				comment: textChanged
		})
		.then(function () {	
			buttonEditar.removeEventListener('click',newUpdateEvent);
			areaText.value = '';
			buttonEditar.innerHTML = 'PUBLICAR';
			buttonEditar.addEventListener('click',basePost);
			console.log("Document successfully updated!");
		})
		.catch(function (error) {

		console.error("Error updating document: ", error);
		});
	}; 

	buttonEditar.addEventListener('click', newUpdateEvent);
	
};