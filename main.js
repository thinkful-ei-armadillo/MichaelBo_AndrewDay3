function createMyObject (){
	return {
		foo: 'bar',
		answerToUniverse: 42,
		'olly olly': 'oxen free',
		sayHello: function(){
			console.log('hello');
		}
	};
}
//console.log(createMyObject());

function updateObject(obj){
    const obj2 = {
        foo: 'foo',
        bar: 'bar',
        bizz: 'bizz',
        bang: 'bang'
    }
    return { ...obj2, ...obj }
}
//console.log(updateObject({}));

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){
          return `${this.firstName} ${this.lastName}`
      },
    };
    return person;
  }
var person2 = {
    firstName: 'Dan',
    lastName: 'Smith',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

//console.log(person2.fullName());

const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo; 
    delete obj.bar;
    return obj;
  }

  //console.log(keyDeleter(sampleObj));

  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];

  function makeStudentsReport(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++){
        let subject = data[i];
        arr.push(`${subject.name}: ${subject.grade}`)
    }
    return arr;
  }
  //console.log(makeStudentsReport(testData));

  const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    for (let i = 0; i < students.length; i++){
        students[i].status = 'In Summer School'
    }
    return students;
  }

  //console.log(enrollInSummerSchool(studentData));

  // you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
    for (let i = 0; items.length; i++){
        if (items[i].id === idNum){
            return items[i];
        }
        else {
            console.log('ID does not exist.')
        }
    }
  }
  //console.log(findById(scratchData, 22));

  // running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    let arrayOfKeys = Object.keys(object);
      for (let i = 0; i < arrayOfKeys.length; i++){
        if (arrayOfKeys.length !== expectedKeys.length){
          return false;
        }

        if (arrayOfKeys[i] !== expectedKeys[i]){
          return false;
        }

        else {
          return true;
        }
      }
  }

  //console.log(validateKeys(objectB, expectedKeys));

  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
  
  function decode(word){
      let result = '';
      let strArr = word.split(' ');
      let arr = [];
    for (let i = 0; i < strArr.length; i++){
      for (let key in cipher){
        let letter = strArr[i].charAt(0);
        let newLetter = '';
        if (key === letter){
          let number = cipher[key];
          let newLetter = (strArr[i].charAt(number -1));
          arr.push(newLetter);
              }
      }
    }
    return arr.join('');
  }
  console.log(decode('craft block argon meter bells brown croon droop'));

  function createACharacter(Name, Nickname, Race, Origin, Attack, Defense, Weapon){
    return {
      Name,
      Nickname,
      Race,
      Origin,
      Attack,
      Defense,
      Weapon,
      describe: function(){
        console.log(`${this.Name} is a ${this.Race} from ${this.Origin}`)
      },
      evaluateFight: function(character){
        return `Your opponent takes ${this.Attack - character.Defense} damage and you receive ${character.Attack - this.Defense} damage.`
      },
      weapon: function(){
        console.log(`${this.Name} is a ${this.Race} from ${this.Origin} who uses a ${this.Weapon}.`)
      }
    }
  }

  const characters = [
    createACharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6), 
    createACharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createACharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createACharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createACharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];
characters.push(createACharacter('Arwen', 'ar', 'Elf', 'Undomiel', 5, 8));

// characters.find(function(x){
//   return x['Nickname'] === 'aragorn';
// }).describe();

let hobbitArr = characters.filter(function(x){
  return x.Race === 'Hobbit';
});

//console.log(attackArr);

let attackArr = characters.filter(function(x){
  return x.Attack > 5;
});
console.log(attackArr);

