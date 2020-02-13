'use strict';
const socket = io();

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
	orders: {},
	theOrder: {orderId: "", details: {x:0, y:0}, orderItems:[], customerInformation:[]},
	numberOrd: 0
	
    },
    methods:{
	createCustomer: function(name, email, adress, postnummer, recipient, pick) {
	    let array = ['Namn: ' + name, 'E-mail: ' + email, adress, postnummer, 'Betalningsmedel: ' + recipient, 'Kön: ' + pick];
	    let arr = vm.getBurger();
	    console.log(arr);
	    let div = document.getElementById("orderInfo");
	    document.getElementById("orderInfo").innerHTML="";
	    let fooHead = document.createElement("h3");
	    let fooHeadText = document.createTextNode("Beställningsinformation");
	    fooHead.appendChild(fooHeadText);
	    div.appendChild(fooHead);


	    
	    for(let i = 0; i < array.length; i++){
		let foo = document.createElement("p");
		let fooText = document.createTextNode(array[i]);
		foo.appendChild(fooText);
		div.appendChild(foo);
		
	    }
	    let fooHead2 = document.createElement("h3");
	    let fooHeadText2 = document.createTextNode("Valda burgare");
	    fooHead2.appendChild(fooHeadText2);
	    div.appendChild(fooHead2);

	    for(let i = 0; i < arr.length; i++){
		let foo = document.createElement("li");
		let fooText = document.createTextNode(arr[i]);
		foo.appendChild(fooText);
		div.appendChild(foo);
	    }

	    this.addOrder();
	},
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    this.numberOrd += 1;
	    return this.numberOrd;
	    
	},
	addOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. 
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    }; 
	    */
	    this.theOrder.orderId = this.getNext();
	    socket.emit('addOrder', {
		orderId: this.theOrder.orderId,
		details: {
		    x: this.theOrder.details.x,
		    y: this.theOrder.details.y
		},
		orderItems: vm.getBurger(),
		customerInformation: [this.name, this.email, this.recipient, this.pick]
	    });
	    orders: this.theOrder;
	},
	displayOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.theOrder = {
		orderId: "T",
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
	    };
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




  
