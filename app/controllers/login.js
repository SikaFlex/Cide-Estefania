import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Constants from '../helpers/Constants';

export default class LoginController extends Controller {
  @tracked user = false;
  @service login;

  @service router;

  @action
  onHandleClick(event) {
    // event.preventDefault();
    const form = document.getElementById('loginForm');
    const credential = {
      user: form.user.value,
      password: form.password.value,
    };

    if (this.login.authUser(credential)) {
      const crendentialJSON = JSON.stringify(credential);
      localStorage.setItem(Constants.USER_CREDENTIALS, crendentialJSON);
      this.router.transitionTo('/');
    } else {
      window.alert(`las credenciales de ${credential.user} no son correctas`);
    }
  }
}
