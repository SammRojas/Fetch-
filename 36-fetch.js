"use strict";
/* Fech (ajax) y peticiones aservicios / api rest */

var div_usuarios = document.querySelector("#usuarios");

fetch("https://reqres.in/api/users?page=1")
  .then((data) => data.json())
  .then((users) => {  
    listUsers(users.data);
  });

function listUsers(users) {
  users.map((user, i) => {
    let name = document.createElement("h3");
    name.innerHTML = `${i + 1}.  ${user.first_name}  ${
      user.last_name
    }<span style="color: green;"> correo electronico: </span>${user.email}`;

    div_usuarios.appendChild(name);
    document.querySelector(".loading").style.display = "none";
  });
}
