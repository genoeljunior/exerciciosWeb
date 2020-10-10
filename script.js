function nova(){
	window.open('https://www.google.com.br/');
}

function maximo(){
	if (document.f04.t04.value==""){
		alert("o campo não pode ser vazio, preenha-o agora!")
	} else 	if(document.f04.t04.value.length <4){
		alert("Precisa ter mais de 3 caracteres");
		} else {
			window.open('https://www.google.com.br/');
		}
	
	
}

var sinal;
var result1;
var result2;

function escrever(botao){
	
	if (document.formulario.result.value ==0){
		document.formulario.result.value= botao.value;
	} else {
		document.formulario.result.value=document.formulario.result.value+botao.value;
	}
}



function btmenos() {
	document.formulario.primeiro.value=document.formulario.result.value;
	document.formulario.result.value=0;
	sinal="-";
}

function btmais() {
	document.formulario.primeiro.value=document.formulario.result.value;
	document.formulario.result.value=0;
	sinal="+";
}

function btmul() {
	document.formulario.primeiro.value=document.formulario.result.value;
	document.formulario.result.value=0;
	sinal="*";
}

function btdiv() {
	document.formulario.primeiro.value=document.formulario.result.value;
	document.formulario.result.value=0;
	sinal="/";
}

function btigual(){
	result1= Number(document.formulario.primeiro.value);
	result2=  Number(document.formulario.result.value);
	switch (sinal) {
		case  "-": document.formulario.result.value=document.formulario.primeiro.value-result2;
			break;
		case  "+": document.formulario.result.value=result1+result2;
			break;
		case  "*": document.formulario.result.value=document.formulario.primeiro.value*result2;
			break;
		case  "/": document.formulario.result.value=document.formulario.primeiro.value/result2;
			break;
	} 
}

var i;

function verificaletra(letra) {
	if (isNaN(letra)){
		
		return true;
	}else {
		return false;
		}
}

function senhasegura(senha){
	for (i=0; senha.lenght<i;i++){
		if(verificaletra(senha.charAt(i)==false)) break;
	}
	if (i==senha.lenght){
		alert("senha Fraca!")
	}
	}


function enviaragora() {
	if(!verificaletra(document.formulario.nome.value.charAt(0))){
		alert("O nome deve-se iniciar com uma letra!");
	} else if (isNaN(document.formulario.senha.value) ){
			alert("não pode-se usar apenas letras na senha!");
	} else if ((document.formulario.senha.value!=document.formulario.resenha.value) ){
			alert("As senhas devem-se ser as mesmas")
	} else window.open('https://www.google.com.br/');
}
