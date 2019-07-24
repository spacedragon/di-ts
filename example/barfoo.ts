export class BarFoo {
  constructor(private readonly message: string) {
  }
  doStuff() {
    console.log('message from barfoo: ' + this.message) ;
  }
  
}