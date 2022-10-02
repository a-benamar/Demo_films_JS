// Les Variables globales
let films=[{

    "Title": "Batman",
    "Year": "1989",
    "imdbID": "tt0096895",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
  },{
    "Title": "The Princess Bride",
    "Year": "1987",
    "imdbID": "tt0093779",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg"
  },{
    "Title": "Princess Mononoke",
    "Year": "1997",
    "imdbID": "tt0119698",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg"
  },{
    "Title": "Little Miss Sunshine",
    "Year": "2006",
    "imdbID": "tt0449059",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SX300.jpg"
  },{
    "Title": "The Little Mermaid",
    "Year": "1989",
    "imdbID": "tt0097757",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2JlZTBhYTEtZDE3OC00NTA3LTk5NTQtNjg5M2RjODllM2M0XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
  },{
    "Title": "Seven Psychopaths",
    "Year": "2012",
    "imdbID": "tt1931533",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMzUxMjc0M15BMl5BanBnXkFtZTcwMzQ2MjYyOA@@._V1_SX300.jpg"
  },{
    "Title": "The Expanse",
    "Year": "2015",
    "imdbID": "tt3230854",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg"
  },{
    "Title": "The Grand Budapest Hotel",
    "Year": "2014",
    "imdbID": "tt2278388",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
  },{
    "Title": "Jurassic Park",
    "Year": "1993",
    "imdbID": "tt0107290",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
  },{
    "Title": "The Expanse",
    "Year": "2010",
    "imdbID": "tt3230800;",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg"
  },{
    "Title": "In Your Name",
    "Year": "2003",
    "imdbID": "tt0374271",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNhN2FiZDUtYmRhYi00MTI5LWEwZGEtZDM3ODA4ZTE1MDMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },{
    "Title": "Game of Thrones",
    "Year": "2011–2019",
    "imdbID": "tt0944947",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg"
    
  }

];


//Fin des variables globales

//Les définitions de fonctions


 // Fonction qui permet d'afficher un Film

function afficheFilm(unFilm) {


    return `<div class="col 12 col-sm-6 col-md-4 col-xl-3">
  <div class="col my-4 border border-3 border-dark">
  <div class="card h-100 w-100" style="width:100%">
    <img src="${unFilm.Poster}" class="card-img-topp border border-3 border-dark p-1" alt="...">
    <div class="card-body bg-light border border-3 border-dark" style="height:180px;"
      <div class="card-body">
        <h5 class="card-subtitle mb-2 text-center text-danger">${unFilm.Title.toUpperCase()}<hr></h5>
        <h6 class="card-subtitle mb-2 text-center">Year : ${unFilm.Year}</h6>
        <h6 class="card-subtitle mb-2 text-center">Type : ${unFilm.Type}</h6>
        <h6 class="card-subtitle mb-2 text-center">imdbID : ${unFilm.imdbID}</h6>
      </div>
      </div>
      <div class="card-footer text-center border border-3 border-dark p-1">
        <small class="text-danger">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  </div>`;


}

// document.write(afficheFilm(films[0]))

 
 //Fonction qui permet d'afficher les films
 // utilise la fonction afficheFilm
 
function afficheDesFilms(desFilms) {
    let chaine = "";
    for (let i = 0; i < desFilms.length; i++) {
        let unFilm = desFilms[i];
        chaine += afficheFilm(unFilm);
    }

    document.querySelector("#divFilms").innerHTML = chaine;
}



 // Fonction qui permet d'afficher seulement les films rechercher
 
function rechercheTitleFilm() {
    let TitleRechercher = document.querySelector("#rechercheFilm").value
    console.log(TitleRechercher)
    let resultat = [];
    for (let i = 0; i < films.length; i++) {
        let leFilm = films[i];
        if (leFilm.Title.toLowerCase().includes(TitleRechercher.toLowerCase())) {
            resultat.push(leFilm);
        }

    }
    afficheDesFilms(resultat);
}


 // Procedure qui permet de constituer le dataList de manière dynamique
 
function afficheDataList() {
    let chaine = "";
    for (let i = 0; i < films.length; i++) {
        let TitleFilm = films[i].Title;
        chaine += `<option value='${TitleFilm}'>${TitleFilm}</option>`
    }
    document.querySelector("#dataListTitle").innerHTML = chaine;
}


//Fin des définitions de fonction

//Invocations
 afficheDesFilms(films);
afficheDataList();
//Fin des invocations

