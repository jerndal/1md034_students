/*
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




let burg1 = new menuItem('La Foledoledoledoff', 870, true, false, 'img/umami.jpg');

let burg2 = new menuItem('Sneskus', 960, true, true, 'img/snuskis.jpg');

let burg3 = new menuItem('Le Monde', 740, true, false, 'img/dag.jpg');

let burg4 = new menuItem('Tango', 900, true, true, 'img/halloumi.jpg');

let burg5 = new menuItem('Winter Cafe', 920, true, false, 'img/fetmaxburgare.png');


console.log(burg1.name());

console.log(burg2.name());

console.log(burg3.name());

console.log(burg4.name());

console.log(burg5.name());

document.getElementById("burger1").innerHTML = burg1.name();

document.getElementById("burger2").innerHTML = burg2.name();

document.getElementById("burger3").innerHTML = burg3.name();

document.getElementById("burger4").innerHTML = burg4.name();

document.getElementById("burger5").innerHTML = burg5.name();




/*
let burg1 = new menuItem('La Foledoledoledoff', 870, true, false, 'img/umami.jpg');

let burg2 = new menuItem('Sneskus', 960, true, true, 'img/snuskis.jpg');

let burg3 = new menuItem('Le Monde', 740, true, false, 'img/dag.jpg');

let burg4 = new menuItem('Tango', 900, true, true, 'img/halloumi.jpg');

let burg5 = new menuItem('Winter Cafe', 920, true, false, 'img/fetmaxburgare.png');

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

/*
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
*/
/*
function show_image(src, width, height, alt){
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}

var menu = [burg1, burg2, burg3, burg4, burg5];

let myElement = document.getElementById("burgers");

document.getElementById("burgers").style.color = "white";

for (i=0; i<menu.length; i++)
{
    var burger = menu[i];   
    let listName = document.createElement("h1");
    let burgDiv = document.createElement("div");
    let listkCal = document.createElement("li");
    let name = document.createTextNode(burger.firstName);
    let kCal = document.createTextNode(burger.calories);
    let listImage = document.createElement("p");
    listName.appendChild(name);
    listkCal.appendChild(kCal);
    burgDiv.appendChild(listName);
    listImage.appendChild(show_image(burger.image, 200, 150, burger.firstName));
    burgDiv.appendChild(listImage);
    burgDiv.appendChild(listkCal);
    myElement.appendChild(burgDiv);


    if(burger.gluten){
	let gluten = document.createTextNode('gluten');
	let glutenItem = document.createElement("li");
	glutenItem.appendChild(gluten);
	burgDiv.appendChild(glutenItem);
	
    }
    
    if(burger.vegetarian){
	let veg = document.createTextNode('vegetarian');
	let listVeg = document.createElement("li");
	listVeg.appendChild(veg);
	burgDiv.appendChild(listVeg);

    }
}
*/
/*
function menuItem(name, kCal, gluten, veg, img) {
    this.firstName = name; 
    this.calories = kCal;
    this.gluten = gluten;
    this.vegetarian = veg;
    this.image = img;
    this.name = function() {
    var name = this.firstName + ' ' + this.calories;
    var gluten2 = '';
    var veg = '';
        if (this.gluten){
        	gluten2 = ' gluten ';
        }
        if(this.vegetarian){
        	veg = 'vegetarian'; 
        
        }
  	      
	return name + gluten2 + veg;

    }


}

let burg1 = new menuItem('La Foledoledoff', 870, true, false, '/img/umami.jpg');

let burg2 = new menuItem('Sneskus', 960, true, true, '/img/snuskis.jpg');

let burg3 = new menuItem('Le Monde', 740, true, false, '/img/dag.jpg');

let burg4 = new menuItem('Tango', 900, true, true, '/img/halloumi.jpg');

let burg5 = new menuItem('Winter Cafe', 920, true, false, '/img/fetmaxburgare.png');
*/
