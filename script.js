//exemples du cours :

//va aller dans div avec id = app1 :
var app1 = new Vue({
    el: '#app1',
    data: {
     message: 'Bonjour ! Saisissez quelque chose :'
    },
   });

//va aller dans div avec id = app2 :
//lier champ de form avec v-model="..."

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Coucou !'
    },
});

//dans div exvshow :

let vshow = new Vue({
    el: '#exvshow',
    data: {
        affichage: true,
        message: 'Afficher/Masquer un élément'
    },
});

//dans div id html :

let exhtml = new Vue({
    el: '#html',
    data: {
        rawHtml: '<span style="color:red">Rouge!</span>'
    },
});

//dans div id capture :

let app = new Vue({
    el: '#capture',
    data: {
     message: 'Cliquez sur le bouton',
     label_visible: false
    },
    methods: {
     btn1_click: function(evt) {
      this.message = "Le label est visible";
      this.label_visible = true;
     }
    }
   });

//dans div avec id axios :
//appeler le point de terminaison de l’API et afficher le résultat afin que nous puissions connaître sa structure et son contenu. Nous allons donc commencer par créer une donnée qui gardera nos informations, puis nous récupérerons les données et les attribuerons à l’aide de l’étape mounted du cycle de vie :

new Vue({
    el: '#axios',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    filters: {
        currencydecimal (value) {
          return value.toFixed(2)
        }
      },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
        .catch(error => {
            console.log(error)
            this.errored = true
          })
        .finally(() => this.loading = false)
    }
  })

//exercices:
//dans div avec id "additionneur" :

let sum = new Vue({
    el: '#additionneur',    
    data: {
        //déclaration des variables utilisées
        firstNb: '',
        secondNb: '',
        result: ''
    },       
    methods: {
        addition: function(evt) {
            this.result = parseInt(firstNb.value) + parseInt(secondNb.value); 
        }
    }
});

//dans div avec id "nbmagique" :

let verif = new Vue({
    //nom de id où on veut mettre result
    el: '#nbmagique',
    data: {
        //déclaration des variables utilisées
        number: '',
        magic: parseInt(Math.random()*100),
        count: 1,
        result: ''
    },
    methods: {
        verifier: function(evt){
            console.log('magic =' + this.magic);
            console.log(number.value);
            if(this.magic == number.value){
                this.result = "Bravo! Vous avez trouvé en " + this.count + " coups !";
            } else if (this.magic > number.value){
                this.count ++;
                this.result = "Essayez plus que " + number.value ;
            } else {
                this.count ++;
                this.result = "Essayez moins que " + number.value ;
            }
        }
    }
});

//dans div avec id "calculatrice" :

let calcul = new Vue({
    el: '#calculatrice',
    data: {
        prevNum: '',
        number: '',
        operator: null,
        operatorClicked: false
    },
    methods: {
        clear: function() {
            this.number = '';
        },
        append: function(chiffre) {
            //remettre à zéro pour stocker 2e nb :
            if (this.operatorClicked){
                this.number = '';
                this.operatorClicked = false;
            }
            this.number = `${this.number}${chiffre}`; //es6 standard literal
        },
        dot() {
            //n'ajouter . que si on n'a pas encore de . :
            if(this.number.indexOf('.') === -1) {
                this.append('.');
            }
        },
        setPrevNum() {
            //qd clic sur operateur on stocke 1er nb avat de passer au 2e :
            this.prevNum = this.number;
            this.operatorClicked = true;//pour entrer dans boucle de fonction append et commencer à stocker 2e nb
        },
        add() {
            this.operator = (a, b) => a + b;
            this.setPrevNum();
        },
        substract() {
        this.operator = (a, b) => a - b;
        this.setPrevNum();
        },
        divide() {
        this.operator = (a, b) => a / b;
        this.setPrevNum();
        },
        multiply() {
        this.operator = (a, b) => a * b;
        this.setPrevNum();
        },
        equals() {
        this.number = `${this.operator(
            parseFloat(this.prevNum),
            parseFloat(this.number)
        )}`;
        this.prevNum = '';//remet à zéro le 1er nb
        }
      
    }

});

//dans div id interface :

let panneaux = new Vue({
    el: '#interface',
    data: {
     message: 'Cliquez sur le bouton',
     panneau1: true,
     panneau2: null
    },
    methods: {
        afficher2: function(evt) {
            this.panneau1 = false;
            this.panneau2 = true;
         },
        afficher1: function(evt) {
            this.panneau1 = true;
            this.panneau2 = false;
         }
    }
   });
