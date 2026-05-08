const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };

console,log({obj1, obj2}); // {obj1: {…}, obj2: {…}} // object literal shorthand is used to create an object with the same key and value name. It is a shorthand syntax for creating an object.

console.log(Object.assign({}, obj1, obj2)); // {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"} // assign method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

console.log({...obj1, ...obj2}); // {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"} // spread operator is used to spread the properties of the object into a new object. It is a shorthand syntax for creating a new object with the properties of the existing objects.

console.log(Object.keys(obj1)); // ["1", "2", "3"] // keys method is used to return an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

console.log(Object.values(obj1)); // ["one", "two", "three"] // values method is used to return an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

console.log(Object.entries(obj1)); // [["1", "one"], ["2", "two"], ["3", "three"]] // entries method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

console.log(obj1.hasOwnProperty("1")); // true // hasOwnProperty method is used to check if the object has the specified property as its own property (not inherited). It returns a boolean value.