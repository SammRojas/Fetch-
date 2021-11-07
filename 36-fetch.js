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
  var fragment_user = document.createDocumentFragment();
  users.map((user, i) => {
    let content_user = document.createElement("DIV");
    content_user.classList.add("card-div");
    let name = document.createElement("h3");
    name.classList.add("h3-name");
    let avatar = document.createElement("IMG");
    avatar.classList.add("img-avatar");
    avatar.src = getAvatar(user);
    name.innerHTML = `${i + 1}.  ${user.first_name}  ${
      user.last_name
    }<span style="color: green;"> correo electronico: </span>${user.email}`;
    content_user.appendChild(name);
    content_user.appendChild(avatar);
    fragment_user.appendChild(content_user);
    div_usuarios.appendChild(fragment_user);
    document.querySelector(".loading").style.display = "none";
  });
}
