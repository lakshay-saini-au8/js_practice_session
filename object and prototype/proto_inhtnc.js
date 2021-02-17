class Students {
  constructor(name, age, roll_no){
    this.name = name,
    this.age = age,
    this.roll_no = roll_no
  }
  // instance method
  // static method
  biodata(){
    console.log(`hello my Name is ${this.name}. I am ${this.age} years old. my roll no. is ${this.roll_no}`)
  }
}

let student1 = new Students("john wick", 37, 37);
student1.biodata();

let student2 = new Students("rowert dw jr", 45, 45);
student2.biodata();

// class Player extends Students{

// }

// let player1 = new Player("chris", 36, 36);
// player1.biodata();


class Player extends Students{
  constructor(name, age, roll_no, game){
    super(name, age, roll_no)
    this.game = game
  }
  play(){
    return `${super.biodata()} i do play ${this.game}`
  }
}

let player2 = new Player('messi', 40, 40, 'football')
console.log(player2.play())