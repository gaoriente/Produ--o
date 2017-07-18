var login = $("#login");
var password = $("#password");

function teste(){
  var login = $("#login").val();
  var password = $("#password").val();
        if (login=="admin" && password=="admin") {
            window.location = "../_html/administrador_inicio.html";
        }else if (login=="boy" && password=="boy") {
            window.location = "../_html/motoboy_inicio.html";
        }else if (login=="cliente" && password=="cliente") {
            window.location = "../_html/cliente_contato.html";
        }else {
          alert("Login ou senha incorretos!");
        }
}
