$(document).ready(function(){

	var order1 = document.getElementById('order1')
	var order2 = document.getElementById('order2')

	function dot(){
		order1.setAttribute("class","order" );
		order2.setAttribute("class","order" );
		order3.setAttribute("class","order" );
		order4.setAttribute("class","order" );

	}
	order1.onclick = function(){
		dot()
		this.setAttribute("class","order orderNow" )
	}
	order2.onclick = function(){
		dot()
		this.setAttribute("class","order orderNow" )
	}
	order3.onclick = function(){
		dot()
		this.setAttribute("class","order orderNow" )
	}
	order4.onclick = function(){
		dot()
		this.setAttribute("class","order orderNow" )
	}
})