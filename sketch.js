function palavraAleatoria(){
  let palavras = ["Mayara", "Teixeira", "Dolce"];
  return random(palavras);//cria variavel palavra
  
}
let palavra ; // cria a variável palavra
function setup() {
  createCanvas(600, 600);
  palavra=palavraAleatoria();
}
function inicializaCores(){background(220);//corde fundo
  fill("purple");//preenchimento
  textSize(70);//tamanho da fonte
  textAlign(CENTER,CENTER);//alinha o texto ao centro, tantona vertical quanto na horizontal
   }
function palavraParcial (minimo,maximo){
  let quantidade = map(mouseX,minimo,maximo,0,palavra.length)
  let parcial = palavra.substring(quantidade);
  return parcial
}
function draw() {
 
  inicializaCores();
  
  
  let parcial= palavraParcial(0,width);
  
  text (parcial,300,300);

}
