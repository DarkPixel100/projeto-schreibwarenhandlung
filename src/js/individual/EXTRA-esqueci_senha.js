const troca = document.getElementById("trocar");
let formato = "senha";
troca.addEventListener('click', () => {
    if (formato === "senha") {

        document.getElementById("title").innerHTML = "Recuperacao de Usuário";
        document.getElementById("trocar").innerHTML = "Lembrei meu Usuário";
        document.getElementById("username").placeholder = "Seu Email";
        formato = "usuario";
    } else {
        document.getElementById("title").innerHTML = "Recuperacao de senha";
        document.getElementById("username").placeholder = "Nome de Usuário";
        document.getElementById("trocar").innerHTML = "Não sei meu Usuario";
        formato = "senha";
    }
});
