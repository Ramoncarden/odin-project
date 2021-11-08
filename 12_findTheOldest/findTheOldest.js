const findTheOldest = function(item) {
  // return item.reduce((previous, current) => {
  //   if (!current.yearOfDeath) {
  //     let calcAge = new Date().getFullYear();
  //     return previous.yearOfDeath - previous.yearOfBirth > calcAge - current.yearOfBirth ? previous : current;
  //   }
  //   return previous.yearOfDeath - previous.yearOfBirth > current.yearOfDeath - current.yearOfBirth ? previous : current;
  // });

  return item.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
