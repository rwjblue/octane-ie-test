import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('It renders with a label', async function(assert) {
    assert.expect(1);
    this.set('onClick', () => { });

    await render(hbs`
      <Checkbox @onClick={{action this.onClick}}>
        What is this?
      </Checkbox>
    `);

    assert.strictEqual(find('.checkbox label').textContent.trim(), 'What is this?');
  });
});
