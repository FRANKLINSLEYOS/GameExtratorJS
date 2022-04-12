// 1. Receber o arquivo HTML e transformá-lo em objeto.

function separaDados(ObjXML) {
  var todosNOS = window.document.querySelectorAll("tbody");
  var qtdNOS = b.length - 1;

  window.document.writeln(qtdNOS);
  window.document.writeln('<br/>');
  for (var i = 0; i <= qtdNOS; i++) {
      try {
          if (i == 0 || i % 2 == 0) {
              var no_1 = todosNOS[i].querySelectorAll("tr");
              var no_2 = no_1[0].querySelectorAll("td");
              no_2.item(i);
              var ele = no_2.item(0).innerText + ' ' +
                  no_2.item(1).innerText + ' ' +
                  no_2.item(2).innerText + ' ' +
                  no_2.item(3).innerText + ' ' +
                  no_2.item(4).innerText + ' ' +
                  no_2.item(5).innerText + ' ' +
                  no_2.item(6).innerText + ' ' +
                  no_2.item(7).innerText + ' ' +
                  no_2.item(8).innerText + ' ' +
                  no_2.item(9).innerText + ' ' +
                  no_2.item(10).innerText + ' ' +
                  no_2.item(11).innerText + ' ' +
                  no_2.item(12).innerText + ' ' +
                  no_2.item(13).innerText + ' ' +
                  no_2.item(14).innerText + ' ' +
                  no_2.item(15).innerText + ' ' +
                  no_2.item(16).innerText + '<br />';
              //jogo.push( ele ); 
              window.document.writeln(ele);
          }
      } catch (error) {
          //window.document.writeln( error );
      }

  }
}