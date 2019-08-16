import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class ApplicationController extends Controller {
  data = 0;

  @action
  changeData() {
    set(this, 'data', Math.random());
  }
}
