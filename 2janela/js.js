$("#formulario").on("submit",function(e){
    e.preventDefault(); // impedir o recarregamento causado pelo form
  })

$("#viajar").on('click', function(){
    $("#astronautaFormText").css('display', 'none')
    $("#mainResApi").css('display', 'block')
    let nomeApi = $("#nome").val()
    let nomePessoa = document.getElementById("nomeResp")
    nomePessoa.innerHTML = nomeApi
    let dataApi = $("#data").val()
    let dataPessoa = document.getElementById("dataResp")
    dataPessoa.innerHTML = dataApi

    ChamaAApi(dataApi)

})

$("#voltar").on('click', function(){
    location.href ="../2janela/selecione.html";
})



function ChamaAApi(data) {
    let URL = "https://api.nasa.gov/planetary/apod?"; 
    chave = "sLzeUAsJJifAqDaAjsYWhkZZzVkWMZOcEODA8uNj";


    fetch(`${URL}api_key=${chave}&date=${data}`) 
        .then(resp => resp.json())
        .then(function (response) {
            RecebeResposta(response);
        })
}


function RecebeResposta(resposta) {
    console.log(resposta);
    let imagem = document.getElementById("imagemApi")
    $("#tituloApi").html(`<strong> ${resposta.title}</strong> `);  
    $("#textoDaApi").html(resposta.explanation);
    $("#autorApi").html(resposta.copyright);
    if(resposta.media_type == 'image') {        
    imagem.style.backgroundImage = 'url( "'+ resposta.url + '")';
    } else {
    imagem.html(`<iframe class="img" src="${resposta.url}?autoplay=1&mute=1"></iframe>`);
    }

}


  