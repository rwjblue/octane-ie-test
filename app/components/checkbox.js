import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class Checkbox extends Component {
  get isIndeterminate() {
    return this.args.isChecked === null;
  }

  constructor(owner, args) {
    super(owner, args);

    this.id = `${guidFor(this)}-checkbox`;
  }

  @action
  onClick(event) {
    event.stopPropagation();

    let { checked, value } = event.target;
    this.args.onClick(checked, value, event);
  }
}
