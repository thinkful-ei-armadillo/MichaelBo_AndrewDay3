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

  //console.log(validateKeys(objectA, expectedKeys));

  //Part 2

  const loaf = {flour: 300, water: 210};

  //console.log(loaf.flour);
  //console.log(loaf.water);
  
  loaf.hydration = () => (loaf.water / loaf.flour) * 100; 
  

  //console.log(loaf.hydration());

  const objectExample = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5,
  }
function objectLoop (object){
  for (key in object) {
    console.log(key + " " + object[key]);
  }
}
//objectLoop(objectExample);

const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

//console.log(food.meals[3]);

const jobHunt = [
  {
    name: 'Andrew',
    job: 'NFL Player'
  }
  ,{
    name: 'Michael',
    job: 'NBA Player'
  }
  ,{
    name: 'Rich',
    job: 'Golfer'
  }
  ,{
    name: 'Jane',
    job: 'Founder'
  }
]

function rollCall(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name + ", " + arr[i].job);
  }
}

//rollCall(jobHunt);

function bossProperty(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i].job === 'Founder'){
      console.log(`${arr[i].job} ${arr[i].name} doesn't report to anybody.`);
    } else {
      console.log(`${arr[i].job} ${arr[i].name} reports to Founder.`);
    }
  }
}

//bossProperty(jobHunt);

const newCode = 'craft block argon meter bells brown croon droop';
const testWord = 'craft';
const cipher = {
  'a': 2,
  'b': 3,
  'c': 4,
  'd': 5,
}

function decode(words, obj) {
  let result = [];
  let newArray = words.split(' ');
  for (let i = 0; i < newArray.length; i++) {
    if (obj.key === words.charAt(0)){
      result.push(newArray[i].charAt(i+1));
    } else {
      return ' ';
    }
    
  }

  
}
  console.log(decode(testWord, cipher));


  //function decode(words) {
   // let result = [];
   // let newArray = words.split(' ');
   // for (let i = 0; i < newArray.length; i++) {
   //   if (newArray[i].charAt(0) === 'a') {
    //    result.push(newArray[i].charAt(1));
   //   } else if (newArray[i].charAt(0) === 'b') {
   //     result.push(newArray[i].charAt(2));
   //   } else if (newArray[i].charAt(0) === 'c') {
   //     result.push(newArray[i].charAt(3));
   //   } else if (newArray[i].charAt(0) === 'd') {
   //     result.push(newArray[i].charAt(4));
   //   } else {
  //      result.push(' ');
  //    }
  //  }
  //  return result.join('');
  //}

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
  //console.log(decode('craft block argon meter bells brown croon droop'));