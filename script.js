var dinheiroTotal = 200.00

var suplements = new Array() //quantidade
		//ingredientes padão
		suplements[0] = 5
		suplements[1] = 5
		suplements[2] = 5
		suplements[3] = 5
        

		//ingredientes Cachorro quente
		suplements[4] = 5
		suplements[5] = 5
		suplements[6] = 5
		suplements[7] = 5
		suplements[8] = 5

		//Ingredientes Hamburguer
		suplements[9] = 5
		suplements[10] = 5
		suplements[11] = 5
		suplements[12] = 5
		suplements[13] = 5
		suplements[14] = 5
		suplements[15] = 5

		//ingredientes batata frita
        suplements[16] = 5
        suplements[17] = 5
        suplements[18] = 5

		//ingredientes pastel
		suplements[19] = 5
		suplements[20] = 5
		suplements[21] = 5
		suplements[22] = 5
		suplements[23] = 5

		//ingredientes pizza
		suplements[24] = 5
		suplements[25] = 5
		suplements[26] = 5
		suplements[27] = 5
		suplements[28] = 5
		suplements[29] = 5
		suplements[30] = 5
		

        var precos = new Array() //pre�o dos suplementos
		//ingredientes universais
		precos[0] = 0.50 //maionese
		precos[1] = 0.50 //catchup
		precos[2] = 0.50 //mostarda
		precos[3] = 1.00 //prato descartável
		//ingredientes cachorro quente
		precos[4] = 1.25 //salsicha
		precos[5] = 0.60 //batata palha
		precos[6] = 0.40 //purê de batata
		precos[7] = 0.30 //milho
		precos[8] = 0.65 //pão de cachorro quente
		//vender por 9, lucro de 3,3
		//ingredientes hamburguer
		precos[9] = 4.00 //Carne de Hamburguer
		precos[10] = 2.00 //Queijo Cheddar
		precos[11] = 3.00 //Bacon
		precos[12] = 2.00 //Tomate
		precos[13] = 1.49 //Alface 
		precos[14] = 1.00 //Cebola
		precos[15] = 2.50 //Pão de Hamburguer
		//vender por 25, lucro de 6,46

        //ingredientes batata frita
        precos[16] = 1.00
        precos[17] = 1.50
        precos[18] = 0.50

		//ingredientes pastel
		precos[19] = 1.50
		precos[20] = 1.49
		precos[21] = 0.79
		precos[22] = 0.50
		precos[23] = 0.99

		//ingredientes pizza
		precos[24] = 5.00
		precos[25] = 2.49
		precos[26] = 4.79
		precos[27] = 3.50
		precos[28] = 1.99
		precos[29] = 1.99
		precos[30] = 2.99

		//vezes 10
		precos[31] = 0.50 * 10//maionese
		precos[32] = 0.50 * 10//catchup
		precos[33] = 0.50 * 10//mostarda
		precos[34] = 1.00 * 10//prato descartável
		//ingredientes cachorro quente
		precos[35] = 1.25 * 10//salsicha
		precos[36] = 0.60 * 10//batata palha
		precos[37] = 0.40 * 10//purê de batata
		precos[38] = 0.30 * 10//milho
		precos[39] = 0.65 * 10//pão de cachorro quente
		//vender por 9, lucro de 3,3
		//ingredientes hamburguer
		precos[40] = 4.00 * 10//Carne de Hamburguer
		precos[41] = 2.00 * 10//Queijo Cheddar
		precos[42] = 3.00 * 10//Bacon
		precos[43] = 2.00 * 10//Tomate
		precos[44] = 1.49 * 10//Alface 
		precos[45] = 1.00 * 10//Cebola
		precos[46] = 2.50 * 10//Pão de Hamburguer
		//vender por 25, lucro de 6,46

        //ingredientes batata frita
        precos[47] = 1.00* 10
        precos[48] = 1.50* 10
        precos[49] = 0.50* 10

		//ingredientes pastel
		precos[50] = 1.50 * 10
		precos[51] = 1.49* 10
		precos[52] = 0.79* 10
		precos[53] = 0.50* 10
		precos[54] = 0.99* 10

		//ingredientes pizza
		precos[55] = 5.00* 10
		precos[56] = 2.49* 10
		precos[57] = 4.79* 10
		precos[58] = 3.50* 10
		precos[59] = 1.99* 10
		precos[60] = 1.99* 10
		precos[61] = 2.99* 10

		

		//deseginer novo
		var precosNiveis = new Array()
		precosNiveis[0] = 0
		precosNiveis[1] = 350
		precosNiveis[2] = 500
		precosNiveis[3] = 800
		precosNiveis[4] = 1000
		precosNiveis[5] = 1200

	
		


		function buttonClose() {
            var dropdrop = document.querySelector('#dropdown')
            var btn = document.querySelector("#Menus");
            Dropdownchild.style.display = 'block'
            btn.setAttribute('style', 'border-radius: 10px 10px 10px 10px;width:10vh;box-shadow: -2px 2px 5px #00000067;');
        }

		
		function fechar() {
            document.addEventListener('mouseup', function (e) {
                var container = document.getElementById('Dropdownchild');
                var borda = document.querySelector("#Menus");
                var tudinho = document.getElementById('Comprasuplementos');
                var compranivel = document.getElementById('Compraniveis');
                if (!container.contains(e.target) && !tudinho.contains(e.target) && !compranivel.contains(e.target)) {
                    container.style.display = 'none';
                    borda.setAttribute('style', 'border-radius: 10px 10px 10px 10px;width:10vh;box-shadow: -2px 2px  5px #00000067;');
                    Comprasuplementos.style.display = 'none'
                    Compraniveis.style.display = 'none'
                    setInterval("fechar", 10000)
                }
            });
        }

		function fecharevol() {
            document.addEventListener('mouseup', function (e) {
                var container = document.getElementById('Dropdownchild');
                var borda = document.querySelector("#Menus");
                var tudinho = document.getElementById('Comprasuplementos');
                var compranivel = document.getElementById('Compraniveis');
                if (!container.contains(e.target) && !tudinho.contains(e.target) && !compranivel.contains(e.target)) {
                    container.style.display = 'none';
                    borda.setAttribute('style', 'border-radius: 10px 10px 10px 10px;width:10vw;box-shadow: -2px 2px  5px #00000067;');
                    Comprasuplementos.style.display = 'none'
                    Compraniveis.style.display = 'none'
                    setInterval("fechar", 10000)
                }
            });
        }

         
	
		function buyLevel(numb) { /* fun��o de compra de suplementos. 
		--------------------------------------------------
		O numb � a id do suplemento. para comprar um suplemento
		por linha de comando (pela barra de endere�o atrav�s de javascript:buySupplement(1);void(0);), dever� substituir o numb pela id do suplemento.*/
		
					if (dinheiroTotal >= precosNiveis[numb] && levels[numb] == 0) { //se tiver dinheiro
						levels[numb] += 1//comprado um nível
						dinheiroTotal -= precosNiveis[numb] //dinheiro subtra�do
						alterarImagem(numb)
					} else if (levels[numb] == 1) {
						
						alert("Você já desbloqueou esse nível")

					} else if (dinheiroTotal >= precosNiveis[numb] &&  levels[numb]== 2   ){
						alert("Este nível está bloqueado")//janela de alerta dando a explica��o

					} else { //se n�o tiver dinheiro
						alert("Você não tem dinheiro suficiente para comprar este ingredientes/nível")//janela de alerta dando a explica��o
		
					}
				}

					
		function alterarImagem(numb) {
			switch (numb) {
				case 0:
					var img = document.querySelector("#img0");
					img.setAttribute('src', 'img/desbloquear.png');
					// setTimeout(function () {
					// window.location.href = "nivel12.html";
					// }, 1000);
					break;
				case 1:
					var img = document.querySelector("#img1");
					img.setAttribute('src', 'img/desbloquear.png');
					setTimeout(function () {
						window.location.href = "nivel1.html";
					}, 1000);
					break;
				case 2:
					var img = document.querySelector("#img2");
					img.setAttribute('src', 'img/desbloquear.png');
					setTimeout(function () {
						window.location.href = "nivel2.html";
					}, 1000);
					break;
				case 3:
					var img = document.querySelector("#img3");
					img.setAttribute('src', 'img/desbloquear.png');
					setTimeout(function () {
						window.location.href = "nivel3.html";
					}, 1000);
					break;
				case 4:
					var img = document.querySelector("#img4");
					img.setAttribute('src', 'img/desbloquear.png');
					setTimeout(function () {
						window.location.href = "nivel4.html";
					}, 1000);
					break;
				case 5:
					var img = document.querySelector("#img5");
					img.setAttribute('src', 'img/desbloquear.png');
					setTimeout(function () {
						window.location.href = "nivel5.html";
					}, 1000);
					break;
			}
		}

	


        function buySupplement(numb) { /* fun��o de compra de suplementos. 
--------------------------------------------------
O numb � a id do suplemento. para comprar um suplemento
por linha de comando (pela barra de endere�o atrav�s de javascript:buySupplement(1);void(0);), dever� substituir o numb pela id do suplemento.*/
if ((numb > 30)){
	if (dinheiroTotal >= precos[numb]){
		suplements[numb -31] = suplements[numb-31]+10//comprado um suplemento
				dinheiroTotal -= precos[numb]
				
	
	}else {
		alert("você não tem dinheiro suficiente para comprar este ingrediente")
	}
}else if (numb <= 30 && dinheiroTotal >= precos[numb]) { //se tiver dinheiro
				suplements[numb] += 1//comprado um suplemento
				dinheiroTotal -= precos[numb]//dinheiro subtra�do
			}
			else { //se n�o tiver dinheiro
				alert("você não tem dinheiro suficiente para comprar este ingrediente")//janela de alerta dando a explica��o
			}
		}
	
		
		

        pessoasnafila = 0 //vari�vel de pessoas na fila

		hamburguer = 0

        batata = 0

		pastel = 0

		pizza = 0

		tonhao = 0

		//FUNÇÃO DE AUMENTAR FILA
		function aumentaFila() { /* fun��o aumentaFila()
*/
			var continua = Math.round(Math.random()) // resposta do script em rela��o a deixar que uma pessoa chegue..
			if (continua == 1) { //se a resposta for sim
				pessoasnafila = pessoasnafila + (Math.round(Math.random() * 1)) //aumenta pessoas da fila para +1
			}
			setTimeout("aumentaFila()", (Math.round(Math.random() * 1500) + 500));//timer (!)
		}


		//FUNÇÃO DE FILA HAMBURGUER

		//vari�vel de pessoas na fila
		function aumentaFila2() { /* fun��o aumentaFila()
*/
			var continua2 = Math.round(Math.random()) // resposta do script em rela��o a deixar que uma pessoa chegue..
			if (continua2 == 1) { //se a resposta for sim
				hamburguer = hamburguer + (Math.round(Math.random() * 1)) //aumenta pessoas da fila para +1


			}
			setTimeout("aumentaFila2()", (Math.round(Math.random() * 2000) + 750));//timer (!)
		}

        //função fila batata frita

        function aumentaFila3() { /* fun��o aumentaFila()
*/
			var continua3 = Math.round(Math.random()) // resposta do script em rela��o a deixar que uma pessoa chegue..
			if (continua3 == 1) { //se a resposta for sim
				batata = batata + (Math.round(Math.random() * 1)) //aumenta pessoas da fila para +1


			}
			setTimeout("aumentaFila3()", (Math.round(Math.random() * 3000) + 950));//timer (!)
		}

		//função fila pastel

		function aumentaFila4() { /* fun��o aumentaFila()
*/
			var continua4 = Math.round(Math.random()) // resposta do script em rela��o a deixar que uma pessoa chegue..
			if (continua4 == 1) { //se a resposta for sim
				pastel = pastel + (Math.round(Math.random() * 1)) //aumenta pessoas da fila para +1


			}
			setTimeout("aumentaFila4()", (Math.round(Math.random() * 2500) + 1050));//timer (!)
		}

		//função fila pizza

		function aumentaFila5() { /* fun��o aumentaFila()
*/
			var continua5 = Math.round(Math.random()) // resposta do script em rela��o a deixar que uma pessoa chegue..
			if (continua5 == 1) { //se a resposta for sim
				pizza = pizza + (Math.round(Math.random() * 1)) //aumenta pessoas da fila para +1


			}
			setTimeout("aumentaFila5()", (Math.round(Math.random() * 5500) + 1550));//timer (!)
		}

		//função fila tonhão

		function aumentaFila6() { /* fun��o aumentaFila()
*/
			var continua6 = Math.round(Math.random()) // resposta do script em rela��o a deixar que uma pessoa chegue..
			if (continua6 == 1) { //se a resposta for sim
				tonhao = tonhao + (Math.round(Math.random() * 1)) //aumenta pessoas da fila para +1


			}
			setTimeout("aumentaFila6()", (Math.round(Math.random() * 10000) + 5000));//timer (!)
		}



        function vendeCachorroQuente() { /* fun��o de vender um cachorro quente (hnnnnn. :p)

A fun��o � executada quando voc� clica no bot�o vender um cachorro quente
*/
			passeVende = true //elemento do script (bloqueador)
			for (o = 0; o < 9; o++) {
				if (suplements[o] < 1) { //se n�o se tem suplementos 
					passeVende = false //ativa o bloqueador
				}
			}
			if (passeVende == true) { //se o bloqueador acima estiver desativado
				if (pessoasnafila > 0) { //se tiver pessoas na fila (claro n�. para se fazer um negocio tem que ter o vendedor e o comprador. No caso faltaria o comprador...)
					for (o = 0; o < 9; o++) {
						suplements[o] -= 1 //pega um suplemento para fazer o lanche
					}
					dinheiroTotal += 11.00//retorna o lucro ($$)
					pessoasnafila -= 1//a pessoa vai embora satisfeita com o lanche (:p)
				}
				else {

				}
			}
			else {// se o bloqueador estiver ativado
				alert("você não tem suplemento(s) suficiente(s)"); //janela de explica��o
			}
		}


		//FUNÇÃO VENDER HAMBURGUER


		function vendeHamburguer() { /* fun��o de vender um cachorro quente (hnnnnn. :p)

A fun��o � executada quando voc� clica no bot�o vender um cachorro quente
*/
			passeVende2 = true //elemento do script (bloqueador)
			for (o = 9; o < 16; o++) {
				if (suplements[o] < 1 || suplements[3] < 1 ||suplements[1] < 1||suplements[2] < 1 || suplements[0]<1) { //se n�o se tem suplementos 
				
                        passeVende2 = false //ativa o bloqueador
				}
            }
			
			if (passeVende2 == true) { //se o bloqueador acima estiver desativado
				if (hamburguer > 0) { //se tiver pessoas na fila (claro n�. para se fazer um negocio tem que ter o vendedor e o comprador. No caso faltaria o comprador...)
					for (o = 9; o < 16; o++) {
						suplements[o] -= 1
                        
                         //pega um suplemento para fazer o lanche
					}
                    suplements[3] -= 1
					suplements[2] -= 1
					suplements[1] -= 1
					suplements[0] -= 1
					dinheiroTotal += 32//retorna o lucro ($$)
					hamburguer -= 1//a pessoa vai embora satisfeita com o lanche (:p)
				}
				else {

				}
			}
			else {// se o bloqueador estiver ativado
				alert("você não tem suplemento(s) suficiente(s)"); //janela de explica��o
			}
		}
        
        function vendeBatata() { /* fun��o de vender um cachorro quente (hnnnnn. :p)

A fun��o � executada quando voc� clica no bot�o vender um cachorro quente
*/
			passeVende3 = true //elemento do script (bloqueador)
			for (o = 16;o < 19; o++) {
				if (suplements[o] < 1 || suplements[3] < 1) { //se n�o se tem suplementos 
				
                        passeVende3 = false //ativa o bloqueador
				}
            }
			
			if (passeVende3 == true) { //se o bloqueador acima estiver desativado
				if (batata > 0) { //se tiver pessoas na fila (claro n�. para se fazer um negocio tem que ter o vendedor e o comprador. No caso faltaria o comprador...)
					for (o = 16; o < 19; o++) {
						suplements[o] -= 1
                        
                         //pega um suplemento para fazer o lanche
					}
                    suplements[3] -= 1
					dinheiroTotal += 15//retorna o lucro ($$)
					batata -= 1//a pessoa vai embora satisfeita com o lanche (:p)
				}
				else {

				}
			}
			else {// se o bloqueador estiver ativado
				alert("você não tem suplemento(s) suficiente(s)"); //janela de explica��o
			}
		}

		function vendePastel() { /* fun��o de vender um cachorro quente (hnnnnn. :p)

A fun��o � executada quando voc� clica no bot�o vender um cachorro quente
*/
			passeVende4 = true //elemento do script (bloqueador)
			for (o = 19;o < 24; o++) {
				if (suplements[o] < 1 || suplements[1] < 1 || suplements[3] < 1) { //se n�o se tem suplementos 
				
                        passeVende4 = false //ativa o bloqueador
				}
            }
			
			if (passeVende4 == true) { //se o bloqueador acima estiver desativado
				if (pastel > 0) { //se tiver pessoas na fila (claro n�. para se fazer um negocio tem que ter o vendedor e o comprador. No caso faltaria o comprador...)
					for (o = 19; o < 24; o++) {
						suplements[o] -= 1
                        
                         //pega um suplemento para fazer o lanche
					}
                    suplements[1] -= 1
					suplements[3] -= 1
					dinheiroTotal += 13//retorna o lucro ($$)
					pastel -= 1//a pessoa vai embora satisfeita com o lanche (:p)
				}
				else {

				}
			}
			else {// se o bloqueador estiver ativado
				alert("você não tem suplemento(s) suficiente(s)"); //janela de explica��o
			}
		}

		function vendePizza() { /* fun��o de vender um cachorro quente (hnnnnn. :p)

A fun��o � executada quando voc� clica no bot�o vender um cachorro quente
*/
			passeVende5 = true //elemento do script (bloqueador)
			for (o = 24;o < 31; o++) {
				if (suplements[o] < 1 || suplements[3] < 1) { //se n�o se tem suplementos 
				
                        passeVende5 = false //ativa o bloqueador
				}
            }
			
			if (passeVende5 == true) { //se o bloqueador acima estiver desativado
				if (pizza > 0) { //se tiver pessoas na fila (claro n�. para se fazer um negocio tem que ter o vendedor e o comprador. No caso faltaria o comprador...)
					for (o = 24; o < 31; o++) {
						suplements[o] -= 1
                        
                         //pega um suplemento para fazer o lanche
					}
					suplements[3] -= 1
					dinheiroTotal += 44//retorna o lucro ($$)
					pizza -= 1//a pessoa vai embora satisfeita com o lanche (:p)
				}
				else {

				}
			}
			else {// se o bloqueador estiver ativado
				alert("você não tem suplemento(s) suficiente(s)"); //janela de explica��o
			}
		}

		function vendeTonhao() { /* fun��o de vender um cachorro quente (hnnnnn. :p)

A fun��o � executada quando voc� clica no bot�o vender um cachorro quente
*/
			passeVende6 = true //elemento do script (bloqueador)
			for (o = 0;o < 31; o++) {
				if (suplements[o] < 1 ||suplements[3] < 4||suplements[2] < 3||suplements[1] < 2) { //se n�o se tem suplementos 
				
                        passeVende6 = false //ativa o bloqueador
				}
            }
			
			if (passeVende6 == true) { //se o bloqueador acima estiver desativado
				if (tonhao > 0) { //se tiver pessoas na fila (claro n�. para se fazer um negocio tem que ter o vendedor e o comprador. No caso faltaria o comprador...)
					for (o = 0; o < 31; o++) {
						suplements[o] -= 1
                        
                         //pega um suplemento para fazer o lanche
					}
					suplements[3] -= 3
					suplements[1] -= 1
					suplements[2] -= 2
					dinheiroTotal += 233.99//retorna o lucro ($$)
					tonhao -= 1//a pessoa vai embora satisfeita com o lanche (:p)
				}
				else {

				}
			}
			else {// se o bloqueador estiver ativado
				alert("você não tem suplemento(s) suficiente(s)"); //janela de explica��o
			}
		}