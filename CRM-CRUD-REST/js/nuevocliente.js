/*      

Validar los campos del formulario{
    -Si hay error mostrar mensaje
    -Si se valida correctamente{
        -Guardar datos
        -Guardar datos en db.json
    }
}


*/

import { mostrarAlerta } from "./funciones.js";

(function () {
  const formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", validarFormulario);

  function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    if (!Object.values(cliente).every((campo) => campo !== "")) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }
    console.log("Se han validado todos los campos correctamente");
  }
})();
