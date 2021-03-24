let findTheOldest = function(person) {

    const newDate = (new Date()).getFullYear();

    //check if yearOfDeath exists, set to newDate if not
    //eval yearofdeath against year of birth, return age
    //sort age from oldest to youngest
    let oldest = person.sort((a,b) => (((!a.yearOfDeath) ? a.yearOfDeath = newDate : a.yearOfDeath) - a.yearOfBirth) > (((!b.yearOfDeath) ? b.yearOfDeath = newDate : b.yearOfDeath) - b.yearOfBirth) ? -1 : 1 );

    console.table(oldest); 

    //returns the first array index which is the oldest
    return oldest[0];

}

module.exports = findTheOldest
