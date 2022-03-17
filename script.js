//============ CALCULO DO JUROS COMPOSTOS===========//

function jurosComposto(){
  let capital = document.getElementById('cap').value
  let juros = document.getElementById('jur').value
  let tempo= document.getElementById('tem').value
  let resultadoComposto = document.querySelector('#resCom')

  //transforma ',' em '.', quando digitado no formulario pelo usuario
  juros = parseFloat(juros.replace(',', '.'))
  capital = parseFloat(capital.replace(',', '.'))
  
  //formula do juros compostos
  calc = capital * (1 + juros / 100)**tempo

  //Conversão para moeda
  resultadoCalc = calc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  if(capital.length == 0 || juros.length == 0 || tempo.length == 0){
    alert('Verifique os campos e tente novamente.')
  }
  else{
    //formula da rentabilidade
     taxa = calc - capital
     
     //Conversão para moeda
     resultadoJuros = taxa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     
     resCom.style.backgroundColor="#52a6ff"
     resCom.style.color="white"
     resCom.innerHTML += `<span>Juros do período</span> <br>${resultadoJuros} <br><br> Total investido <br>${resultadoCalc}`
  }

  //Limpar formulário 
  cap.value = ''
  cap.focus() 
  jur.value = ''
  jur.focus()
  tem.value = ''
  tem.focus()
  
}

//=================== CALCULO DO CDI========================//

function calcCdi(){
  let cdiAtual = document.getElementById('cdi').value
  let taxaCdi = document.getElementById('tcdi').value
  let resultadoCdi = document.getElementById('resCdi')

  //transforma ',' em '.', quando digitado no formulario pelo usuario
  let cdiAtualFloat = parseFloat(cdiAtual.replace(',', '.'))
  let taxaCdiFloat = parseFloat(taxaCdi.replace(',', '.'))
  
  if(cdiAtual.length === 0 || taxaCdi.length === 0){
    alert('Verifique os campos e tente novamente.')

  } else{
    //Fomula do cdi
    calc = taxaCdiFloat * (cdiAtualFloat / 100)

    resultadoCdi.style.backgroundColor="#52a6ff"
    resultadoCdi.style.color="white"
    resultadoCdi.innerHTML = `Taxa CDI<br> ${calc.toFixed(2)}%`
  }

  //Limpar formulário
  cdi.value = ''
  cdi.focus()
  tcdi.value = ''
  tcdi.focus()
}

//=================== CALCULO DO IPCA(INFLAÇÃO)========================//



function calIpca(){
  let rentabilidade = document.getElementById('rent').value
  let ipca = document.getElementById('fipca').value
  let resultadoIpca = document.getElementById('resIpca')

  //transforma ',' em '.', quando digitado no formulario pelo usuario
  const rentabilidadeFloat = parseFloat(rentabilidade.replace(',', '.'))
  const ipcaFloat = parseFloat(ipca.replace(',', '.'))

  //Formula do IPCA
  ipcaCalc = ((1 + rentabilidadeFloat / 100) / (1 + ipcaFloat / 100) -1) * 100
   
  if(rentabilidade.length == 0 || ipca.length == 0){
    alert('Verifique os campos e tente novamente.')
  }
  else if(ipcaCalc < 0){

    resultadoIpca.style.color="red"
    resultadoIpca.style.backgroundColor="white"
    resultadoIpca.innerHTML = `Rentabilidade Anual <br>${ipcaCalc.toFixed(2)}%`
  }

  else{
    resultadoIpca.style.color="blue"
    resultadoIpca.style.backgroundColor="white"
    resultadoIpca.innerHTML = `Rentabilidade Anual<br>${ipcaCalc.toFixed(2)}%`
  }
  //Limpar formulário
  rent.value = ''
  rent.focus()
  fipca.value = '' 
  fipca.focus()
}


//Função para reseta e fazer uma nova consulta 
function carregar(){
  let resultadoComposto = document.querySelector('#resCom')
  let resultadoCdi = document.querySelector('#resCdi')
  let resultadoIpca = document.querySelector('#resIpca')

  resultadoComposto.style.backgroundColor='#e0e1d9'
  resultadoIpca.style.backgroundColor='#e0e1d9'
  resultadoCdi.style.backgroundColor='#e0e1d9'
  resultadoIpca.innerHTML = '' ;
  resultadoCdi.innerHTML = '' ;
  resultadoComposto.innerHTML = '' ;
}

