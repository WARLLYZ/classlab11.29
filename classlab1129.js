
// 1. cars
class Car {
    constructor (serialNumber,maker,price,color,doors) {
      this.serialNumber = serialNumber;
      this.maker = maker;
      this.price = price;
      this.color = color;
      this.doors = doors;
    }
    drive () {
      console.log("Vroom Vroom");
    }
    park () {
        console.log("the car is stopped and not running");
      }}

 const car1 = new Car('10001','Toyota',56138,'blue',4);
 const car2 = new Car('10002','Ford',5616,'white',4);
 const car3 = new Car('10003','BMW',10562,'grey',2);
 const car4 = new Car('10004','Lexus',123548,'black',4);
 const car5 = new Car('10005','Mercedes Benz',1561325,'purple',4);

 const myCarCollection=[car1,car2,car3,car4,car5];

 myCarCollection.map(car => {console.log(car.maker+ ":");
  car.drive();
  console.log("Serial Number:"+car.serialNumber);})

// 2. trucks
  class Truck {
    constructor (serialNumber,maker,price,color,doors = 2) {
      this.serialNumber = serialNumber;
      this.maker = maker;
      this.price = price;
      this.color = color;
      this.doors = doors;
    }
    drive () {
      console.log("the truck is on and running");
    }
    park () {
        console.log("the truck is off and in park");
      }
  }
  const truck1=new Truck('10006','Chevy',1235489,'white',2);
  const truck2=new Truck('10007','Dodge',600,'white',4);
  const truck3=new Truck('10008','Ford',101052,'black',2);
  const truck4=new Truck('10009','GMC',456218,'blue',4);
  const truck5=new Truck('10010','Tesla',5454813,'red',2);

  const myTruckCollection=[truck1,truck2,truck3,truck4,truck5];

console.log(myTruckCollection);

// 3.
  function compareCollections(){
    let carValue,truckValue;
    carValue = getAverage(myCarCollection);
    truckValue = getAverage(myTruckCollection);
    
    console.log("Car average price: "+carValue);
    console.log("Truck average price: "+truckValue);
    console.log(carValue>truckValue? "My car collections has a higher value" : "My truck collection has a higher value");}


  function getAverage(collection){
     return collection.reduce((acc,current) => acc + current.price , 0) /collection.length;
  }
  compareCollections();


// 4.
 class Person {
  constructor (name , age , gender , eyes = 2) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.eyes = eyes;}
   
  greet() {
      console.log("Hello, how are you?");
    }
}
const person1 = new Person("Daniel",20,"male",);
const person2 = new Person("Diane",21,"female",);

console.log(person1);
console.log(person2);

person1.greet();

//5
class Enemy extends Person{
  constructor (name , age , gender , eyes = 2, power ) {
    super (name , age , gender , eyes = 2, power)
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.eyes = eyes;
    this.power = power;
    }
    greet () {
      console.log("where is kakarot?");
    }
    angry () {
      console.log('I will defeat you kakarot');
    }
}

const newEnemyVegeta = new Enemy("Vegeta", 39, "male",2,90001)
console.log(newEnemyVegeta);

newEnemyVegeta.greet();
newEnemyVegeta.angry();

// 6.
 class Friend {
    constructor (name, counter) {
      this.name = name;
      this.friendCounter = counter
}}  
class Factory {
    constructor (name) {
      this.name = name;
      this.friends = [];
}
    addFriend (friendName) {
      const newFriend= new Friend(friendName,this.friends.length);
      this.friends.push(newFriend);
 }}
const jerry = new Factory("Jerry")
  jerry.addFriend("Charlie");
  jerry.addFriend("Jaime");
  jerry.addFriend("Daniel");  
  console.log(jerry);

  
// 7.
class Comment {
  constructor(author, content, date, likes, commentIndex) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.likes = likes;
    this.commentIndex = commentIndex
}}
class Socialmediapost {
  constructor (author, content, date, likes) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.likes = likes;
    this.comments = [];
  }
  editContent (newContent) {
    this.content = newContent;
  }
  addComment ( author, content, date, likes) {
    const newComment = new Comment (author, content, date, likes, this.comments.length+1) ;
    this.comments.push (newComment) ;
  }
}
const post1 = new Socialmediapost("Vegeta", "LMK if anyone has seen Kakarot", '10/31/22', 400)
post1.addComment("Daniel", "I think at saw him at master roshi's", '10/31/22', 99);
post1.addComment("Jaime", "uh-oh here he goes again", '10/31/22', 999);

post1.editContent("Hello");

console.log(post1);  