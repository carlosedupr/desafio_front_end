$(document).ready(function(){
    var tbItens = localStorage.getItem("tbItens");
    tbItens = JSON.parse(tbItens); 
    if(tbItens == null)
    {
        tbItens = [];
    }
    
    $("#cadastro").on("submit",function(){
        return adicionar();
    });
    
    $('#cancelar').on('click', function(){
        window.location.href = "listagem.html";
    });

    $("#nomeItem").on("input", function(){
        var regexp = /[^a-zA-Z*\s]/g;
        if(this.value.match(regexp)){
            $(this).val(this.value.replace(regexp,''));
        }
    });

    $('#quantidade').on('keypress', function(){
        if($("#unidadeMedida").val()== 1 || $("#unidadeMedida").val() == 2){
            var regexp = /\d/g;
            if(this.value.match(regexp)){
                $(this).val(this.value.replace(regexp,''));
            }
        }
        
    });

    function adicionar(){
        if(validarCampos(event)){
            var item = JSON.stringify({
                NomeItem        : $("#nomeItem").val(),
                UnidadeMedida   : $("#unidadeMedida").val(),
                Quantidade      : $("#quantidade").val(),
                Preco           : $("#preco").val(),
                ProdutoPerecivel: $("#produtoPerecivel").val(),
                DataValidade    : $("#dataValidade").val(),
                DataFabricacao  : $("#dataValidade").val()
            });
            tbItens.push(item);
            localStorage.setItem("tbItens", JSON.stringify(tbItens));
            alert("Registro adicionado.");
            return true;
        }
    }

    function validarCampos(event){
        var validacao = true;
        removerErro();

        if($('#nomeItem').val() == ''){
            validacao = false;
            $('#nomeItem').addClass('error');
            $('#nomeItem_erro').append('<span>O campo deve ser preenchido</span>');
            $('#nomeItem_erro').show();
            event.preventDefault();
        }

        if($('#nomeItem').length > 50){
            validacao = false;
            $('#nomeItem').addClass('error');
            $('#nomeItem_erro').append('<span>O campo deve ser menor que 50 caracteres</span>');
            $('#nomeItem_erro').show();
            event.preventDefault();
        }

        if($('#unidadeMedida').val() == 0){
            validacao = false;
            $('#unidadeMedida').addClass('error');
            $('#unidadeMedida_erro').append('<span>Selecione uma unidade de medida</span>');
            $('#unidadeMedida_erro').show();
            event.preventDefault();
        }

        return validacao;
    }

    function removerErro(){
        $('#input[type=text]').removeClass('error');
        $('select').removeClass('error');
    }

    
});
