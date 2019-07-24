import { expect } from 'chai';
import {Injector} from "../src/Injector";
import {Inject} from "../src/inject_decorator";

// Fixtures
@Inject()
export class Foo {
}

@Inject()
export class Bar {
}

@Inject()
export class Foobar {
  constructor(public foo: Foo, public bar: Bar) {
  }
}

@Inject()
export class Baz {
  constructor(public foobar: Foobar) {
  }
}

describe('Injector', () => {
  it('should create simple instances', () => {
    let foo = Injector.resolve<Foo>(Foo);
    expect(foo).to.be.an.instanceof(Foo);
  });

  it('should create dependency injected instances', () => {
    let foobar = Injector.resolve<Foobar>(Foobar);
    expect(foobar.foo).to.be.an.instanceof(Foo);
    expect(foobar.bar).to.be.an.instanceof(Bar);
  });

  it('should create deep dependency injected instances', () => {
    let baz = Injector.resolve<Baz>(Baz);
    expect(baz.foobar).to.be.an.instanceof(Foobar);
    expect(baz.foobar.foo).to.be.an.instanceof(Foo);
    expect(baz.foobar.bar).to.be.an.instanceof(Bar);
  });
});
