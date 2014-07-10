(function(window, angular) {

  function Form(scope) {
    this.addTask = function(t) {
      if (t.complete == null) {
        scope.$emit('event:task:add', t);
      } else {
        scope.$emit('event:task:update', {});
      }
    };
  }

  angular.module('app.todo')
    .controller('formCtrl', ['$scope', Form])

}(window, angular))