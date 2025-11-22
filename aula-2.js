 function adicionarTarefa() {
    
      //varre o documento em busca do id inputTarefa
    const inputTarefa = document.getElementById("inputTarefa")
   

    //variável tarefa recebe o valor contido no inputTarefa
     let tarefa = inputTarefa.value.trim()

      const mensagem = document.getElementById("mensagem")

     if (tarefa == ""){
      //define a variavel mensagemErro
      let mensagemErro = "Adicione uma atividade válida!"  

      //varre o documento em busca do id mensagem e aplica o conteúdo da variável mensagemErro
      mensagem.textContent = mensagemErro;


     }else{
     //declaraçã0 da variável mensagem
      let mensagemSucesso = "Tarefa adicionada com sucesso!";
  
    //varre o documento em busca do id mensagem e aplica o conteúdo da variável mensagem
       mensagem.textContent = mensagemSucesso;

       //variável listaTarefas varre o documento a procura do elemento de id listaTarefas
       const listaTarefas = document.getElementById("listaTarefas")

       //variável nova tarrefa cria o elemento li
       let novaTarefa =  document.createElement("li")

       //variavel novaTarefa aplica o conteúdo da variável tarefa entre o elemento li
        novaTarefa.textContent = tarefa

        //o elemento nomeado como listaTarefas recebe um elemento filho chamado novaTarefa
        listaTarefas.appendChild(novaTarefa)
     }
      //esvazia o input após o onClick
       inputTarefa.value = ""
    
    }
