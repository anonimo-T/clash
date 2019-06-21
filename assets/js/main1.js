    
var barra = document.querySelector('input');

barra.addEventListener("keydown", (evt) => {
    if(evt.key ==" "){
        $(document).ready(function(){   
            $('input[type="text"]').each(function(){
                    evt = $(this).val().replace(' ','-');
                    $(this).val(evt);
                });        
            });
        }
    });


                
document.getElementById('botao').addEventListener('click', function( event ) {    
            
    var nome = document.getElementById("txtNome").value;
    axios.get(`http://www.clashapi.xyz/api/cards/`+nome).then((dados) => {

        function info(){

            const atributo1 = ` Nome da carta: ${item.name}`;
            document.getElementById("1").textContent = atributo1;

            // const atributo2 =`Marca: ${item.marca}`;
            // document.getElementById("2").textContent = atributo2;

            // var nomeDaImagem = item.img;   
            // var imagem = document.createElement('img');
            // imagem.src = 'imgs/' + nomeDaImagem;
            // var img = document.getElementById("imagem");
            // img.innerHTML = '';
            // img.prepend(imagem);

        }
                
        for(item of dados.data){
            info();
        }

    })
    
    .catch(erro => alert(erro));
                
});
