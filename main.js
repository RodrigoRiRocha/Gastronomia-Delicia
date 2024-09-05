$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form) {
            alert('Mensagem enviada com sucesso!');
            form.submit();
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids(); 
                console.log(camposIncorretos)
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                    
                }
            
        }
    })


});