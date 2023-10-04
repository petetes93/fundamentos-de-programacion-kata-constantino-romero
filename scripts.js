const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {

  return `<p>${pregunta.titulo}</p>`
}

let respuesta = pregunta.respuestas

function imprimeTodasLasRespuestas(pregunta) {
  let impreAllRes = ""
  for (let i = 0; i < respuesta.length; i++) {

      impreAllRes += imprimeUnaRespuesta(respuesta[i])
  }
  return impreAllRes
}

function imprimeUnaRespuesta(respuesta) {
  let impreRes = "";

  impreRes += imprimeLabel(respuesta);
  impreRes += imprimeInput(respuesta);

  return impreRes
}

function imprimeLabel(respuesta) {
  let impLabel = ""

  impLabel +=  `<label for = "${respuesta.id}">${respuesta.label}</label>`

  return impLabel
}

function imprimeInput(respuesta) {
  let impInput = ""

 impInput += ` <input id = ${respuesta.id} name= ${respuesta.name} type= "radio" value = ${respuesta.value} ></input>`

 return impInput
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);