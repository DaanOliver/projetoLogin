function validacao(){
    let usuarioValido = "daniel"
    let senhaValida = 123456
    let usuario= document.getElementById("usuario").value;
    let senha= document.getElementById("senha").value;
    // Usuario Invalido
    if (usuario != usuarioValido && senha =="")
    {
        alert("Usuario Invalido, Senha Vazio.");
    }
    else if(usuario != usuarioValido && senha != senhaValida)
    {
        alert("Usuario Invalido e a senha invalida.");
    }
    else if (usuario != usuarioValido && senha == senhaValida)
    {
        alert("Usuario Valido, senha invalida.");
    }
    // Vazio
    else if (usuario=="" && senha =="") 
    {
        alert("Usuario e senha vazio.");
    }
    else if (usuario == "" && senha != senhaValida)
    {
        alert("Usuario vazio e senha invalida");
    }
    else if (usuario == "" && senha == senhaValida) 
    {
        alert("Usuario Vazio, senha valida."); 
    }
    //Usuario Valido
    else if (usuario == usuarioValido && senha == "") 
    {
        alert("Usuario Vazio, senha vazia.");  
    }
    else if (usuario == usuarioValido && senha != senhaValida)
    {
        alert("Usuario Valido, senha invalida.");
    }
    else if (usuario == usuarioValido && senha == senhaValida) 
    {
        alert("Login realizado com sucesso");
        window.open("","_self");    
        document.write("<link rel='stylesheet' href='css/estilo.css'></link>");
        document.write("<h2>Seja bem vindo a Folha de São Paulo</h2>");
        document.write("<p>Folha de São Paulo é o jornal com o maior conteudo nacional sobre politica, economia, futebol, opinião e charges do Brasil.</p>");
        document.write("<img src= 'img/download.png' alt='Aquie era para aparecer uma imagem do jogares da copa de 2010' width='300px'hight='350px'>");
        document.write("<ul><a href='edicaofolha.html'<li class='item-lista'>Edição Folha</li></a><br/>");
        document.write("<a href= 'opiniao.html'<li class='item-lista'>Opinião Folha</li></a><br/>");
        document.write("<a href='editoriais.html'<li class='item-lista'>Editoriais Folha</li></a><br/>");
        document.write("<a href='charges.html'<li class='item-lista'>Charges Folha</li></a><br/>");
        document.write("<a href='tendenciasedebates.html'<li class='item-lista'>Tendencias e Debates Folha</li></a><br/>");
        document.write("<a href='ultimas.html'<li class='item-lista'>Ultimas Folha</li></a><br/>");
        document.write("<a href='colunaseblogs.html'<li class='item-lista'>Colunas e Blogs Folha</li></a><br/>");
        document.write("<a href='colunas.html'<li class='item-lista'>Colunas Folha</li></a><br/>");
        document.write("<a href='blogs.html'<li class='item-lista'>Blogs Folha</li></a><br/>");
        document.write("<a href='rotativas.html'<li class='item-lista'>Rotativas Folha</li></a><br/>");
        document.write("<a href='maispopulares.html'<li class='item-lista'>Mais Populares Folha</li></a><br/>");
        document.write("<a href='maislidas.html'<li class='item-lista'>Mais Lidas Folha</li></a><br/>");
        document.write("<a href='maiscomentadas.html'<li class='item-lista'>Mais Comentadas Folha</li></a><br/></ul>");
        
    }
}