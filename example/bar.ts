import { Foo } from './foo';
import { Inject, Singleton } from "../src/inject_decorator";

@Singleton()
export class Bar {
  constructor(public foo: Foo) {
    console.log('created bar');
  }

  doBarStuff() {
    console.log('bar');
  }
}