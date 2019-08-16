import Component from '@glimmer/component';
import { readOnly } from '@ember/object/computed';

export default class ComponentAComponent extends Component {
  @readOnly('args.data')
  readOnlyArgsData

  @readOnly('args.foo.bar.length')
  numBars
}
