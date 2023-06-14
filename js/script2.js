let letras = prompt("Digite sua nota")

switch(letras.toUpperCase()){
    case "A":
    alert('Excelente')
    break;
    
    case "B":
    alert('Ótimo')
    break;
    
    case 'C':
    alert ('Bom')
    break;
    
    case 'D':
    alert ('Regular')
    break;

    case 'E':
    alert ('Ruim')
    break;

    case 'F':
    alert ('Nos vemos ano que vem..')
    break;
    
    default:
    alert('Conceito inexistente!')
    break;
    
}