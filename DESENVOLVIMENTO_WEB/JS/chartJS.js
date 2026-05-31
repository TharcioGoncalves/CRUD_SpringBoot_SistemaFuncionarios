let counter = [0,0,0,0,0];
        
        async function dadosGrafico(){
            try{
                let resposta = await fetch(URL);
                let funcionarios = await resposta.json();
                for(let i = 0; i < funcionarios.length; i++){
                    if(funcionarios[i].departamentos == "Recursos Humanos"){
                        counter[0]++;
                    }else if(funcionarios[i].departamentos == "Suporte Técnico"){
                        counter[1]++;
                    }else if(funcionarios[i].departamentos == "Segurança Informática"){
                        counter[2]++;
                    }else if(funcionarios[i].departamentos == "Telecomunicações"){
                        counter[3]++;
                    }else if(funcionarios[i].departamentos == "Administração de Finanças"){
                        counter[4]++;
                    }
                }
            }catch(erro){
                alert("Erro:"+erro)
            }
        }
        dadosGrafico();
        const ctx1 = document.getElementById('myChart1');
        const ctx2 = document.getElementById('myChart2');

        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Folha Salarial',
                    data: [140000, 220000, 260000, 280000, 230000, 300000],
                    borderWidth: 1,
                    tension: 0.1,
                    borderColor: "blue",
                    backgroundColor: "blue",
                    fill: false,
                    pointRadius:2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Folha Salarial (Últimos 6 Meses)",
                        align: "start",
                        font: { size: 10, weight: "bold" },
                        color: "black",
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 8
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return value / 1000 + "K"
                            },
                            font: {
                                size: 8
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 400000,
                    }

                }
            }

        });

        new Chart(ctx2, {
            type: 'pie',
            data: {

                datasets: [{

                    data: counter,
                    backgroundColor: [
                        "#3b82f6",
                        "#6b7280",
                        "#10b981",
                        "#f59e0b",
                        "#8b5cf6"
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive:true,
                scales: {
                    y: {
                        display: false
                    },
                    x: {
                        display: false
                    }
                },
                elements:{
                    arc:{
                        radius:"30%"
                    }
                }
            }
        });