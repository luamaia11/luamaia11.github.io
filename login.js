
document.addEventListener('DOMContentLoaded', function () {
   
    const autenticado = localStorage.getItem('autenticado');

    if (autenticado === 'true') {
        
        document.getElementById('secreta').style.display = 'block';
        document.getElementById('formulario').style.display = 'none';
    } else {
       
        if (window.location.pathname !== '/index.html') {
            window.location.href = 'index.html';
        }
    }
});

const verificaSenha = () => {
    const entrada = document.getElementById("entrada").value;
    const senha = '85ee0fe4f155a9af2657d85054ad63ca';

    if (hex_md5(entrada) === senha) {
       
        localStorage.setItem('autenticado', 'true');
        window.location = 'index2.html';
    } else {
        alert('Senha incorreta!');
    }
}

const limpaCoiso = () => {
    
    localStorage.removeItem('autenticado');
    window.location = 'index.html';
}


const obterCookie = (nome) => {
    const nomeEQ = nome + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nomeEQ) === 0) return cookie.substring(nomeEQ.length, cookie.length);
    }
    return null;
}
