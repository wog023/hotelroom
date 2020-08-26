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

//設a
	var now =1


	function arrow(now){
		if(now == 1){
			$('.pre a').attr('href','#')
			$('.next a').attr('href','#room2')
			console.log('11111')
			$('#order1').addClass('orderNow')

			$('.pre a').css('display','none')
		}else if(now == 2){
			$('.pre a').attr('href','#room1')
			$('.next a').attr('href','#room3')
			console.log('2222')
			$('#order2').addClass('orderNow')

			$('.pre a,.next a').css('display','block')
		}else if(now ==3){
			$('.pre a').attr('href','#room2')
			$('.next a').attr('href','#room4')
			console.log('33333')
			$('#order3').addClass('orderNow')

			$('.pre a,.next a').css('display','block')
		}else if(now == 4){
			$('.pre a').attr('href','#room3')
			$('.next a').attr('href','')
			console.log('4444')
			$('#order4').addClass('orderNow')

			$('.next a').css('display','none')
		}

	}
	console.log(now)
	arrow(1)

	$('.pre').click(function(){
		dot()
		now = now-1
		setTimeout(function(){arrow(now)},100)		
		console.log(now)
	})
	$('.next').click(function(){
		dot()
		now = now+1
		setTimeout(function(){arrow(now)},100)		
		console.log(now)
	})






})