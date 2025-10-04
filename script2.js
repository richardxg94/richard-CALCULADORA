// Esperamos a que el DOM esté listo antes de ejecutar nuestro código.
document.addEventListener('DOMContentLoaded', () => {

  
  // --- 1) Tomamos referencias a los elementos del HTML por su id.
  // Create a timeline
let tl = gsap.timeline({
	delay: 0.5,
	paused: true, // default is false
	repeat: 2, // number of repeats (-1 for infinite)
	repeatDelay: 1, // seconds between repeats
	repeatRefresh: true, // invalidates on each repeat
	yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
	defaults: {
		// children inherit these defaults
		duration: 1,
		ease: 'none'
	},
	smoothChildTiming: true,
	autoRemoveChildren: true,
	onComplete: () => {
		console.log("finished")
  	},
	// other callbacks:
	// onStart, onUpdate, onRepeat, onReverseComplete
});
  const n1 = document.getElementById('n1');          // Input del primer número.
  const n2 = document.getElementById('n2');          // Input del segundo número.
  const resultado = document.getElementById('resultado'); // Párrafo donde mostramos el resultado.
  const mensaje = document.getElementById('mensaje');     // Párrafo para mensajes de validación.
  const buttons = document.querySelector('.buttons');     // Contenedor de los tres botones.

  // --- 2) Función de utilidad: intenta convertir los inputs a números.
  function leerNumeros() {
    const a = parseFloat(n1.value); // Convierte el valor del input 1 a número (permite decimales).
    const b = parseFloat(n2.value); // Convierte el valor del input 2 a número.
    return { a, b };                // Devuelve un objeto con ambos números.
  }

  // --- 3) Función que calcula según la operación pedida.
  function calcular(operacion) {
    mensaje.textContent = ''; // Limpiamos mensajes anteriores.
    const { a, b } = leerNumeros(); // Leemos los números ingresados.

    // Validamos que ambos sean números reales (no NaN).
    if (Number.isNaN(a) || Number.isNaN(b)) {
      mensaje.textContent = 'Por favor, escribe dos números válidos.'; // Aviso para el estudiante.
      return; // Salimos sin calcular.
    }

    // Según la operación, hacemos el cálculo.
    let r; // Variable para el resultado final.
    if (operacion === 'add') r = a + b;        // Suma.perro
    else if (operacion === 'sub') r = a - b;   // Resta.peero
    else if (operacion === 'mul') r = a * b;   // Multiplicación. perrito
    else if (operacion === 'div') r = a / b;   // division mi perro
    else if (operacion === 'p') r = (a * b) /100;  // porcentajeee
    // Mostramos el resultado en pantalla con un formato simple.
    resultado.textContent = `Resultado: ${r}`;
  }

  // --- 4) Manejamos los clics de los tres botones con un único listener (delegación).
  buttons.addEventListener('click', (e) => {
    const btn = e.target.closest('button'); // Verifica que el clic haya sido en un botón.
    if (!btn) return; // Si no fue un botón, no hacemos nada.

    const op = btn.dataset.op; // Leemos el tipo de operación del atributo data-op.
    calcular(op); // Llamamos a la función de cálculo con esa operación.
  });
});
