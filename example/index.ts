import { Inject, Named } from "../src/inject_decorator";
import { Injector } from "../src/Injector";
import { Bar } from './bar';
import { BarFoo } from "./barfoo";
import { FooInterface, Foo } from "./foo";
 
 
@Inject()
class Foobar {
  constructor(@Named('foo') public foo: FooInterface, public bar: Bar) {
  }
}

 

Injector.provides(BarFoo, () => new BarFoo('hello'));

const foobar = Injector.resolve<Foobar>(Foobar);
foobar.bar.doBarStuff();
foobar.foo.doFooStuff();
foobar.bar.foo.doFooStuff();