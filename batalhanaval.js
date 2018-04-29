	var parte1_do_navio;
    var parte2_do_navio;
	var parte3_do_navio;
	var atingidas;
	var totalJogadas;
	var y;
	var agua = new Audio('agua.mp3');
	var vitoria = new Audio('vitoria.mp3');
	var explusao = new Audio ('explusao.mp3');
	
  function inicio() {
	document.BatalhaNaval.info.value='';
	document.BatalhaNaval.coordenada.value='';
	parte1_do_navio = parseInt(Math.floor(Math.random() * 6) + 1); //Entre 1 e 7
	parte2_do_navio = parte1_do_navio +1;
	parte3_do_navio = parte2_do_navio +1;
	atingidas = 0;
	totalJogadas = 0;
	//Colocar todas as células em branco.
	document.getElementById("1").style.backgroundColor = "white";
	document.getElementById("2").style.backgroundColor = "white";
	document.getElementById("3").style.backgroundColor = "white";
	document.getElementById("4").style.backgroundColor = "white";
	document.getElementById("5").style.backgroundColor = "white";
	document.getElementById("6").style.backgroundColor = "white";
	document.getElementById("7").style.backgroundColor = "white";
	document.getElementById("8").style.backgroundColor = "white";
	document.getElementById("9").style.backgroundColor = "white";
	//Easter egg em que a consola diz onde está o navio.
	console.log(parte1_do_navio);
	console.log(parte2_do_navio);
	console.log(parte3_do_navio);
 }
 
 function mostrar() { //Função que mostra o gif
		document.getElementById("trofeu").style.display = "block" ;
		
		setTimeout("esconder()" ,3000);
	}
	
 function esconder(){ //Função para que o gif desapareça apos o jogador ganhar.
		document.getElementById("trofeu").style.display = "none" ;
	}
 
 function Jogo(número) {
	 var jogada;
	 jogada = document.BatalhaNaval.coordenada.value;//Para pedir a localização do barco
	 y = jogada; //O y representa a coordenada do taboleiro.
	 
	 if (jogada < 1 || jogada > 9) { //Verifica se a jogada é válida
      alert("Jogada inválida. Tenta de novo!"); 
		} else { //Se a jogada dor válida o computador segue este passo
		totalJogadas = totalJogadas + 1;//Sempre que realiza uma joga é adicionado mais 1
		
      if (jogada == parte1_do_navio || jogada == parte2_do_navio || jogada == parte3_do_navio) { //Verifica se acertou no barco
         atingidas = atingidas +1;
		 document.getElementById(y).style.backgroundColor = "red";
		 document.BatalhaNaval.info.value='Fogo! (Parte ' + atingidas + ' de 3)';
		//Para que execute o audio a dizer que atingiu.
		explusao.load();
		explusao.play();
		
         if (atingidas == 3) { // Se o número de vezes que foi atingido for igual a 3 o jogo acaba
            foiAfundado = true;
			//Para carregar o audio de vitória.
			vitoria.load();
			vitoria.play();
			document.BatalhaNaval.info.value='Navio afundado!';
			alert("Navio Afundado!");
			mostrar();
			var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                     "o que quer dizer que a tua pontaria foi de " + Math.round((3/totalJogadas)*100) + "%";
			alert(estatistica);
         }
      } else { //Se não for atingido aparece esta informação
		document.BatalhaNaval.info.value='Água';
		document.getElementById(y).style.backgroundColor = "blue";
		//Para carregar o audio de que falhou.
		agua.load();
		agua.play();
     }
  }
 }
  