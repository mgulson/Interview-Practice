class Hello {
  constructor(a){
    this.a = a
  }

  getHello(){
    console.log(this.a)
  }
}

let hello = new Hello('a')

console.log(hello.a)
hello.getHello()