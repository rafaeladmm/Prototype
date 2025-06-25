
class CarroPrototype {
  modelo: string;
  cor: string;

  constructor(modelo: string, cor: string) {
    this.modelo = modelo;
    this.cor = cor;
  }

  clone(): CarroPrototype {
    return new CarroPrototype(this.modelo, this.cor);
  }

  info() {
    return `Carro modelo: ${this.modelo}, cor: ${this.cor}`;
  }
}

const carroOriginal = new CarroPrototype("SUV", "Preto");

const carroClone = carroOriginal.clone();

console.log(carroOriginal.info()); 
console.log(carroClone.info());    



