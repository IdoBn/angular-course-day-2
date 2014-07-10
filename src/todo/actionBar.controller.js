(function(window, angular) {

  function ActionBar(scope) {
    this.count = 0;

    this.clearLogs = function() {
      scope.$emit('event:logs:clear');
    };

    this.toggleTasks = function() {
      scope.$emit('event:task:toggle', scope.bar.count);
      scope.bar.count++;
    };
  }

  angular.module('app.todo')
    .controller('ActionBarCtrl', ['$scope', ActionBar]);

}(window, angular));