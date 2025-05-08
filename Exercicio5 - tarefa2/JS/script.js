function verificarnome(){
  var nome = document.getElementById("nome").value;
  var funcionario = document.getElementById("funcionario");
  var dados = document.getElementById("dados");
  var lista = document.getElementById("lista");
  
   funcionario.innerHTML = '' ;
   dados.innerHTML = '' ;

   switch (nome){
       case "bianca andrade":
          funcionario.innerHTML = "bianca é funcionaria";
           break;
       case 'maria clara gomes':
           funcionario.innerHTML = "maria clara é funcionaria";
           break;
       case "julia da silva":
           funcionario.innerHTML = "julia é funcionaria";
           break;
       default:
           funcionario.innerHTML = "funcionario não encontrada";
           break;
   } 
     if (nome === "julia da silva"){
        let pessoa = {
           cargo: 'caixa',
           idade: 25,
           salario: 2000,
           anos_de_empresa:'dois anos'
       };
       for (let key in pessoa){
           dados.innerHTML += key + ' : '+ pessoa[key] + "<br>";
       }
   }
      if (nome === 'bianca andrade'){
        let pessoa = {
           cargo: "fiscal de loja",
           idade: 28,
           salario: 2500,
           anos_de_empresa: 'um ano e 4 meses'
        };
        for (let key in pessoa){
            dados.innerHTML += key + ' : '+ pessoa[key]+ '<br>';
        }
   }
      if (nome === 'maria clara gomes'){
        let pessoa ={
            cargo: 'gerente',
            idade: 32,
            salario: 4500,
            anos_de_empresa: 'cinco anos e 3 messes'
        };
        for (let key in pessoa){
             dados.innerHTML += key + ' : '+ pessoa[key]+ '<br>';
        }
   }
   const lista_tarefas_diaria = {
      gerente : "Abrir Loja, " + " Verificar Demandas do Dia " + "e " + " Pedidos de Compras.",
      fiscal : " Verificar Estoque, " + " Verificar Produtos com Validades e Vencidos.",
      caixa : "Atender Clientes, " + " Fechar Caixa " + "e" +  " Verificar Troco.",
   };
  
  
   lista.innerHTML = '';


   if (nome === "julia da silva"){
        lista.innerHTML = "tarefas do dia: " + lista_tarefas_diaria.caixa;
   } else if (nome === "bianca andrade"){
        lista.innerHTML = "tarefas do dia: " + lista_tarefas_diaria.fiscal;
   }else if (nome === "maria clara gomes") {
        lista.innerHTML = "tarefas do dia: " + lista_tarefas_diaria.gerente;
   };
}



