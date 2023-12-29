function tstval(){
  var inputetapacomb = document.getElementById('inputetapacomb')
  var inputalternadocomb = document.getElementById('inputalternadocomb')
  var inputreservacomb = document.getElementById('inputreservacomb')
  var inputadicionalcomb = document.getElementById('inputadicionalcomb')
  var pbv = document.getElementById('pbv')
  var pesotripulante = document.getElementById('pesotripulante')
  var pbvm = document.getElementById('pbvm')
  var bagageirokg = document.getElementById('bagageirokg')

  inputetapacomb.value = 20
  inputalternadocomb.value = 5
  inputreservacomb.value = 10
  inputadicionalcomb.value = 40
  pbv.value = 500
  pesotripulante.value = 180
  pbvm.value = 0.851
  bagageirokg.value = 5
}

function reset(){
  inputs = document.querySelectorAll('input');
  
  for (var i = 0; i < inputs.length; i++){
    var inputid = inputs[i].id;

    if (inputid !== 'pesokg' && inputid !== '757' && inputid !== 'ocupantesjavalorado1' && inputid !== 'ocupantesjavalorado2' && inputid !== 'combjavalorado1' && inputid !== 'combjavalorado2'){
      inputs[i].value = '';
    }
      
    location.reload()

  }

}



function carta(takeoffx, takeoffy, landingx, landingy){


    const ctx = document.getElementById('graficocanv');
    
  const data = {
  datasets: [{
  label: 'Takeoff',
  data: [{
    x: takeoffx,
    y: takeoffy
  },],
  backgroundColor: 'rgb(25, 170, 240)',
  },
  {
  label: 'Landing',
  data: [{
    x: landingx,
    y: landingy
  }],
  backgroundColor: 'rgb(236, 179, 56)'
  }
  ],
  };

  new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
          type : 'linear',
          position: 'top',
          min: 765,
          max: 935
        },
        
        y: {
          type : 'linear',
          position: 'right',
          min: 455,
          max: 815
        }
      },elements: {
              point: {
                  borderWidth: 2,
                  hoverBorderWidth: 3
              }
          },
          plugins: {
              legend: {
                  labels: {
                      color: 'rgb(50, 50, 50)'
                  }
              }
          }
    }
  });



}


function verificarmaster(){
  var inputetapacomb = document.getElementById('inputetapacomb')
  var inputetapahora = document.getElementById('inputetapahora');

  if (inputetapacomb.value || inputetapahora.value){
    verificar()
    verificar2()
  }
}

function verificar(){

  var inputetapahora = document.getElementById('inputetapahora');
  var inputalternadohora = document.getElementById('inputalternadohora');
  var inputreservahora = document.getElementById('inputreservahora');
  var inputadicionalhora = document.getElementById('inputadicionalhora')

  var inputetapacomb = document.getElementById('inputetapacomb')
  var inputalternadocomb = document.getElementById('inputalternadocomb')
  var inputreservacomb = document.getElementById('inputreservacomb')
  var inputadicionalcomb = document.getElementById('inputadicionalcomb')


  var inputetapacombemminutos = parseFloat(inputetapacomb.value) / 20 * 60
  var horas = Math.floor(inputetapacombemminutos / 60)
  var minutos = inputetapacombemminutos % 60

  var inputalternadohoraemminutos = parseFloat(inputalternadocomb.value) / 20 * 60
  var horasalternado = Math.floor(inputalternadohoraemminutos / 60)
  var minutosalternado = inputalternadohoraemminutos % 60

  var inputreservahoraemminutos = parseFloat(inputreservacomb.value) / 20 * 60
  var horasreserva = Math.floor(inputreservahoraemminutos / 60)
  var minutosreserva = inputreservahoraemminutos % 60

  var inputadicionalhoraemminutos = parseFloat(inputadicionalcomb.value) / 20 *60
  var horasadicional = Math.floor(inputadicionalhoraemminutos / 60)
  var minutosadicional = inputadicionalhoraemminutos % 60

/////// se hora vazia= combustível completa hora, se combustível vazio= hora completa combustível

  if (inputetapahora.value == ''){
    inputetapahora.value = `${horas.toString().padStart(2, 0)}:${minutos.toString().padStart(2, 0)}`;
    inputalternadohora.value = `${horasalternado.toString().padStart(2, 0)}:${minutosalternado.toString().padStart(2, 0)}`;
    inputreservahora.value = `${horasreserva.toString().padStart(2, 0)}:${minutosreserva.toString().padStart(2, 0)}`;
    inputadicionalhora.value = `${horasadicional.toString().padStart(2, 0)}:${minutosadicional.toString().padStart(2, 0)}`;
  }

  var inputetapahorasplit = inputetapahora.value.split(":")
  var inputetapahorasplithoras = inputetapahorasplit[0]
  var inputetapahorasplitminutos = inputetapahorasplit[1]

  var inputalternadohorasplit = inputalternadohora.value.split(":")
  var inputalternadohorasplithoras = inputalternadohorasplit[0]
  var inputalternadohorasplitminutos = inputalternadohorasplit[1]

  var inputreservahorasplit = inputreservahora.value.split(":")
  var inputreservahorasplithoras = inputreservahorasplit[0]
  var inputreservahorasplitminutos = inputreservahorasplit[1]

  var inputadicionalhorasplit = inputadicionalhora.value.split(":")
  var inputadicionalhorasplithoras = inputadicionalhorasplit[0]
  var inputadicionalhorasplitminutos = inputadicionalhorasplit[1]


  if (inputetapacomb.value == ''){
    inputetapacomb.value = Math.floor((parseFloat(inputetapahorasplithoras) * 60 + parseFloat(inputetapahorasplitminutos)) / 60 * 20)
    inputalternadocomb.value = Math.floor((parseFloat(inputalternadohorasplithoras) * 60 + parseFloat(inputalternadohorasplitminutos)) / 60 * 20)
    inputreservacomb.value = Math.floor((parseFloat(inputreservahorasplithoras) * 60 + parseFloat(inputreservahorasplitminutos)) / 60 * 20)
    inputadicionalcomb.value = Math.floor((parseFloat(inputadicionalhorasplithoras) * 60 + parseFloat(inputadicionalhorasplitminutos)) / 60 * 20)
  }

  var minimocomb = document.getElementById('minimocomb');
  minimocomb.value = parseFloat(inputetapacomb.value) + parseFloat(inputalternadocomb.value) + parseFloat(inputreservacomb.value)

  //////minimo + adicional

  var totalcomb = document.getElementById('totalcomb');
  totalcomb.value = parseFloat(minimocomb.value) + parseFloat(inputadicionalcomb.value)

  /////total kilograma

  var totalkg = document.getElementById('totalkg')
  totalkg.value = (totalcomb.value * 0.72).toFixed(1)


//////////////    PESO DE DECOLAGEM



  var max757 = document.getElementById('757')
  var pbv = document.getElementById('pbv')
  var disponiveltotal = document.getElementById('disponiveltotal')

  disponiveltotal.value = parseFloat(max757.value) - parseFloat(pbv.value)

  var mincombreq = document.getElementById('mincombreq')
  var pesotripulante = document.getElementById('pesotripulante')
  var cargapagamax = document.getElementById('cargapagamax')

  if (mincombreq.value == ''){
    mincombreq.value = parseFloat(totalkg.value)
  }


  cargapagamax.value = (disponiveltotal.value - mincombreq.value - parseFloat(pesotripulante.value)).toFixed(1)


  /////////////////////////////   peso e balanceamento

  var pbvkg = document.getElementById('pbvkg')
  var pbvm = document.getElementById('pbvm')
  var pbvmomento = document.getElementById('pbvmomento')

  var ocupantekg = document.getElementById('ocupantekg')
  var ocupantem = document.getElementById('ocupantesjavalorado1')
  var ocupantemomento = document.getElementById('ocupantemomento')

  var bagageirokg = document.getElementById('bagageirokg')
  var bagageirom = document.getElementById('ocupantesjavalorado2')
  var bagageiromomento = document.getElementById('bagageiromomento')

  var pesozerocombkg = document.getElementById('pesozerocombkg')
  var pesozerocombm = document.getElementById('pesozerocombm')
  var pesozerocombmomento = document.getElementById('pesozerocombmomento')

  var combkg = document.getElementById('combkg')
  var combm = document.getElementById('combjavalorado1')
  var combmomento = document.getElementById('combmomento')

  var pesodeckg = document.getElementById('pesodeckg')
  var pesodecm = document.getElementById('pesodecm')
  var pesodecmomento = document.getElementById('pesodecmomento')

  var combetapakg = document.getElementById('combetapakg')
  var combetapam = document.getElementById('combjavalorado2')
  var combetapamomento = document.getElementById('combetapamomento')

  var pesopousokg = document.getElementById('pesopousokg')
  var pesopousom = document.getElementById('pesopousom')
  var pesopousomomento = document.getElementById('pesopousomomento')


  pbvkg.value = pbv.value

  ocupantekg.value = pesotripulante.value

  pesozerocombkg.value = parseFloat(pbvkg.value) + parseFloat(ocupantekg.value) + parseFloat(bagageirokg.value)

  combkg.value = totalkg.value

  pesodeckg.value = parseFloat(pesozerocombkg.value) + parseFloat(combkg.value)

  combetapakg.value = ((inputetapacomb.value) * 0.72).toFixed(1)

  pesopousokg.value = (parseFloat(pesodeckg.value) - parseFloat(combetapakg.value)).toFixed(1)



  pbvmomento.value = (parseFloat(pbvkg.value) * parseFloat(pbvm.value)).toFixed(1)

  ocupantemomento.value = (parseFloat(ocupantekg.value) * parseFloat(ocupantem.value)).toFixed(1)

  bagageiromomento.value = (parseFloat(bagageirokg.value) * parseFloat(bagageirom.value)).toFixed(1)


  pesozerocombmomento.value = (parseFloat(pbvmomento.value) + parseFloat(ocupantemomento.value) + parseFloat(bagageiromomento.value)).toFixed(1)



  pesozerocombm.value = (parseFloat(pesozerocombmomento.value) / parseFloat(pesozerocombkg.value)).toFixed(3)


  combmomento.value = combkg.value


  pesodecmomento.value = (parseFloat(pesozerocombmomento.value) + parseFloat(combmomento.value)).toFixed(1)


  pesodecm.value = (parseFloat(pesodecmomento.value) / parseFloat(pesodeckg.value)).toFixed(3)


  combetapamomento.value = combetapakg.value


  pesopousomomento.value = (parseFloat(pesodecmomento.value) - parseFloat(combetapamomento.value)).toFixed(1)


  pesopousom.value = (parseFloat(pesopousomomento.value) / parseFloat(pesopousokg.value)).toFixed(3)




var takeoffxsplit = pesodecm.value.split(".")[1]

var landingxsplit = pesopousom.value.split(".")[1]


var takeoffx = parseFloat(takeoffxsplit)
var takeoffy = parseFloat(pesodeckg.value)

var landingx = parseFloat(landingxsplit)
var landingy = parseFloat(pesopousokg.value)





carta(takeoffx, takeoffy, landingx, landingy)






}





function verificar2(){

  var inputetapahora = document.getElementById('inputetapahora').value;

  var inputalternadohora = document.getElementById('inputalternadohora').value;

  var inputreservahora = document.getElementById('inputreservahora').value;


  var inputetapahorasplit = inputetapahora.split(":")

  var inputetapahorasplithora = inputetapahorasplit[0]
  var inputetapahorasplitminuto = inputetapahorasplit[1]

////

  var inputalternadohorasplit = inputalternadohora.split(":")

  var inputalternadohorasplithora = inputalternadohorasplit[0]
  var inputalternadohorasplitminuto = inputalternadohorasplit[1]

////

  var inputreservahorasplit = inputreservahora.split(":")

  var inputreservahorasplithora = inputreservahorasplit[0]
  var inputreservahorasplitminuto = inputreservahorasplit[1]


  var somaminutos = parseFloat(inputetapahorasplithora) * 60 + parseFloat(inputetapahorasplitminuto) + parseFloat(inputalternadohorasplithora) * 60 + parseFloat(inputalternadohorasplitminuto) + parseFloat(inputreservahorasplithora) * 60 + parseFloat(inputreservahorasplitminuto)

  var resultadohora = Math.floor(somaminutos / 60)
  var resultadominutos = somaminutos % 60


  var minimohora = document.getElementById('minimohora');
  minimohora.value = `${resultadohora.toString().padStart(2, 0)}:${resultadominutos.toString().padStart(2, 0)}`


//////////////////////////      soma do mínimo com adicional


  var adicional = document.getElementById('inputadicionalhora')
  var totalhora = document.getElementById('totalhora')

  var minimohorasplit = minimohora.value.split(":")
  var minimohorasplithora = minimohorasplit[0]
  var minimohorasplitminuto = minimohorasplit[1]


  var adicionalhorasplit = adicional.value.split(":")
  var adicionalhorasplithora = adicionalhorasplit[0]
  var adicionalhorasplitminuto = adicionalhorasplit[1]

    

  var somatotalemminutos =  parseFloat(minimohorasplithora) * 60 + parseFloat(minimohorasplitminuto) + parseFloat(adicionalhorasplithora) * 60 + parseFloat(adicionalhorasplitminuto)

  var resultadototalhora = Math.floor(somatotalemminutos / 60)
  var resultadototalminuto = somatotalemminutos % 60

  totalhora.value = `${resultadototalhora.toString().padStart(2, 0)}:${resultadototalminuto.toString().padStart(2, 0)}`



}




var caixa = document.getElementById("caixa")
var caixa2 = document.getElementById("caixa2")
var caixa3 = document.getElementById("caixa3")

document.addEventListener("mousemove", function (e){

  var offsetx = -40
  var offsety = 30

  var offset2x = -70
  var offset2y = 23

  var offset3x = -25
  var offset3y = 23

  caixa.style.left = e.pageX + offsetx - caixa.clientWidth / 2 + "px";
  caixa.style.top = e.pageY + offsety - caixa.clientHeight / 2 + "px";

  caixa2.style.left = e.pageX + offset2x - caixa.clientWidth / 2 + "px";
  caixa2.style.top = e.pageY + offset2y - caixa.clientHeight / 2 + "px";

  caixa3.style.left = e.pageX + offset3x - caixa.clientWidth / 2 + "px";
  caixa3.style.top = e.pageY + offset3y - caixa.clientHeight / 2 + "px";


})





function aparissaodacaixa(){
  var caixa = document.getElementById("caixa")
  caixa.style.display = "block"
}

function sumissodacaixa(){
  var caixa = document.getElementById("caixa")
  caixa.style.display = "none"
}




function aparissaodacaixa2(){
  var caixa = document.getElementById("caixa2")
  caixa.style.display = "block"
}

function sumissodacaixa2(){
  var caixa = document.getElementById("caixa2")
  caixa.style.display = "none"
}



function aparissaodacaixa3(){
  var caixa = document.getElementById("caixa3")
  caixa.style.display = "block"
}

function sumissodacaixa3(){
  var caixa = document.getElementById("caixa3")
  caixa.style.display = "none"
}






function aparecerinfo(){
  var info = document.getElementById("infoid")
  info.style.display = "block"
}

function sumirinfo(){
  var info = document.getElementById("infoid")
  info.style.display = "none"
}