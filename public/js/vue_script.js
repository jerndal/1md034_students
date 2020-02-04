const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})

let burg1 = new menuItem('La Foledoledoledoff', 870, true, false, 'img/umami.jpg');

let burg2 = new menuItem('Sneskus', 960, true, true, 'img/snuskis.jpg');

let burg3 = new menuItem('Le Monde', 740, true, false, 'img/dag.jpg');

let burg4 = new menuItem('Tango', 900, true, true, 'img/halloumi.jpg');

let burg5 = new menuItem('Winter Cafe', 920, true, false, 'img/fetmaxburgare.png');

const vm = new Vue({
  el: '#myID',
  data: {
    //arbitraryVariableName: 'Välj en burgare ' + new Date()
    
    b1: burg1.name(),
    b2: burg2.name(),
    b3: burg3.name(),
    b4: burg4.name(),
    b5: burg5.name()


  }
})

function menuItem(name, kCal, gluten, veg, img) { 
    this.firstName = name; 
    this.calories = kCal;
    this.gluten = gluten;
    this.vegetarian = veg;
    this.image = img;
    this.name = function() {
        return this.firstName + ' ' + this.calories;
    };
}

/*
let burg1 = new menuItem('La Foledoledoledoff', 870, true, false, 'img/umami.jpg');

let burg2 = new menuItem('Sneskus', 960, true, true, 'img/snuskis.jpg');

let burg3 = new menuItem('Le Monde', 740, true, false, 'img/dag.jpg');

let burg4 = new menuItem('Tango', 900, true, true, 'img/halloumi.jpg');

let burg5 = new menuItem('Winter Cafe', 920, true, false, 'img/fetmaxburgare.png');

const vm = new Vue({
  el: '#myID',
  data: {
    //arbitraryVariableName: 'Välj en burgare ' + new Date()
    			burgers: [
          	burg1,
            burg2,
            burg3, 
            burg4,
            burg5
          
          ]
  }
})

function menuItem(name, kCal, gluten, veg, img) {
    this.firstName = name; // The this keyword refers to the object itself
    this.calories = kCal;
    this.gluten = gluten;
    this.vegetarian = veg;
    this.image = img;
    this.name = function() {
        return this.firstName + ' ' + this.calories;
    };
}

*/
