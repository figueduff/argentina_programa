async function getUsers() {
    let users = await fetch('https://randomuser.me/api/?results=1');
    let data = await users.json()
    let resultado = data.results[0]
    console.log(resultado)
    document.querySelector('#nombre').innerHTML = resultado.name.first + " " + resultado.name.last;
    document.querySelector('#foto').src = resultado.picture.large;
    document.querySelector('#direccion').innerHTML = resultado.location.street.name + " " + resultado.location.street.number + " - " +
    resultado.location.city + " - " + resultado.location.country;
    document.querySelector('#email').innerHTML = resultado.email;
    document.querySelector('#hemail').href = "mailto: "+resultado.email;
    document.querySelector('#movil').innerHTML = resultado.phone;
    document.querySelector('#hmovil').href = "tel:"+resultado.phone;
    document.querySelector('#edad').innerHTML = resultado.dob.age;
    document.querySelector('#nombreFooter').innerHTML = resultado.name.first + " " + resultado.name.last;
}

getUsers();

