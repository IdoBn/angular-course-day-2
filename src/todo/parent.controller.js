(function(window, angular) {

  function Parent(scope) {

    scope.task = {};

    scope.$on('event:task:update', function(event, data) {
      scope.task = data;
      scope.$broadcast('event:task:updated', data);
    });

    scope.$on('event:task:add', function(event, data) {
      scope.task = {};
      scope.$broadcast('event:task:save', data);
    });

    scope.$on('event:task:edit', function(event, data) {
      scope.task = data;
    });

    scope.$on('event:task:delete', function(event, data) {
      scope.$broadcast('event:task:deleted', data);
    });

    scope.$on('event:task:complete', function(event, data) {
      scope.$broadcast('event:task:completed', data);
    });

    scope.$on('event:task:toggle', function(event, data) {
      scope.$broadcast('event:task:toggled', data);
    })

    scope.$on('event:logs:clear', function(event, data) {
      console.log('event logs cleared');
      scope.$broadcast('event:logs:cleared', data);
    })
  }

  angular.module('app.todo')
    .controller('parentCtrl', ['$scope', Parent])

}(window, angular))