import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { action, set } from '@ember/object';

class Foo extends EmberObject {
  /**
   * Note that setting this as @tracked would fix the problem for ComponentB *but* it's not an option in
   * the situation I am reproducing. This class represents a class in an addon which will be shared between
   * apps which are using Octane and apps which will still be using Ember 3.8 so we can't introduce Octane
   * specific code into the `Foo` class.
   */
  bar = [];

  /**
   * Note that setting this as @tracked would fix the problem for ComponentB *but* it's not an option in
   * the situation I am reproducing. This class represents a class in an addon which will be shared between
   * apps which are using Octane and apps which will still be using Ember 3.8 so we can't introduce Octane
   * specific code into the `Foo` class.
   */
  fizz = 'buzz';

  /**
   * It's not imporant that we have this but it does long an interesting message - it looks like the computed
   * property key tries to get `foo.length` rather than `foo.bar.length`
   */
  unknownProperty(key) {
    console.log(`Trying to access property '${key}' on Foo instance`);
  }
}

export default class ApplicationController extends Controller {
  data = 0;
  foo = Foo.create();

  @action
  changeData() {
    set(this.foo, 'fizz', `${this.foo.fizz} fizz`);
    this.foo.bar.addObject(this.data);
    set(this, 'data', Math.random());
  }
}
