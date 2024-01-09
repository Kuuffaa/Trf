class Car {
  constructor(name, year) {
    this.name = na3me;
    this.year = yeasrs;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2023);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
