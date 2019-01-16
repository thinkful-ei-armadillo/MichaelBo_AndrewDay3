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

  console.log(validateKeys(objectA, expectedKeys));

  //Part 2