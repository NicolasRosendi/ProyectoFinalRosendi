
const lista = [];
$("#cuerpo").append(`<div id="asistente">
<h2 id="hola" style="display:none">¿En qué lo puedo ayudar hoy?</h2>
<button id="RR" style="display:none">Lista</button>
<button id="calc" style="display:none">Calcular IVA(juegos de argentina)</button>
<a id="yutuv" href="https://www.youtube.com/" style="display:none">Youtube</a>
<a id="face" href="https://www.facebook.com/" style="display:none">Facebook</a>
<a id="goog" href="https://www.google.com/?hl=es" style="display:none">Google</a>
<a id="gm" href="https://mail.google.com/mail/u/0/?ogbl#inbox" style="display:none">G-mail</a>
</div>
<div id="nuevo" style="display:none">
<textarea id="Lista" style="display:none"></textarea>
<button id="Envio">Cargar datos</button>
</div>
<div id="calculo" style="display:none">
<input id="num1" type="number" placeholder="Precio Original"></input>
<button id="resultado">Calcular</button>
<h3 id="res">Resultado</h3>
<button id="guard">Guardar</button>
</div>`);



let logearse = document.getElementById("logeo");
let box =document.getElementById("cuerpo");
var boton = document.getElementById("logeo"); 
var nombre;


function nis(){
 

    let login = document.getElementById("cuerpo");
    let logg = document.getElementById("logeo");
    let namae = document.getElementById("nusuario");
    let surnamae = document.getElementById("rusuario");
    var tender = document.getElementById("nusuario").value;
    var lol = document.getElementById("rusuario").value;   
    var name = sessionStorage.getItem(tender);
    var surname = sessionStorage.getItem(lol);
    nombre = name;


    logg.parentNode.removeChild(logg);
    namae.parentNode.removeChild(namae);
    surnamae.parentNode.removeChild(surnamae);

$("h1").text("Bienvenido/a" + " " + tender + " " + lol);
$("#RR").slideDown(300);
$("#calc").slideDown(300);
$("#yutuv").slideDown(300);
$("#face").slideDown(300);
$("#goog").slideDown(300);
$("#gm").slideDown(300);
$("#hola").slideDown(300);
$("#Lista").slideDown(300);
$(`#RR`).on("click", function lolazo(){
    $("#nuevo").slideDown(300);
    $("#Envio").on("click", function desaparece(){
        let listeo = document.getElementById("Lista");
        lista.push(listeo);
        $("#nuevo").slideUp(300);

    

});
});
$("#calc").click(()=>{
   $("#calculo").slideDown(300);
   $("#resultado").click(function calcular(){
       let numero1 = document.getElementById("num1").value
      Resultado = numero1 * 1.65;
      $("#res").text(Resultado);
   });
   $("#guard").click(()=>{
       $("#calculo").slideUp(300);
   });
});  


}
