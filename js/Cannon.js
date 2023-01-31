class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() { //função para exibir na tela 
   if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) { //se a tecle abaixada e a SETA DIREITA e 
     //o ângulo  e menor que 0.35
     this.angle += 0.02; //o canhão vai ter seu angulo aumentado em 0.02
   }
    
    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) { //se a tecla abaixada e a SETA ESQUERDA e o angulo e maior que -1.45
       this.angle -= 0.02; //o canhao vai ter seu angulo diminuido em 0.02
    }
    
    fill("#676e6a"); //a cor preenchida é cinza
    push(); //cria uma nova configuração de acordo com o que existe entre push() e pop()
    translate(this.x, this.y); //passa a posição inicial x e y para a do objetivo e não da tela 
    rotate(this.angle); //rotaciona a imagem de acordo com o angulo dado
    rect(-10, -20, this.width, this.height); //cria a base do canhao que ira se mover
    pop(); //faz retornar para as configurações anteriores assim que o jogo e reiniciado
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI); //cria um arco preenchido de cinza para a base do canhao 
    noFill(); //nao preenche de cor o resto da tela
  }
}
