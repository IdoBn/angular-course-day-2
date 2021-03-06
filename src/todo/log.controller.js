(function(window, angular) {

  function Log(scope, filter) {
    this.logs = [
      '22/6/14 12:00 - new task added',
      '23/6/14 12:05 - task completed',
      '24/6/14 13:05 - task removed',
      '28/6/14 13:05 - task removed'
    ];

    scope.$on('event:task:save', function(event, data) {
      scope.log.logs.push(filter('date')((new Date), 'MM/dd/yy h:mm') + ' new task added');
    });

    scope.$on('event:task:updated', function(event, data) {
      scope.log.logs.push(filter('date')((new Date), 'MM/dd/yy h:mm') + ' task updated');
    });

    scope.$on('event:task:deleted', function(event, data) {
      scope.log.logs.push(filter('date')((new Date), 'MM/dd/yy h:mm') + ' task removed');
    });

    scope.$on('event:task:completed', function(event, data) {
      var c = data.complete == true ? 'completed' : 'uncompleted';
      scope.log.logs.push(filter('date')((new Date), 'MM/dd/yy h:mm') + ' task ' + c);
    });

    scope.$on('event:logs:cleared', function(event, data) {
      scope.log.logs = [];
    });
  }

  angular.module('app.todo')
    .controller('logCtrl', ['$scope', '$filter', Log])

}(window, angular))