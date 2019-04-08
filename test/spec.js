import MockFirebase from 'firebaseMocks';

const fixtureData = {
 __collection__: {
   users: {
     __doc__: {
       user_a: {
         age: 15,
         username: 'user_a',

         __collection__: {
           friends: {
             __doc__: {
               user_b: {
                 reference: '__ref__:users/user_b'
               }
             }
           }
         }
       }
}

global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true}),
import { registerUser } from '../src/js/auth.js';


describe('Mostrar registro de usuario', () => {
 it('Debería mostrar cuando se registra un usuario', () => {
   return registerUser('usuario@email.com', 12345678).then((email, password)=>{
     expect(email, password).toBe('usuario@email.com', 12345678);

   });
 });

});