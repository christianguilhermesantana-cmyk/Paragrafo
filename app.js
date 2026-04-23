const textarea = document.querySelector("#texto");
const preview = document.querySelector(".preview-text");
const btn = document.querySelector(".btn-escrever");

const velocidade = document.querySelector("#velocidade");
const tamanho = document.querySelector("#tamanho");
const fonte = document.querySelector("#fonte");
const cor = document.querySelector("#cor");

function escrever(){
    const saida = document.querySelector(".saida");

    //escolhas do usuário
    let j = 0;
    let frase = "";

    frase = textarea.value;

    if(textarea.value === ""){
        alert("Digite algo!");
    } else {

    const p = document.createElement("p");

    //style
    p.style.color = `${cor.value}`
    p.style.fontFamily = `${fonte.value}`;
    p.style.fontSize = `${tamanho.value}px`
    //fim style

    //criando o elemento
    saida.append(p);

    //desativando
    btn.disabled = true;
    tamanho.disabled = true;
    cor.disabled = true;
    fonte.disabled = true;


    const span = document.querySelector("span");
    if(span) span.remove();

    function digitar (){
        if(j<frase.length){
            const cursorAntigo = p.querySelector(".spa");

            if(cursorAntigo) cursorAntigo.remove();

            p.innerHTML +=`${frase[j]}<span class="spa">|</span>`;
            j++;

            setTimeout(digitar, velocidade.value);
        } else {
            const cursorAntigo = p.querySelector(".spa");
            if(cursorAntigo) cursorAntigo.remove();

            // Finaliza (reativa os botões)
            tamanho.disabled = false;
            cor.disabled = false;
            fonte.disabled = false;
            btn.disabled = false;
        
        // Adiciona o cursor final
        const span2 = document.createElement("span");
        span2.textContent = '|';
        saida.append(span2);
            
        }
    }
    
    digitar();

    preview.textContent = "";
    textarea.value = "";
    }
}

function atualizar_preview () {
    preview.style.color = `${cor.value}`
    preview.style.fontFamily = `${fonte.value}`;
    preview.style.fontSize = `${tamanho.value}px`
    preview.innerHTML=`${textarea.value}`;
}

textarea.addEventListener("input", atualizar_preview);
tamanho.addEventListener("input", atualizar_preview);
cor.addEventListener("input", atualizar_preview);
fonte.addEventListener("input", atualizar_preview);

btn.addEventListener("click", escrever);


