import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ComponentBComponent extends Component {
  get data() {
    return this.args.data;
  }

  get numBars() {
    return this.args.foo.bar.length;
  }

  get fooFizz() {
    return this.args.foo.fizz;
  }
}
