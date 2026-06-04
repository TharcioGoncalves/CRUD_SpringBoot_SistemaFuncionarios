let emailf = document.getElementById("email")
let telefonef = document.getElementById("telefone")
let dataNascimentof = document.getElementById("dataNascimento")
let cpff = document.getElementById("cpf")
let dataAdmissaof = document.getElementById("dataAdmissao")
let departamentof = document.getElementById("departamento")
let salariof = document.getElementById("salario")
let cidadef = document.getElementById("cidade")
let bairrof = document.getElementById("bairro")
let cargof = document.getElementById("cargo")
let enderecof = document.getElementById("endereco")
const URL = "http://localhost:8080/funcionarios"

window.addEventListener("DOMContentLoaded", function () {
    let parametrosUrl = new URLSearchParams(window.location.search);
    let id = parametrosUrl.get("id");
    if (id) {
        carregar(id)
    }
})

async function carregar(id) {
    let resposta;
    let funcionario;
    try {
        resposta = await fetch(URL + "/" + id);
        funcionario = await resposta.json();
        emailf.textContent = funcionario.email;
        telefonef.textContent = funcionario.telefone;
        dataNascimentof.textContent = funcionario.dataNascimento;
        cpff.textContent = funcionario.cpf;
        dataAdmissaof.textContent = funcionario.dataAdmissao;
        departamentof.textContent = funcionario.departamentos;
        salariof.textContent = funcionario.salario;
        cidadef.textContent = funcionario.cidade;
        bairrof.textContent = funcionario.bairro;
        enderecof.textContent = funcionario.endereco;
        cargof.textContent = funcionario.cargo;
    } catch (erro) {
        alert("Erro: " + erro)
    }
}