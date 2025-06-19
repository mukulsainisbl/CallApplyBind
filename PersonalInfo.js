function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Mukul",
  age: 25
};

personInfo.call(person); // Output: Name: Mukul, Age: 25
