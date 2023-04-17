function criarCarro(modelo, portas, aro, tetoSolar){
    return {
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro: function(){
            console.log("Ligou");
        },
        temTetoSolar: function(){
            if(this.tetoSolar){
                console.log("Tem teto solar");
            }else{
                console.log("Não tem teto solar");
            }
        }
    }
}

let ferrari = criarCarro('Ferrari', 4, 18, true);
console.log(ferrari.modeloDoCarro);
ferrari.ligarCarro();
ferrari.temTetoSolar();

let bmw = criarCarro('BMW', 2, 16, true);
