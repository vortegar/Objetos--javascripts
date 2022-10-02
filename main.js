function Curso(nombre, precio, descripcion, turno, requisitos) {
    // propiedades
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    switch(turno.toLowerCase()) {
        case 'mañana':
            this.horario = '9 a 12h'
            break
        case 'tarde':
            this.horario = '15 a 18h'
            break
        case 'noche':
            this.horario = '19 a 22'
            break
        default:
            this.horario = '(no especificado)'
    }
    this.requisitos = requisitos
    this.profesor = null

    // métodos
    this.getHtml = function () {
        return  `
                    <div class="curso-container">
                        <h2>${this.nombre}</h2>
                        <h3>${this.descripcion}.</h3>
                        <p><span class="dato-titulo">Precio:</span> $<span class="dato-curso">${this.precio}</span></p>
                        <p><span class="dato-titulo">Días:</span> <span class="dato-curso">${this.horario}</span></p>
                        <p><span class="dato-titulo">Profesor:</span> $<span class="dato-curso">${this.precio}</span></p>
                        <p><span class="dato-titulo">Requisitos:</span> <span class="dato-curso">${this.requisitos}</span></p>
                    </div>
                `
    }
}

var _cursosContainer = document.getElementById('cursos-container')

var curso1 = new Curso('PHP', '52.000', 'Curso avanzado de uno de los lenguajes de programación más utilizados en la web.', 'noChe', 'Lorem ipsum dolor sit amet.')

// console.log(curso1)

// console.log('Nombre:', curso1.nombre)

// console.log(curso1.getHtml())

// curso1.nombre = 'JavaScript'
// console.log('Nombre:', curso1.nombre)
// console.log(curso1.getHtml())

// console.log('Precio:', curso1.precio)
// console.log('Horario:', curso1.horario)
// console.log('Requisitos:', curso1.requisitos)
// console.log('Profesor:', curso1.profesor)
// console.log(curso1.getHtml())
_cursosContainer.innerHTML += curso1.getHtml()

var curso2 = new Curso('CSS', '47.500', 'Conocé el lenguaje utilizado para definir los estilos de los sitios web.', 'TARDE', 'Hic modi corporis.')
// console.log(curso2.informacion)

_cursosContainer.innerHTML += curso2.getHtml()
