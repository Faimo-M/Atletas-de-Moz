function Pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa= document.getElementById("campo-pesquisa").value

if(!campoPesquisa){
    section.innerHTML="<p> Atleta nao encontrado </p>"
     return
     }


     campoPesquisa = campoPesquisa.toLowerCase();

let resultados =" ";
let titulo =" ";
let descricao =" ";
let tags ="";
let redeSocial ="";
let foto =" ";

for (let dado of dados){
    titulo=dado.titulo.toLowerCase()
    foto=dado.foto
    descricao=dado.descricao.toLowerCase()
    tags=dado.tags.toLowerCase()
    redeSocial=dado.redeSocial.toLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa) || redeSocial.includes(campoPesquisa)){
resultados +=`
<div class="item-resultado">
                <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
                
               <img src="${dado.foto}">
                <p class="descricao-meta">${dado.descricao}</p>
                
                <a href="${dado.link}" target ="_blank">Mais Informacoes</a>
                
                <a href="${dado.redeSocial}" target= "_blank">Rede Social</a>
                
            
            </div>
`
            }
    }
     
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
        
        
        
    }
section.innerHTML = resultados;
}


