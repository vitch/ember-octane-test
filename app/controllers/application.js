import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { action, set } from '@ember/object';

class Foo extends EmberObject {
  bar = []
}

export default class ApplicationController extends Controller {
  data = 0;
  foo = Foo.create();



  @action
  changeData() {
    this.foo.bar.addObject(this.data);
    set(this, 'data', Math.random());
  }
}
