const formulario = document.getElementById('formularioVehiculo');
    const resultado = document.getElementById('mensajeResultado');

    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();

      const motor = formulario.motor.value;
      const transmision = formulario.transmision.value;
      const traccion = formulario.traccion.value;
      const carroceria = formulario.carroceria.value;
      const puertas = formulario.puertas.value;

      const frase = `Quiero los 3 mejores coches que sean de motor ${motor}, con transmisión ${transmision}, que tengan tracción ${traccion}, tipo de carrocería ${carroceria} y con ${puertas} puertas.`;

      resultado.textContent = frase;
    });