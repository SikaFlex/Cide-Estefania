import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';

export default class EstudiantesController extends Controller {
  @service router;
  @service login;
  @service estudiantes;

  @action
  logOut(event) {
    this.login.logOut();
  }

  @action
  onSubmitForm(event){
    event.preventDefault();
    const studentForm = this.getStudentForm();
    const currentLocalStorage= JSON.parse(localStorage.getItem(Constants.STUDENTS))
    console.log(studentForm)

    //validar si esta
    currentLocalStorage.push(studentForm);
    localStorage.setItem(Constants.STUDENTS,JSON.stringify(currentLocalStorage));
  }

  getStudentForm(){
    
    const form = document.getElementById("Form-Usuarios");
    const userAccount = JSON.parse(localStorage.getItem(Constants.USER_CREDENTIALS)).user;
    const studentForm = {
      name: form.name.value,
      apellidos: form.apellido.value,
      curso: form.curso.value,
      direccion: form.direccion.value,
      fechaNacimiento: form.fecha_nacimiento.value,
      familiaNumerosa: form.familiaNum.checked,
      dni: form.dni.value,
      telefono: form.telefono.value,
      dniContacto:form.dni_contacto.value,
      email: form.email.value,
      telContacto: form.tel_contacto.value,
      userAccount: userAccount,
      status: Constants.status.P
    }
    return studentForm
  }



 
}
