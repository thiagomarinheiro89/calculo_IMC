function calcular(){
  imc = 0;
  status = "";
  nome = document.getElementById("nome").value;
  idade = document.getElementById("idade").value;
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  if(nome=="" || idade==""||peso==""||altura==""){
    document.getElementById('erro').style.display = "block";
  } else {
    imc = peso/(altura*altura);

    if(imc < 17){
      status = "Muito abaixo do peso";
      document.getElementById('grafico').src = "img/1.png";
    } else if(imc < 18.49){
      status = "Abaixo do peso";
      document.getElementById('grafico').src = "img/2.png";
    } else if(imc < 24.99){
      status = "Peso Normal";
      document.getElementById('grafico').src = "img/3.png";
    } else if(imc < 29.99){
      status = "Acima do peso";
      document.getElementById('grafico').src = "img/4.png";
    } else if(imc < 34.99){
      status = "Obesidade I";
      document.getElementById('grafico').src = "img/5.png";
    } else if(imc < 39.99){
      status = "Obesidade II";
      document.getElementById('grafico').src = "img/6.png";
    } else {
      status = "Obesidade III";
      document.getElementById('grafico').src = "img/7.png";
    }

    document.getElementById('calculo').innerHTML = "<center>Ficha Técnica </center><br>"+
                                                    "<hr>"+
                                                    "<b>Paciente: </b>"+nome+
                                                    "<br>"+
                                                    "<b>Idade: </b>"+idade+
                                                    "<br>"+
                                                    "<b>Peso: </b>"+peso+
                                                    "<br>"+
                                                    "<b>Altura: </b>"+altura+
                                                    "<hr>"+
                                                    "<b>IMC: </b>"+parseFloat(imc).toFixed(2)+
                                                    "<br>"+
                                                    "<b>Situacao: </b>"+status;

    document.getElementById('calculo').style.display = "block"

  }

}

function limpar(){
  window.location.assign("index.html");
}
