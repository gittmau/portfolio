//Menu mobile

var btnMenu = document.querySelector('#hamburguinho')
var fecharBtn = document.querySelector('#btnFechar')
var navegacao = document.querySelector('#menu')


function abrirMenu(){

	navegacao.style.transform = 'translateX(0%)'
	navegacao.style.transition = '0.55s'
}


function fecharMenu(){

	navegacao.style.transform = 'translateX(-100%)'
	navegacao.style.transition = '0.55s'


}



btnMenu.addEventListener('click',abrirMenu)
fecharBtn.addEventListener('click',fecharMenu)