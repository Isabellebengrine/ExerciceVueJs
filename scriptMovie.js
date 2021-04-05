/* essai avec ajax mais pb syntaxe ??? à revoir :

        $(document).ready(function() {

            $('#submit').click(function () {

                //je récup valeur de input de recherche :
                let movie = $("#movie").val();

                //pour récupérer les données qui sont au format json: fonction getJSON :
                $.getJSON("http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=" + movie, function (data) {
                    //je parcours la propriété results qui est un tableau d'objets représentant les films trouvés :
                    $.each(data.results, function(key, val) {
                        $('#result').html('<p> Titre: ' + val.title + '</p>');
                        $('#result').append('<p> Overview: ' + val.overview+ '</p>');
                        $('#result').append('<p> Release date: ' + val.release_date+ '</p>');
                    });
                    
                });
            });

        });

        */

//AVEC VUEJS

let main = new Vue({
    el: '#main',
    data: {
        panneau1: true,
        panneau2: null,
        films: [],
        film: {},
        movie: "",
        errored: false
    },
    
    methods: {
        recherche: function (event) {

            this.panneau1 = true;
            this.panneau2 = false;

            //je vérif si rentre dans function:
            console.log("test");
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=' + main.movie)
                .then(function (response) {
                    // handle success
                    //je vois à quoi ressemble la réponse :
                    console.log(response);

                    //je trouve les infos que je veux et je les stocke dans tableau que je vais parcourir dans la div result avec v-for :
                    main.films = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    this.errored = true;
                })
            
        },

        affiche_details: function (film) {
            this.film = film;
            this.panneau1 = false;
            this.panneau2 = true;
        }
        
    }

});





