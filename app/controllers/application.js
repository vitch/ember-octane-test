import Controller from '@ember/controller';
import Ember from 'ember';
import EmberObject from '@ember/object';
import { action, computed, set } from '@ember/object';

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
   * It's not imporant that we have this but it does log an interesting message - it looks like the computed
   * property key tries to get `foo.length` rather than `foo.bar.length`
   */
  unknownProperty(key) {
    console.log(`Trying to access property '${key}' on Foo instance`);
  }
}

class Foo2 extends EmberObject {
  @computed
  get bar() {
    return [];
  };

  @computed
  get fizz() {
    return 'buzz';
  }

}

export default class ApplicationController extends Controller {
  data = 0;
  foo = Foo.create();
  foo2 = Foo2.create();

  libraries = Ember.libraries._registry;

  @computed
  get foo3() {
    return Foo2.create();
  }

  @action
  changeData() {
    set(this.foo, 'fizz', `${this.foo.fizz} fizz`);
    this.foo.bar.addObject(this.data);

    set(this.foo2, 'fizz', `${this.foo2.fizz} fizz`);
    this.foo2.bar.addObject(this.data);

    set(this.foo3, 'fizz', `${this.foo3.fizz} fizz`);
    this.foo3.bar.addObject(this.data);

    set(this, 'data', Math.random());
  }
}
