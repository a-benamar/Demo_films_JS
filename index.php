<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EVALUATION JS FILMS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
</head>

<body>
  
<!-- debut navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> 
    </ul>
  </div>
</nav>

<!-- <?php include("navbar.php"); ?> -->

<!-- fin navbar -->


    <div class="container">
    <div class="row">
    <h1 class="m-3 text-muted text-center">DEMO JS - FILMS</h1>
    </div>
        <div class="row d-flex m-3 justify-content-center">
            <div class="col-sm-6">
                <input id="rechercheFilm" list="dataListTitle" onkeyup="rechercheTitleFilm()" type="search" placeholder="Rechercher" class="form-control">
                <datalist id="dataListTitle">
                
                </datalist>
            </div>
        </div>
        <div id="divFilms" class="row d-flex card-deck justify-content-around"></div>
    </div>
    <!-- <script src="js/verifForm.js"></script> -->
    <script src="js/films.js"></script>


    

    
    <div class="card-footer text-center bg-secondary">
    <footer class="text-center">Copyright &copy 2021 - JS FILMS</footer>
      </div>

</body>
</html>