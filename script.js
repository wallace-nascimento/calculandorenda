
//============ CALCULO DO JUROS COMPOSTOS===========//

const jurosComposto=()=>{
  let capital = document.getElementById('capital').value
  let juros = document.getElementById('juros').value
  let tempo= document.getElementById('tempo').value
  let resultadoComposto = document.querySelector('#resultadoComposto')

  //transforma ',' em '.', quando digitado no formulario pelo usuario
  juros = parseFloat(juros.replace(',', '.'))
  capital = parseFloat(capital.replace(',', '.'))

  //formula do juros compostos
  calc = capital * (1 + juros / 100)**tempo
  
  //Conversão para moeda
  dinheiro = calc. toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  if(capital.length == 0 || juros.length == 0 || tempo.length == 0){
    alert('Verifique os campos e tente novamente.')
  }
  else{
    //formula da rentabilidade
     taxa = calc - capital
     //Conversão para moeda
     taxaConver = taxa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

     resultadoComposto.style.backgroundColor="#52a6ff"
     resultadoComposto.style.color="white"

     resultadoComposto.innerHTML += `<span>Juros do período</span> <br>${taxaConver} <br><br> Total investido <br>${dinheiro}`
  }
  //Limpar formulário 
  capital.value = ''
  capital.focus()
  juros.value = ''
  juros.focus()
  tempo.value = ''
  tempo.focus()
}

//=================== CALCULO DO CDI========================//

const calcCdi=()=>{
  let cdiAtual = document.getElementById('cdiAtual').value
  let taxaCdi = document.getElementById('taxaCdi').value
  let resultadoCdi = document.getElementById('resultadoCdi')
  
  ////transforma ',' em '.', quando digitado no formulario pelo usuario
  cdiAtual = parseFloat(cdiAtual.replace(',', '.'))
  taxaCdi = parseFloat(taxaCdi.replace(',', '.'))

  calc = taxaCdi * (cdiAtual / 100)  
  if(taxaCdi.length == 0 || cdiAtual.length == 0){
    alert('Verifique os campos e tente novamente.')
  }

  else{
    resultadoCdi.style.backgroundColor="#52a6ff"
    resultadoCdi.style.color="white"
    resultadoCdi.innerHTML = `Taxa CDI<br> ${calc.toFixed(2)}%`
  }

  //Limpar formulário
  cdiAtual.value = ''
  cdiAtual.focus()
  taxaCdi.value = ''
  taxaCdi.focus()
}

//=================== CALCULO DO IPCA(INFLAÇÃO)========================//



const calIpca=()=>{
  let rentabilidade = document.getElementById('rentabilidade').value
  let ipca = document.getElementById('ipca').value
  let resIpca = document.getElementById('resIpca')
  let rentabilidade2 = parseFloat(rentabilidade.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario
  ipca = parseFloat(ipca.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario

  calc = ((1 + rentabilidade2 / 100) / (1 + ipca / 100) -1) * 100 

  if(rentabilidade.length == 0 || ipca.length == 0){
    alert('Verifique os campos e tente novamente.')
  }
  else if(calc < 0){
    resultadoIpca.style.color="red"
    resultadoIpca.style.backgroundColor="white"
    resultadoIpca.innerHTML = `Rentabilidade Anual <br>${calc.toFixed(2)}%`
  }

  else{
    resultadoIpca.style.color="blue"
    resultadoIpca.style.backgroundColor="white"
    resultadoIpca.innerHTML = `Rentabilidade Anual<br>${calc.toFixed(2)}%`
  }
  //Limpar formulário
  rentabilidade.value = ''
  rentabilidade.focus()
  ipca.value = ''
  rentabilidade.focus()
}


//Função para reseta e fazer uma nova consulta 
function carregar(){
  let resultadoComposto = document.querySelector('#resultadoComposto')
  let resultadoCdi = document.querySelector('#resultadoCdi')
  let resultadoIpca = document.querySelector('#resultadoIpca')
  resultadoComposto.style.backgroundColor='#e0e1d9'
  resultadoIpca.style.backgroundColor='#e0e1d9'
  resultadoCdi.style.backgroundColor='#e0e1d9'
  resultadoIpca.innerHTML = '' ;
  resultadoCdi.innerHTML = '' ;
  resultadoComposto.innerHTML = '' ;
}

