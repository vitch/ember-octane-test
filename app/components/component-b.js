import Component from '@glimmer/component';

export default class ComponentBComponent extends Component {
  get data() {
    return this.args.data;
  }

  get numBars() {
    return this.args.foo.bar.length;
  }

  get fooFizzBuzz() {
    return this.args.foo.fizz.buzz;
  }
}
