import { module, test } from 'qunit';
import { setupRenderingTest } from 'cide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | inputform', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Inputform />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Inputform>
        template block text
      </Inputform>
    `);

    assert.dom().hasText('template block text');
  });
});
