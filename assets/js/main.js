document.getElementById('botao').addEventListener('click', function( event ) {

    var nome = document.getElementById('txtNome').value;

    if(nome == null || nome == ""){
        alert('O Campo não deve está vazio');      
        return false;
    }else{


        axios.get(`http://www.clashapi.xyz/api/cards/`+nome).then((dados) => {

            let conteudo = `
            <div class="tudo">
                <h1>
                    ${dados.data.name}
                </h1>

                <img src="assets/img/elixir.png" id="elixir">
                    <h1 id="txtElixir">
                        ${dados.data.elixiCost}
                    </h1>
                </img>

                <div class="inter">
                    <img src="http://www.clashapi.xyz/images/cards/${dados.data.idName}.png"></img>
                    <div class="desc">
                            <div class="info">
                                <div class="type">
                                    <h1 id="Princ"> Rarity:</h1>
                                    <h1>
                                        ${dados.data.rarity}
                                    </h1>
                                </div>
                                <div class="type2">
                                    <h1 id="Princ">
                                        Type:
                                    </h1>
                                    <h1>
                                        ${dados.data.type}
                                    </h1>
                                </div>
                            </div>
                            <div class="desc">
                                <p>
                                    ${dados.data.description}
                                </p>
                            </div>
                    </div>
                </div>
            </div>`;


            let cards = document.querySelector(".cards");
            conteudo = textoParaHTML(conteudo);
            console.log(conteudo);
            cards.append(conteudo);
            
           

        })
        
        .catch(erro => console.error(erro));
        
        
    }

    
})


function textoParaHTML(texto) { 
let template = document.createElement('template');
template.innerHTML = texto.trim();
return template.content.firstChild;
}
