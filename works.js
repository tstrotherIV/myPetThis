let myPet = {
  name: "Higgle Biggle Wiggle",
  species: "blue heeler",
  nickName: "Higgs",
  age: 5,
  favoriteToys: [],
  play: function(toy) {
    if (toy === "bone") {
      this.favoriteToys.push(toy);
    } else {
      window.alert("I hate that toy!");
    }
  },
  bark: function() {
    // window.alert("I'm going to get you!");
  },
  jump: function() {
    console.log("excited");
  },
  hide: function() {
    console.log("Hide and seek");
  }
};

myPet.bark();
myPet.jump();
myPet.hide();
myPet.play("bone");
console.log(myPet.favoriteToys);
