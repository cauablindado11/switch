
//contador

let numero = parseInt(prompt("Digite um valor: "));
let contagem = "Contagem: ";

for (let i = 1; i <= numero; i++) {
    contagem += i + " ";
}

contagem += "Finalizou!!!";
console.log(contagem);

