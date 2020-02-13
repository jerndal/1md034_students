const vm = new Vue({
    el: '#test',
    data: {
	array: food,
	burgerChoice:[],
    },
    methods: {
	getBurger: function(){
	    return this.burgerChoice;
	}
    }
})

const vm2 = new Vue({
    el: '#information',
    data: {
	name: '',
	email: '',
	adress: '',
	postnummer: '',
	recipient: '',
	pick: '',
    },
    methods:{
	createCustomer: function(name, email, adress, postnummer, recipient, pick) {
	    let array = [name, email, adress, postnummer, recipient, pick];
	    let arr = vm.getBurger();
	    console.log(arr);
	    let div = document.getElementById("orderInfo");

	    for(let i = 0; i < array.length; i++){
		let foo = document.createElement("p");
		let fooText = document.createTextNode(array[i]);
		foo.appendChild(fooText);
		div.appendChild(foo);
	    }

	    for(let i = 0; i < arr.length; i++){
		let foo = document.createElement("p");
		let fooText = document.createTextNode(arr[i]);
		foo.appendChild(fooText);
		div.appendChild(foo);
	    }
	}
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




