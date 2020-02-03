
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



//'public/img/snuskis.jpg'

let burg1 = new menuItem('La Foledoledoledoff', 870, true, false, 'img/umami.jpg');

let burg2 = new menuItem('Sneskus', 960, true, true, 'img/snuskis.jpg');

let burg3 = new menuItem('Le Monde', 740, true, false, 'img/dag.jpg');

let burg4 = new menuItem('Tango', 900, true, true, 'img/halloumi.jpg');

let burg5 = new menuItem('Winter Cafe', 920, true, false, 'img/fetmaxburgare.png');


console.log(burg1.name() );

console.log(burg2.name());

console.log(burg3.name());

console.log(burg4.name());

console.log(burg5.name());
