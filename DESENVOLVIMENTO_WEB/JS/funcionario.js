let tbody = document.getElementById("corpo");
let filter = document.getElementById("filtrar");
const URL = "http://localhost:8080/funcionarios";
let count = 0;

async function carregarTabela() {
    tbody.innerHTML = `<tr class="sem-conteudo"><td>Não há funcionários cadastrados!</td></tr>`;
    try {
        const resposta = await fetch(URL);
        let funcionarios = await resposta.json();
        if (!resposta.ok) {
            alert("Erro ao buscar funcionários")
        } else {
            console.log("Dados recuperados com sucesso!")
        }
        if (!funcionarios || funcionarios.length == 0) {
            console.log("Está vazio")
            tbody.innerHTML = `<tr class="sem-conteudo"><td>Não há funcionários cadastrados!</td></tr>`;
        } else {
            if (filter.value != "todos") {
                count++;
                funcionarios.map(f => {
                    if (f.departamentos == filter.value) {
                        tbody.innerHTML +=
                            `<tr>
                <td>${f.id}</td>
                <td>${f.nome}</td>
                <td>${f.cargo}</td>
                <td>${f.departamentos}</td>
                <td>${f.salario} kzs</td>
                <td class='show-status'>
                    <div class='st'>
                        <p class='Status'>Activo</p>
                    </div>
                </td>
                <td class="icones">
                    <div>
                        <i class="fa-regular fa-pen-to-square icone-1" onclick='editarFunc(${f.id})'></i>
                        <i class="fa-regular fa-trash-can icone-2" onclick='deletar(${f.id})'></i>
                    </div>
                </td>
            </tr>`;
                    }
                })
                if (count == 0) {
                    tbody.innerHTML = `<tr class="sem-conteudo"><td>Não há funcionários cadastrados!</td></tr>`;

                }
            } else {
                console.log(funcionarios);
                funcionarios.forEach(f => {
                    tbody.innerHTML +=
                        `<tr>
                <td>${f.id}</td>
                <td>${f.nome}</td>
                <td>${f.cargo}</td>
                <td>${f.departamentos}</td>
                <td>${f.salario} kzs</td>
                <td class='show-status'>
                    <div class='st'>
                        <p class='Status'>Activo</p>
                    </div>
                </td>
                <td class="icones">
                    <div>
                        <i class="fa-regular fa-pen-to-square icone-1" onclick='editarFunc(${f.id})'></i>
                        <i class="fa-regular fa-trash-can icone-2" onclick='deletar(${f.id})'></i>
                    </div>
                </td>
            </tr>`;
                })

                if (!funcionarios || funcionarios.length == 0) {
                    tbody.innerHTML = `<tr class="sem-conteudo"><td>Não há funcionários cadastrados!</td></tr>`;
                }
            }
        }


    } catch (erro) {
        alert("Erro:" + erro);
    }
}
carregarTabela()

async function verificarDados() {
    let func = await fetch(URL);
    let res = await func.json();
    console.log(res.length)
    if (res.length == 0 || !res) {
        tbody.innerHTML = `<tr class="sem-conteudo"><td>Não há funcionários cadastrados!</td></tr>`;
    }
}
verificarDados()

async function deletar(id) {
    try {
        const resposta = await fetch(URL + "/" + id, { method: "DELETE" })
        carregarTabela();
    } catch (erro) {
        alert("Erro: " + erro)
    }
}

function editarFunc(id) {
    window.location.href = `cadastro.html?id=${id}`;
}