var pacientes = document.querySelectorAll('.paciente')

for(var i = 0 ; i < pacientes.length ; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector('.info-imc')

    var pesoEhValido = true
    var alturaEhValida = true

    if(peso <= 0 || peso >= 700) {
        console.log('Peso inválido!')
        pesoEhValido = false        
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add('paciente-invalido')        
    }

    if(altura <= 0 || altura >= 3) {
        console.log('Altura inválida!')
        alturaEhValida = false        
        tdImc.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido')
    }

    if(alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(1)
    } 

    if(alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(1)
    }       
    
}