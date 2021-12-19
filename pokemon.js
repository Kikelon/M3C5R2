
function getPokemon() {

  let pokemon = document.getElementById("pokemon-name").value;
  let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

  let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    method: "GET"
  };
  fetch(url, param)
    .then(function (data) {
      return data.json();
    })
    .then(function (result) {
      console.log(result);
      let skils = [];
      let tableBody = "";
      for (let i = 0; i < result.abilities.length; i++) {
        tableBody += '<tr><th scope=\"row\">' + (i+1) + '</th><td>' + result.abilities[i].ability.name + '</td></tr>';
      };
      if (tableBody != ""){
        document.getElementById("data-table").className = 'table text-white';
        document.getElementById("table-body").innerHTML = tableBody;
      };
      document.getElementById("photo").setAttribute("src", result.sprites.back_default);
    })
    .catch(function (error) {
      console.log(error);
    })
};

function getAllPokemon() {

  let url = "https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10";

  let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    method: "GET"
  };
  fetch(url, param)
    .then(function (data) {
      return data.json();
    })
    .then(function (result) {
      console.log(result);
      let skils = [];
      let tableBody = "";
      for (let i = 0; i < result.results.length; i++) {
        tableBody += '<tr><th scope=\"row\">' + (i+1) + '</th><td>' + result.results[i].name + '</td></tr>';
      };
      document.getElementById("table-body").innerHTML = tableBody;
    })
    .catch(function (error) {
      console.log(error);
    })
};
