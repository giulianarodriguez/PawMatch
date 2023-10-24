let index= prompt ("¡Hola, Bienvenido a PawMatch! \n ¿Qué te gustaría realizar? Ingresá la primer palabra en mayúsculas de la opción que corresponda \n ADOPTAR una mascota \n COMPRAR en la tienda \n SALIR");

switch (index) {

    case "ADOPTAR": 

        let adopcionMascotas= prompt("Ellos estan esperando un hogar: \n ROCO - perro cachorro mediano \n PEPA - perra adulta pequeña \n PAPITA - gata bebe \n HECTOR - gato adulto\n Ingresa su nombre en mayúsculas para adoptarlo o escribe SALIR para finalizar");

            if (adopcionMascotas = "ROCO" && "PEPA" && "PAPITA" && "HECTOR") {

                alert("Gracias por dale un nuevo hogar a " + adopcionMascotas + " Nos vamos a comunicar con vos para completar el formulario y terminar la adopción");
                let adoptante=prompt("Por favor indicanos tu nombre");
                let mail= prompt("Por favor ingresa tu emal");
                alert("En minutos te llegará el formulario al mail " + mail);
                console.log( "El adoptante es " + adoptante + " y su email es " + mail); 

            }else if (adopcionMascotas === "SALIR") {
                alert("Hasta la próxima, te esperamos!");

            }else{
                alert("Opción no válida, por favor vuelva a intentarlo");
            }

        break;
        
        case "COMPRAR":

            let costoProducto = 0

            consultarProductos()

            function mostrarProductos (infoProductos){

                switch (infoProductos){

                    case "COMEDERO":
                        costoProducto= 2500
                        alert (" El comedero es de metal con una base de madera y cuesta " + costoProducto);
                    break;

                    case "BEBEDERO":
                        costoProducto= 2500
                        alert (" El bebedero es de metal con una base de madera y cuesta " + costoProducto);
                    break;

                    case "CAMITA":
                        costoProducto= 6600
                        alert (" La camita tiene una cubierta externa de madera, interna de corderito con un almohadon de tela polar y cuesta " + costoProducto);
                    break;

                    case "COMIDA":
                        costoProducto= 12000
                        alert (" Bolsa de 20kg de Royal y cuesta " + costoProducto);
                    break;

                    case "CHAPITA":
                        costoProducto= 1100
                        alert (" La chapita es de metal estilo hebilla de cinturon que se pasa por el collar  y cuesta " + costoProducto);
                    break;

                    case "SALIR":
                        alert("Hasta la próxima, te esperamos!");
                    break;

                    default:
                        alert("Opción no válida, por favor vuelva a intentarlo");
                }
            }

            function consultarProductos() {

                let listadoProductos = prompt ("Estos son los productos de nuestra tienda solidaria: \n COMEDERO  \n BEBEDERO \n CAMITA \n COMIDA \n CHAPITA \n Ingresa el nombre el producto en mayúsculas para detalles o escribe SALIR para finalizar" );

                if (listadoProductos) {
                    mostrarProductos(listadoProductos)
                    mostrarPagos()
                    let respuesta = confirm("¿Deseas consultar el precio de otro producto?")
                    if (respuesta === true) {
                        consultarProductos()
                    }
                } else {
                    alert("Debes ingresar un producto válido.")
                }
            }
            
            function mostrarPagos() {
                console.log("Puedes pagar en: ")
                for (let i = 1; i <= 6; i++) {
                    console.log( i, "cuota(s) de " + (costoProducto / i).toFixed(2))
                }

            }

        break;    

        case "SALIR":
            alert("Hasta la próxima, te esperamos!");
        break;

        default:
            alert("Opción no válida, por favor vuelva a intentarlo");
        break;
    
    }

