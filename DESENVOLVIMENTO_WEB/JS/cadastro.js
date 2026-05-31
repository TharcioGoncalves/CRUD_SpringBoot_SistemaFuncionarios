let form = document.getElementById("formulario");
let nomeF = document.getElementById("nome");
let BIF = document.getElementById("bi");
let dataNascimentoF = document.getElementById("dataNascimento");
let generoF = document.getElementById("genero");
let estadoCivilF = document.getElementById("estadoCivil");
let telefoneF = document.getElementById("telefone");
let emailF = document.getElementById("email");
let cidadeF = document.getElementById("cidade");
let enderecoF = document.getElementById("endereco");
let departamentosF = document.getElementById("departamento");
let cargoF = document.getElementById("cargo");
let salarioF = document.getElementById("salario");
let bairroF = document.getElementById("bairro")

console.log(form)
const URL = "http://localhost:8080/funcionarios";

window.addEventListener("DOMContentLoaded", function () {
    let parametrosUrl = new URLSearchParams(window.location.search);
    let id = parametrosUrl.get("id");
    if (id) {
        carregarEdicao(id);
    }
})

async function carregarEdicao(id) {
    let resposta;
    let funcionario;
    try {
        resposta = await fetch(URL + "/" + id);
        funcionario = await resposta.json();
        console.log(funcionario)
        document.getElementById("tituloCadastro").textContent = "Editar Funcionário";
        document.getElementById("id").value = funcionario.id;
        document.getElementById("nome").value = funcionario.nome;
        document.getElementById("bi").value = funcionario.cpf;
        document.getElementById("dataNascimento").value = funcionario.dataNascimento;
        document.getElementById("genero").value = funcionario.genero;
        document.getElementById("estadoCivil").value = funcionario.estadoCivil;
        document.getElementById("telefone").value = funcionario.telefone;
        document.getElementById("email").value = funcionario.email;
        document.getElementById("cidade").value = funcionario.cidade;
        document.getElementById("bairro").value = funcionario.bairro;
        document.getElementById("endereco").value = funcionario.endereco;
        document.getElementById("departamento").value = funcionario.departamentos;
        document.getElementById("cargo").value = funcionario.cargo;
        document.getElementById("salario").value = funcionario.salario;
        document.getElementById("save").value = "Editar";
    } catch (erro) {
        alert("Erro:" + erro);
    }
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let resposta;
    let id = document.getElementById("id").value;
    try {
        const funcionario = {
            nome: String(nomeF.value),
            cpf: String(BIF.value),
            dataNascimento: String(dataNascimentoF.value),
            genero: String(generoF.value),
            estadoCivil: String(estadoCivilF.value),
            telefone: String(telefoneF.value),
            email: String(emailF.value),
            cidade: String(cidadeF.value),
            bairro: String(bairroF.value),
            endereco: String(enderecoF.value),
            departamentos: String(departamentosF.value),
            cargo: String(cargoF.value),
            salario: parseInt(salarioF.value)
        }
        try {
            if (id) {
                resposta = await fetch(URL + "/" + id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(funcionario)
                });
                if (resposta.ok) {
                    alert("Dados enviados com sucesso")
                } else {
                    alert("Erro ao enviar os dados")
                }
            } else {
                resposta = await fetch(URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(funcionario)
                });
                if (resposta.ok) {
                    alert("Dados enviados com sucesso")
                } else {
                    alert("Erro ao enviar os dados")
                }
            }
        }catch(erro){
            alert(erro)
        }
    } catch (erro) {
        alert("Erro:" + erro);
    }
    limpar();

})
function limpar() {
    nomeF.value = "";
    BIF.value = "";
    dataNascimentoF.value = "";
    generoF.value = "";
    estadoCivilF.value = "";
    telefoneF.value = "";
    emailF.value = "";
    cidadeF.value = "";
    bairroF.value = ""
    enderecoF.value = "";
    departamentosF.value = "";
    cargoF.value = "";
    salarioF.value = "";
}