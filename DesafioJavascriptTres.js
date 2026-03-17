class Heroi{
    constructor(nome,idade,tipo){
this.nome=nome;
this.idade=idade;
this.tipo=tipo;
    }
atacar(){
let ataque
switch(this.tipo){
   case "mago":
    ataque="magia";
break
    case 'guerreiro':
    ataque="ataque com espada";
break
    case 'monge':
        ataque="artes marciais";
break
    case 'ninja':
        ataque="shuriken";
break
    case "assassino":
        ataque="dardo venenoso";
 break
default:
    ataque="ataque generico";
    }
console.log(`O ${this.tipo} "${this.nome}" usou ${ataque}`)
}

}

let novoHeroi1=new Heroi("Nome Generico",49,"mago");
let novoHeroi2=new Heroi("Nome Absurdo",30,"monge");
let novoHeroi3=new Heroi("Nome Estiloso",19,"ninja");
let novoHeroi4=new Heroi("Nome Esquisito",50,"assassino");
let novoHeroi5=new Heroi("Nome Terrivel",24,"guerreiro");
let novoHeroi6=new Heroi("Seu José",21,"zezin da esquina");
novoHeroi1.atacar();
novoHeroi2.atacar();
novoHeroi3.atacar();
novoHeroi4.atacar();
novoHeroi5.atacar();
novoHeroi6.atacar();