var events = require("events");
var util = require('util');

var Person = function(name){
   this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var mary = new Person("Mary");
var john = new Person("John");

var people = [james, mary, john];

people.forEach(function(person) {
  person.on('speak', function(mssg){
    console.log(person.name + " said: " + mssg);
  });
});

james.emit("speak","I'm the fan of Tramp!");
