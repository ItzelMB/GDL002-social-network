import {wall} from './templatePerfil.js';


/*firebase.initializeApp({
  apiKey: 'AIzaSyANXB1QICy5UrOliUFpOzNOBt_2fKyC0_M',
  authDomain: 'poua-8a563.firebaseapp.com',
  projectId: 'poua-8a563',
});*/

//const db = firebase.firestore();


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

		/*const dlete = (id)=>{
			db.collection('users')
			.doc(id)
			.delete()
			.then(function() {
				console.log("Document successfully deleted!");

				}).catch(function(error) {
					console.error("Error removing document: ", error);
				});
			};*/

//Visualizar template de posts
  if (wall()){
		const visualizationPost = document.querySelector('#visualizationPost');
		console.log(visualizationPost);
		firebase.firestore().collection("users").orderBy("date","desc").onSnapshot((querySnapshot) => {
			visualizationPost.innerHTML = '';

			querySnapshot.forEach((doc) => {
				visualizationPost.innerHTML += `
            <article>
              <img src=''></img>
              <h6></h6>
            </article>

            <article id= "${doc.id}" class="postContainer">
              <h4></h4>
              <button class="editar" onclick="edit()"><i class="fas fa-pen"></i></button>
              <button class="eliminar"><i class="fas fa-trash-alt"></i></button>
              <p class="postextStyle">${doc.data().comment}</p>
              <img src=''></img>
              <button><i class="fas fa-heart" style="color #F1C711"></i></button>
            </article>

            <article>
              <i></i>
              <p></p>
              <p></p>
              <h6></h6>
            </article>
          `;

          firebase.firestore().collection("users").orderBy('date', 'desc');




						let deleteButtons = document.querySelectorAll('.eliminar');
						deleteButtons.forEach(button => button.addEventListener("click",dlete));
					/*		
					for (var i = 0; i < deleteButtons.length; i++) {
			      		deleteButtons[i].addEventListener('click', function (event) {
			        		dlete(event.target.id);
			        				console.log(event.target.id);
			    			});
					}
					*/
					//document.querySelector('.eliminar').addEventListener('click', dlete,false);
					//let orderPost = () => {

          //}

          //console.log(document.querySelector('.eliminar'));
          /*document.querySelector('.eliminar').addEventListener('click', () => {dlete(doc.id);
					});*/
					//dlete(doc.id));
          });

        });
  }
};

//Función para eliminar post
export function dlete(id) {
let idPost = id.target.parentNode.getAttribute("id");
console.log(idPost);
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
/*function editPost(id, comment) {
	document.getElementById("createPost").value = comment;

	const washingtonRef = db.collection("users").doc(id);
	// Set the "capital" field of the city 'DC'
	return washingtonRef.update({
			comment: comment
		})
		.then(function () {
			dlete(id);
			console.log("Document successfully updated!");
		})
		.catch(function (error) {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});
}; */
