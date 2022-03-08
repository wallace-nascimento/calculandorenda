
//============ CALCULO DO JUROS COMPOSTOS===========//

const jurosComposto=()=>{
  let capital = document.getElementById('capital').value
  let juros = document.getElementById('juros').value
  let tempo= document.getElementById('tempo').value
  let resultadoComposto = document.querySelector('#resultadoComposto')
  juros = parseFloat(juros.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario
  capital = parseFloat(capital.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario

  calc = capital * (1 + juros / 100)**tempo//formula do juros compostos

  dinheiro = cal. toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});//Conversão para moeda

  if(capital.length == 0 || juros.length == 0 || tempo.length == 0){
    alert('Verifique os campos e tente novamente.')
  }
  else{
     taxa = calc - capital//formula da rentabilidade
     taxaConver = taxa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});//Conversão para moeda

     resultadoComposto.style.backgroundColor="#52a6ff"
     resultadoComposto.style.color="white"

     resultadoComposto.innerHTML += `<span>Juros do período</span> <br>${taxaConver} <br><br> Total investido <br>${dinheiro}`
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

function taxaCdi(){
  let cdiRef = document.getElementById('cdi').value
  let cdiCall = document.getElementById('tcdi').value
  let resCdi = document.getElementById('resCdi')
  let cdiRef2 = parseFloat(cdiRef.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario
  let cdiCall2 = parseFloat(cdiCall.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario

  cdiRes = cdiCall2 * (cdiRef2 / 100)  
  if(cdiRef.length == 0 || cdiCall.length == 0){
    alert('Verifique os campos e tente novamente.')
  }

  else{
    resCdi.style.backgroundColor="#52a6ff"
    resCdi.style.color="white"
    resCdi.innerHTML = `Taxa CDI<br> ${cdiRes.toFixed(2)}%`
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
  let ipcaIn = document.getElementById('ipca').value
  let resIpca = document.getElementById('resIpca')
  let rentabilidade2 = parseFloat(rentabilidade.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario
  let ipcaIn2 = parseFloat(ipcaIn.replace(',', '.'))//transforma ',' em '.', quando digitado no formulario pelo usuario

  ipcaCal = ((1 + rentabilidade2 / 100) / (1 + ipcaIn2 / 100) -1) * 100 

  if(rentabilidade.length == 0 || ipcaIn.length == 0){
    alert('Verifique os campos e tente novamente.')
  }
  else if(ipcaCal < 0){
    resIpca.style.color="red"
    resIpca.style.backgroundColor="white"
    resIpca.innerHTML = `Rentabilidade Anual <br>${ipcaCal.toFixed(2)}%`
  }

  else{
    resIpca.style.color="blue"
    resIpca.style.backgroundColor="white"
    resIpca.innerHTML = `Rentabilidade Anual<br>${ipcaCal.toFixed(2)}%`
  }
  //Limpar formulário
  rent.value = ''
  rent.focus()
  ipca.value = '' 
  ipca.focus()
}


//Função para reseta e fazer uma nova consulta 
function carregar(){
  let resCom = document.querySelector('#resCom')
  let resCdi = document.querySelector('#resCdi')
  let resIpca = document.querySelector('#resIpca')
  resCom.style.backgroundColor='#e0e1d9'
  resIpca.style.backgroundColor='#e0e1d9'
  resCdi.style.backgroundColor='#e0e1d9'
  resIpca.innerHTML = '' ;
  resCdi.innerHTML = '' ;
  resCom.innerHTML = '' ;
}

