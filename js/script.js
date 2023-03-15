const spesa = [
    'pane',
    'pasta',
    'frutta',
    'formaggio',
    'cipolle',
    'patate'
]

const lista = document.querySelector('ul');

let counter= 0;

while (counter < spesa.length){

    console.log(spesa[counter]);

    lista.innerHTML+= `
    
    <li>${spesa[counter]} </li>
    `
    
    
    counter++;

}