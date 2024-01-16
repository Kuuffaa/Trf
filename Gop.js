class Car {
  constructor(name, year) {
    this.name = nme;
    this.year = yeasrs;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Fods", 212);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years oldman.";
