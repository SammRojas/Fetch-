"use strict";
/* Fech (ajax) y peticiones aservicios / api rest */

var div_usuarios = document.querySelector("#usuarios"); //selecciona el contenedor donde se musetra la informacion

getUsers()
  .then((data) => data.json())
  .then((users) => {
    listUsers(users.data);
  });

function getUsers() {
  return fetch("https://reqres.in/api/users?page=1"); // peticion al servicio reqres.in
}

function getAvatar(user) {
  /* 
  Obtiene el avatar de los usuarios 
  @param {json}
  @return string
  */
  console.log(user.avatar);
  return user.avatar;
}

function listUsers(users) {
  /* 
  Lista el response obtenido por medio de fetch y lo printa en el DOM 
  @param  {json}
  */
  users.map((user, i) => {
    let name = document.createElement("h3");
    let avatar = document.createElement("IMG");
    name.innerHTML = `${i + 1}.  ${user.first_name}  ${
      user.last_name
    }<span style="color: green;"> correo electronico: </span>${user.email}`;
    avatar.src = getAvatar(user);
    div_usuarios.appendChild(name);
    div_usuarios.appendChild(avatar);
    document.querySelector(".loading").style.display = "none";
  });
}
