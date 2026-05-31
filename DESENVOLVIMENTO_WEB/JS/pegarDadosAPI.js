const URL = "http://localhost:8080/funcionarios"
let quantFuncionarios;

pegarQuantidadeFuncionario();
async function pegarQuantidadeFuncionario() {
    let resposta = await fetch(URL);
    let funcionario = await resposta.json();
    quantFuncionarios = funcionario.length;
    document.getElementById("quantFunc").innerHTML = quantFuncionarios;
}
async function recemAdicionados() {
    let recent_users = document.getElementById("recent-users");
    let resposta = await fetch(URL);
    let funcionarios = await resposta.json();

    if (funcionarios.length == 0) {
        recent_users.innerHTML = `<li class="d-flex justify-content-center fw-bold"><p>Não foram adicionados funcionários</p></li>`
    } else if (funcionarios.length > 0 && funcionarios.length < 3) {
        recent_users.innerHTML = `<h6 class="title-recent">Contratações recentes</h6>`;
        for (let i = 1; i < 3; i++) {
            if(i == 2){
                recent_users.innerHTML += `<li class="d-flex justify-content-between recent-data">
                <h6 class="userName m-0">${funcionarios[funcionarios.length - i].nome}</h6><span class="function m-0">${funcionarios[funcionarios.length - i].cargo}</span><span
                    class="date text-secondary m-0">${funcionarios[funcionarios.length - i].dataAdmissao}</span>
            </li>`;
            }else{
                recent_users.innerHTML += `<li class="d-flex justify-content-between recent-data">
                <h6 class="userName m-0">${funcionarios[funcionarios.length - i].nome}</h6><span class="function m-0">${funcionarios[funcionarios.length - i].cargo}</span><span
                    class="date text-secondary m-0">${funcionarios[funcionarios.length - i].dataAdmissao}</span>
            </li><hr>`;
            }
        }
    } else {
        recent_users.innerHTML = `<h6 class="title-recent">Contratações recentes</h6>`;
        for (let i = 1; i < 4; i++) {
            if(i == 3){
                recent_users.innerHTML += `<li class="d-flex justify-content-between recent-data">
                <h6 class="userName m-0">${funcionarios[funcionarios.length - i].nome}</h6><span class="function m-0">${funcionarios[funcionarios.length - i].cargo}</span><span
                    class="date text-secondary m-0">${funcionarios[funcionarios.length - i].dataAdmissao}</span>
            </li>`;
            }else{
                recent_users.innerHTML += `<li class="d-flex justify-content-between recent-data">
                <h6 class="userName m-0">${funcionarios[funcionarios.length - i].nome}</h6><span class="function m-0">${funcionarios[funcionarios.length - i].cargo}</span><span
                    class="date text-secondary m-0">${funcionarios[funcionarios.length - i].dataAdmissao}</span>
            </li><hr>`;
            }
        }
    }
}
recemAdicionados();