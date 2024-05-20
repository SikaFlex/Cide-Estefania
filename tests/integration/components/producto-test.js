import { module, test } from 'qunit';
import { setupRenderingTest } from 'cide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | producto', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Producto />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Producto>
        template block text
      </Producto>
    `);

    assert.dom().hasText('template block text');
  });
});