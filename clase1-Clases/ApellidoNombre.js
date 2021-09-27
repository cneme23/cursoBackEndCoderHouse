class Usuario {
    constructor(nombre,apellido,libros,mascotas){
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
  //-------------------------------------------------
  //Con funcion clasica
    getFullName(){
      return `${this.nombre} ${this.apellido}`
    }
  //Arrow function
    getFullName = () => `${this.nombre} ${this.apellido}` 
  //--------------------------------------------------
  //Con funcion clasica
    addMascota(mascota){
      this.mascotas.push(mascota);
    }
  //Arrow function
    addMascota = (mascota) => this.mascotas.push(mascota);
  
  //--------------------------------------------------
  //Con funcion clasica
    countMascotas(){
      return this.mascotas.length;
    }
  //Arrow function
    countMascotas = () => this.mascotas.length;
  
  //----------------------------------------------
  //Con funcion clasica
    addBook(nombreLibro,autorLibro){
      this.libros.push({nombre:nombreLibro,autor:autorLibro});
    }
  //Arrow function
    addBook= (nombreLibro,autorLibro) => this.libros.push({nombre:nombreLibro,autor:autorLibro});
  //----------------------------------------------
  
  //Con funcion clasica
  getBookNames(){
    return this.libros.map(function(libro){
        return libro.nombre
    }
    )
    
  }
  //Con funcion arrow
  getBookNames = () => this.libros.map(libro => libro.nombre);
    
  
  };
  
  //Instancia del usuario
  let nuevoUsuario = new Usuario("Carlos","Neme",[{nombre:"El resplandor", autor:"Dard Maden "},{nombre:"La Resistencia", autor:"Hernesto Sabato"}],
  ["Pez", "Gato"] );
  
  //Ejecucion de los metodos
  console.log(nuevoUsuario.getFullName());
  nuevoUsuario.addMascota("perro");
  console.log(nuevoUsuario.mascotas);
  console.log(nuevoUsuario.countMascotas());
  nuevoUsuario.addBook("Alibaba","desconocido");
  console.log(nuevoUsuario.libros)
  console.log(nuevoUsuario.getBookNames()); 
  
  
  