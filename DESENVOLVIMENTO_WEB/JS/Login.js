let email = document.getElementById("email");
let senha = document.getElementById("senha");
let form = document.getElementById("form");
const URL = "http://localhost:8080/administrador"

form.addEventListener("submit", async function (e){
    e.preventDefault();
    let resposta;
    let count = 0;
    let erro = document.getElementById("erro");
    erro.innerHTML = "";
    try{
        resposta = await fetch(URL);
        admins = await resposta.json();

        admins.map(admin => {
            if(email.value == admin.email && senha.value == admin.senha){
                alert("Administrador confirmado!");
                console.log(admin)
                window.location.href = "dashboard.html";
                count++;
                email.value = "";
                senha.value = "";
            }
        });
        if(count == 0){
            erro.innerHTML = "Email ou senha errados!"
            console.log("Erro")
        }
        console.log(admins);
    }catch(erro){
        alert("erro:"+erro)
    }
    
})
