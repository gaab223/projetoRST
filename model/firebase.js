// Importa as funções do SDK do Firebase que você vai usar
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Importa a parte de autenticação do Firebase
import "firebase/compat/firestore"; // Caso você queira usar o Firestore, ou qualquer outro serviço

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBi1O-RwlnJr65pfzXBhDktWqWHx0d0aG4",
  authDomain: "arabe-a94cf.firebaseapp.com",
  projectId: "arabe-a94cf",
  storageBucket: "arabe-a94cf.firebasestorage.app",
  messagingSenderId: "1055492362563",
  appId: "1:1055492362563:web:81897b636f01617d679ff6",
  measurementId: "G-2J29790R93"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Você pode usar os serviços de autenticação do Firebase diretamente
const auth = firebase.auth(); // Objeto de autenticação
const firestore = firebase.firestore(); // Objeto de banco de dados Firestore, se precisar

// Agora você pode exportar as funções, caso precise usá-las em outros lugares
export { auth, firestore };
