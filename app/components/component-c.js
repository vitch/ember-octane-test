import Component from '@glimmer/component';
import { get } from '@ember/object';

export default class ComponentBComponent extends Component {
  get data() {
    return this.args.data;
  }

  get numBars() {
    return get(this.args, 'foo.bar.length');
  }

  get fooFizzBuzz() {
    return get(this.args, 'foo.fizz.buzz');
  }
}
