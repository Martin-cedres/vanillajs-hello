/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Mis arreglos

  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class ",
    "when I was sleeping ",
    "while I was exercising ",
    "during my lunch ",
    "while I was praying "
  ];

  // declaro variables

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  let texto = "hola" + " " + "un pedacito de texto" + " " + "otro texto";
  let paragraph = document.getElementById("excuse");

  //Sentencia

  paragraph.innerText =
    who[random1] + action[random2] + what[random3] + when[random4];
};
