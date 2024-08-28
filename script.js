const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function encriptar(textoEncriptado) {
    let i = 0;
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

   
    for (i = 0; i < codigo.length; i++); {
        if (textoEncriptado.includes(codigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }

            
    }
      
    
    return textoEncriptado;

}
function btnEncriptar() {
    const msgEncriptada = encriptar(textArea.value);
    mensagem.value = msgEncriptada;
    textArea.value = "";

}


function desencriptar(textoDesencriptado) {
    let i = 0;
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    
    for (let i = 0; i < codigo.length; i++) {
        if (textoDesencriptado.includes(codigo[i][1]))
        {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);

        }

    }

       
    return textoDesencriptado;
}




function btnDesencriptar() {
    const msgDesencriptada = desencriptar(textArea.value);
    mensagem.value = msgEncriptada;
    textArea.value = "";


}
