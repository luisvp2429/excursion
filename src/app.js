angular.module('forms', []);

angular.module('forms')
        .controller('FormController', FormController);

FormController.$inject = [];

function FormController(){
  this.user = {};
  this.isRequired = true;
  this.onSubmit = onSubmit;

  function onSubmit(){
    console.log('register');
    console.log(this.user);
    this.user = {};
  }
}
