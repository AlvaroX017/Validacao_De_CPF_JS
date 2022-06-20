function validaCpf(cpf){
    var quant = cpf.length;
    if(quant != 11){
    return false;
    }
    else{

        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var count = 0;
        for(var i = 10; i > 1; i--){
            count += numeros.charAt(10 - i)*i;
        }

        console.log(count);
        var resultado = count % 11 < 2 ? 0 : 11 - (count % 11);
        
        if(resultado != digitos.charAt(0)){
            return false;
        }
        
        count = 0;
        numeros = cpf.substring(0, 11);

        for(var i = 11; i > 1; i--){
            count += numeros.charAt(11 - i)*i;
        }
        console.log(count);

        resultado = count % 11 < 2 ? 0 : 11 - (count % 11);

        if(resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
}
function validacao(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('input_cpf').value;
    console.log(cpf);

    var resultadoValidacao = validaCpf(cpf);

    if(resultadoValidacao){
        document.getElementById('success').style.display =  'block';
    }else{
        document.getElementById('error').style.display = 'block';
    }

}