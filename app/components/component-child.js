import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ComponentChildComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    console.log('2. ComponentChildComponent, constructor', JSON.stringify(args));
  }

  @action onInsert(element, [configuration, trackedConfiguration]) {
    console.log('4. ComponentChildComponent, did-insert', { element, configuration, trackedConfiguration });
  }
}
