var turmas = [
    {
        professor: "fabio",
        alunos: [
            {nome: "henrique", nota: 10},
            {nome: "paulo", nota: 2}
        ]
    },
    {
        professor: "jonas",
        alunos: [
            {nome: "antonio", nota: 6},
            {nome: "pedro", nota: 9}
        ]
    }
]

function turminha(listaturmas){
    for(var i=0; i<listaturmas.length; i++){
        listaturmas[i].alunos.sort(function(a,b){
            return a.nota - b.nota;
        });
    }
}

function aprovadoounao(listaturmas){
    for (var i=0; i<listaturmas.length; i++){
        var turma=listaturmas[i];

        for (var j=0;j<turma.alunos.length;j++){
            var aluno=turma.alunos[j];

            if (aluno.nota >= 7){
                console.log(aluno.nome + " aprovado com "+aluno.nota);
            } else {
                console.log(aluno.nome + " reprovado com "+aluno.nota+" kkkkkk");
            }
        }
    }
}

turminha(turmas);
aprovadoounao(turmas);
