myCharacter = 'Luna Lovegood';

myCharacterHouse = useSortingHat()

isMyCharacterRich = checkMyGringottAccount()

function useSortngHat(char) {
  let choice = ''
  
  switch (ch) {
    case 'Harry Potter':
      choice = 'Gryffindor';
    case 'Draco Malfoy':
      choice = 'Ravenclaw';
    case 'Luna Lovegood':
      choice = 'Ravenclaw';
    default:
      'Gryffindor'
  }
}

const checkMyGringottsAccount = () => {
    myMoney = Math.random() * 100
    
    if (myMoney > 0 || myMoney < 30) {
        return 'Hello Weasley'
    } else if ( myMoney > 30 ||  myMoney < 75 ) {
        return "Hey, that's cool"
    } else if (myMoney > 75) {
       "You're reach!"
    }
}