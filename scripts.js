document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {

let ciudad;
let boton = document.querySelector(".enviar")
let ingreso = document.querySelector(".ingreso")
let nombre = document.getElementById("ciudad")
let temperatura = document.getElementById("temperatura")
let icono = document.getElementById("wicon")

function cargarCiudad(){

    ciudad = "Buenos Aires"
    
    //jQuery.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=1a9b3670ada3ece0551373f7325e028d"
      //  , function(data) {
        //console.log(data)
    //})

    boton.addEventListener("click", function(){
        
        ciudad = ingreso.value;
        document.querySelector(".container").style.visibility = "visible"
      
        if(!ciudad==""){

        
        jQuery.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=1a9b3670ada3ece0551373f7325e028d", function(data) {
            
              
            nombre.textContent = data.name
            temperatura.innerHTML= Math.round(data.main.temp - 273.15)+ "<sup>°C</sup>";
            document.getElementById("descripcion").innerHTML= data.weather[0].description
            icono.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        
        }).fail(function(){
            alert("error")
        })}else{
            alert("error ingrese un dato")
        }
        ingreso.value="";
    })

}

cargarCiudad()

})
})
