const myProfile = {
  name: "Elegbede David",
  age: 27,
  country: "Nigeria",
  hobby: "Watching anime and playing games"
};

function displayProfile(person) {
  console.log(
    `${person.name} is ${person.age} years old, lives in ${person.country}, and enjoys ${person.hobby}.`
  );
}

displayProfile(myProfile);
