const nameGenerator = {
  nameOptions: {
    adjective: ["Inquisitive", "Farty", "Blunt", "Smelly", "Fat", "Fluffy", "Sly", "Playful", "Annoyed", "Soft"],
    animal: ["Squirrel", "Monkey", "Moose", "Octopus", "Giraffe", "Bear", "Hamster", "Eagle", "Turtle", "Kangaroo"],
  },

  getRandomNameFromArray(arrayName) {
    const array = this.nameOptions[arrayName];
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  },

  generateRandomName() {
    const adj = this.getRandomNameFromArray("adjective");
    const animal = this.getRandomNameFromArray("animal");
    return [adj, animal];
  },
}

function updateNameText(adj, animal) {
  document.getElementById("generatedName").innerHTML = `${adj} ${animal}`;
}

function generateName() {
  const name = nameGenerator.generateRandomName();
  updateNameText(name[0], name[1]);
}

function onBtnClick() {
  for (let i = 0; i < 10; i++) {
  const timeOut = i * 100;
  setTimeout(generateName, timeOut);
  }
}