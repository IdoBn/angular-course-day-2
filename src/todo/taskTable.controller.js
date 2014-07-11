(function(window, angular) {

  function TaskTable(scope, filter) {
    self = this;

    this.tasks = [
      {title: 'first', desc: 'the very first task', complete: false},
      {title: 'second', desc: 'the very second task', complete: true},
      {title: 'third', desc: 'the very third task', complete: false}
    ];

    this.showTasks = this.tasks;

    scope.$on('event:task:save', function(event, data) {
      self.tasks.push({
        title: data.title,
        desc: data.desc,
        complete: false
      });

      self.showTasks.push({
        title: data.title,
        desc: data.desc,
        complete: false
      });
    });

    scope.$on('event:task:toggled', function(event, data) {
      if (data % 2 != true) {
        scope.table.showTasks = filter('filter')(scope.table.tasks, {complete: false});
      } else {
        scope.table.showTasks = scope.table.tasks;
      }
    });

    this.removeTask = function(t) {
      var index = this.tasks.indexOf(t)
      this.tasks.splice(index, 1);
      scope.$emit('event:task:delete', t);
    };

    this.editTask = function(t) {
      scope.$emit('event:task:edit', t);
    };

    this.completeTask = function(t) {
      t.complete = !t.complete;
      scope.$emit('event:task:complete', t);
    };
  }

  angular.module('app.todo')
    .controller('taskTableCtrl', ['$scope', '$filter', TaskTable])

}(window, angular)) 