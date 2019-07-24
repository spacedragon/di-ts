import { Inject, Named } from "../src/inject_decorator";
import { BarFoo } from "./barfoo";

@Named('foo')
@Inject()
export class Foo implements FooInterface {
  constructor(readonly barfoo: BarFoo) {
    console.log('created foo');
  }
  doFooStuff() {
    console.log('foo');
    this.barfoo.doStuff();
  }
}

export interface FooInterface {
    doFooStuff(): void;
}