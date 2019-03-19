$(document).ready(function(){
    var tbItens = localStorage.getItem("tbItens");
    tbItens = JSON.parse(tbItens);
  
    $(function(){
      $("#tblListar").html("");
      $("#tblListar").html(
          "<thead>"+
          "   <tr>"+
          "   <th>Nome</th>"+
          "   <th>Unidade de medida</th>"+
          "   <th>Quantidade</th>"+
          "   <th>Preço</th>"+
          "   <th>Produto perecível</th>" +
          "   <th>Data de validade</th>" +
          "   <th>Data de fabricação</th>" +
          "   </tr>"+
          "</thead>"+
          "<tbody>"+
          "</tbody>"
          );
          
      for(var i in tbItens){
          var item = JSON.parse(tbItens[i]);
          var row = i%2 == 0 ? "<tr class='alt'>" : "<tr>";

          row += "<td>"+ item.NomeItem +"</td>";
          row += "<td>"+ item.UnidadeMedida +"</td>";
          row += "<td>"+ item.Quantidade +"</td>";
          row += "<td>"+ item.Preco +"</td>";
          row += "<td>"+ item.ProdutoPerecivel +"</td>";
          row += "<td>"+ item.DataValidade +"</td>";
          row += "<td>"+ item.DataFabricacao +"</td></tr>";

          $("#tblListar tbody").append(row);
          /*$("#tblListar tbody").append("<tr class='alt'>");
          $("#tblListar tbody").append("<td>"+ item.NomeItem +"</td>");
          $("#tblListar tbody").append("<td>"+ item.UnidadeMedida +"</td>");
          $("#tblListar tbody").append("<td>"+ item.Quantidade +"</td>");
          $("#tblListar tbody").append("<td>"+ item.Preco +"</td>");
          $("#tblListar tbody").append("<td>"+ item.ProdutoPerecivel +"</td>");
          $("#tblListar tbody").append("<td>"+ item.DataValidade +"</td>");
          $("#tblListar tbody").append("<td>"+ item.DataFabricacao +"</td>");
          $("#tblListar tbody").append("</tr>");*/
      }
    });
  });
  
  