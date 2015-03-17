
var UP = UP || {};

$(function () {
   function RegistrationVModel(model) {
      var self = this;

      self.userName = ko.observable(model.userName || '');
      self.firstName = ko.observable(model.firstName || '');
      self.lastName = ko.observable(model.lastName || '');
      self.email = ko.observable(model.email || '');
      self.password = ko.observable(model.password || '');
      self.repeatPassword = ko.observable(model.repeatPassword || '');
   }


   UP.registration = function () {
      var _registration = ko.observable();

      var doregistration = function () {
         //console.log(ko.toJSON(_registration));
         toastr.success(ko.toJSON(_registration));

         //ajax call
      }

      var init = function () {
         var jsonData = { userName: 'dewebeloper', firstName: 'Djordje', lastName: 'Cvetkovic', email: 'dewebeloper@gmail.com' };
         var R = new RegistrationVModel(jsonData);

         _registration(R);

         var element = $('#registration-form')[0];
         //ko.cleanNode(element);
         ko.applyBindings(UP.registration, element);
      }


      return {
         init: init,
         _registration: _registration,
         doregistration: doregistration
      }
   }();

   UP.registration.init();
});
