import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Configuration {}

export default class ComponentParentComponent extends Component {
  configuration = new Configuration();
  @tracked trackedConfiguration = new Configuration();

  constructor(owner, args) {
    super(owner, args);

    console.log('1. ComponentParentComponent, constructor', JSON.stringify(args));
  }

  @action onInsert(element, [configuration, trackedConfiguration]) {
    console.log('3. ComponentParentComponent did-insert', { element, configuration, trackedConfiguration });
  }
}
