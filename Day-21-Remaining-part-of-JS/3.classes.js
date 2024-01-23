class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log("Hi" + " " + this.speaks);
  }

  static myType() {
    console.log("Animal");
  }
}

// object creation
let dog = new Animal("dog", 4, "bhow bhow");
dog.speak();
Animal.myType();

// more content to be added
