//INTERAÇÕES COM MENU BURGER
let testMenuBurger = document.getElementById('check-menu');
let textMenuBurger = document.querySelector('.menu label h3');

function abreMenu(){
    if(testMenuBurger.value === 'marcado'){
        textMenuBurger.textContent = 'FECHAR';
        testMenuBurger.value = 'desmarcado';
        if(subLista.innerHTML !== ''){
            dropList();
        }
    } else {
        textMenuBurger.textContent = 'MENU';
        testMenuBurger.value = 'marcado';
    }
}

let trocarSetaLista = document.querySelector('.seta img');
//alert(trocarSetaLista.src)

function trocaCorSeta(){
    trocarSetaLista.src = 'imagens/seta-3d3d3d.png';
}
let abreMenu2 = document.querySelector('#check-menu');
function trocaCorSeta2(){
    if(subLista.innerHTML !== ''){
        dropList();
    }
    if(testMenuBurger.value === 'desmarcado'){        
        abreMenu2.checked = false;
        abreMenu();
    }
    trocarSetaLista.src = 'imagens/seta-ffffff.png';  
}

let ativaSubLista = document.getElementById('lista');
let subLista = document.querySelector('.lista ul');


//let corpoMain = document.getElementById('main'); //ainda não está funcionando, pretendo mudar a cor do background

let textProdutos = document.querySelector('.lista h3')

//ativaSubLista.onclick = dropList();

function dropList(){
    if(subLista.innerHTML === ''){
        trocarSetaLista.setAttribute('src', 'imagens/seta-cc0000.png');
        trocarSetaLista.style.transform = "rotateX(180deg)"
        trocarSetaLista.style.padding = '0px 0px 15px 0px';
        textProdutos.style.color = '#cc0000'

        if(testMenuBurger.value === 'desmarcado'){        
            abreMenu2.checked = false;
            abreMenu();
        }

        let itemSubLista = document.createElement('li');
        itemSubLista.innerHTML = `Motores`;
        subLista.appendChild(itemSubLista);
        itemSubLista = document.createElement('li');
        itemSubLista.innerHTML = 'Roçadeiras';
        subLista.appendChild(itemSubLista);
        itemSubLista = document.createElement('li');
        itemSubLista.innerHTML = 'Motobombas';
        subLista.appendChild(itemSubLista);
        itemSubLista = document.createElement('li');
        itemSubLista.innerHTML = 'Geradores';
        subLista.appendChild(itemSubLista);
        itemSubLista = document.createElement('li');
        itemSubLista.innerHTML = 'Cortador de Grama';
        subLista.appendChild(itemSubLista);
        corpoMain.setAttribute('color', '#000000');   
    } else {
        subLista.innerHTML = '';
        trocarSetaLista.setAttribute('src', 'imagens/seta-3d3d3d.png');
        trocarSetaLista.style.transform = "rotate(0deg)"
        trocarSetaLista.style.padding = '15px 0px 0px 0px'
        textProdutos.style.color = ''
    }
    
}
trocarSetaLista.style.transition = '.5s';
itemSubLista.style.transition = '1s';
document.body.style.transition = 'all 1s'