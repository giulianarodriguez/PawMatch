const Mascotas = [
    { nombre: "tito", edad: "cachorro", genero: "macho", tipo: "perro"},
    { nombre: "juana", edad: "adulto", genero: "hembra", tipo: "perro"},
    { nombre: "roco", edad: "adulto mayor", genero: "macho", tipo: "perro"},
    { nombre: "pelusa", edad: "cachorro", genero: "hembra", tipo: "gato"},
    { nombre: "luna", edad: "adulto", genero: "hembra", tipo: "gato"},
    { nombre: "atom", edad: "cachorro", genero: "macho", tipo: "gato"},
];
console.log(Mascotas);

function animales (id, nombre, edad, genero, tipo){
    this.id = id;
   this.nombre = nombre;
   this.edad = edad;
   this.genero = genero;
   this.tipo = tipo;
}


let index= prompt ("¡Hola, Bienvenido a PawMatch! \n ¿Qué le gustaría realizar? Ingresá la opción que corresponda \n 1 - Adoptar una mascota \n 2 - Buscar una mascota \n 3 - Publicar una mascota \n 0 - Salir");

 switch(index){

        case "1": 

            let adoptado=alert(prompt("Ellos son los que estan esperando un hogar: \n Tito: Perro cachorro \n Juana: Perra adulta \n Roco: Perro adulto mayor \n Pelusa: Gata cachorra \n Luna: Gata adulta \n Atom: Gato cachorro \n\n Ingresa el nombre correspondiente a la mascota que deseas adoptar \n 0 - Salir"));

            //No se porque me devuelve la respuesta en un alert y porque si pongo adoptado en el alert en vez de decirme lo que escribio el usuario me da indefinido

            if (adoptado != "0"){

                alert("Gracias por adoptar! Nos estaremos comunicando para finalizar la adopción, por favor a continuación completa los datos")

                let adoptante=prompt("Por favor indicanos tu nombre");

                let mailadoptante= prompt("Por favor ingresa tu emal");

                alert("Perfecto " + adoptante + " en minutos te llegará el formulario al mail " + mailadoptante);

                console.log( "El adoptante es " + adoptante + " y su email es " + mailadoptante);
            
            break;

            } else {
                alert("Hasta la próxima, te esperamos!");
            }
        
        break;

        case "2": 

            let busqueda= prompt("Indique por que categoría desea filtrar la búsqueda ingresá la opción que corresponda \n 1 - Por nombre \n 2 - Por edad \n 3 - Por género \n 4 - Por tipo \n 0 - Salir")

            if (busqueda == "1"){

                let filtro = prompt("Indique el nombre de la mascota en minúsculas");

                let resultados = Mascotas.filter(animal => animal.nombre.includes(filtro));

                //No me salió poner los resultados en un alert, me figuraban como objetos

                console.log(resultados);

            } else if (busqueda == "2") {

                let filtro = prompt("Indique la edad de la mascota que desea adoptar \n (cachorro - adulto o adulto mayor)");

                let resultados = Mascotas.filter(animal => animal.edad.includes(filtro));

                console.log(resultados);

            } else if (busqueda == "3") {

                let filtro = prompt("Indique el género de la mascota que desea adoptar \n (hembra o macho)");

                let resultados = Mascotas.filter(animal => animal.genero.includes(filtro));

                console.log(resultados);
                    
            } else if (busqueda == "4") {

                 let filtro = prompt("Indique el tipo de mascota que desea adoptar \n (perro o gato)");

                let resultados = Mascotas.filter(animal => animal.tipo.includes(filtro));

                console.log(resultados);
                    
            } else {
                alert("Hasta la próxima, te esperamos!");
            }
            
        break;

        case "3":

            let nombreNuevaMascota= prompt("Ingrese el nombre de la mascota \n En caso de no tener o no saberlo indíquele uno");
            let edadNuevaMascota= prompt("Ingrese si la mascota es cachorro, adulto o adulto mayor \n Escriba la opcion que corresponde en minúscula");
            let generoNuevaMascota= prompt("Ingrese si la mascota es hembra o macho \n Escriba la opcion que corresponde en minúscula");
            let tipoNuevaMascota= prompt("Ingrese si la mascota es gato o perro \n Escriba la opcion que corresponde en minúscula");

            const publicado= [nombreNuevaMascota,edadNuevaMascota, generoNuevaMascota, tipoNuevaMascota];
            Mascotas.push(publicado);

            alert("Perfecto, la mascota " + nombreNuevaMascota + " " + edadNuevaMascota + " " + generoNuevaMascota + " " + tipoNuevaMascota + " fue publicada con éxito, ante cualquier novedad nos estaremos comunicando, por favor a continuación completa los datos");
            let contacto=prompt("Por favor indicanos tu nombre");
            let mailcontacto= prompt("Por favor ingresa tu emal");
            console.log( "El contacto es " + contacto + " y su email es " + mailcontacto);
        
        break;

        case "0":
            alert("Hasta la próxima, te esperamos!");
        break;

        default:
            alert("Opción no válida, por favor vuelva a intentarlo");
        break;
    }









