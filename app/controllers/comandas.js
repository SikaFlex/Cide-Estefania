import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ComandasController extends Controller {
  @tracked user = false;
  @service login;

  @service router;

  @action
  logOut(event) {
    this.login.logOut();
  }
}