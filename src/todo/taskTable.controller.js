(function(window, angular) {

  function TaskTable(scope) {

    //todo: you forgot to add the var keyword! you created a global scope var it`s bad :(
    self = this;
    // console.log(this.table.showComplete);

    this.tasks = [
      {title: 'first', desc: 'the very first task', complete: false},
      {title: 'second', desc: 'the very second task', complete: true},
      {title: 'third', desc: 'the very third task', complete: false}
    ];


    scope.$on('event:task:save', function(event, data) {
      self.tasks.push({
        title: data.title,
        desc: data.desc,
        complete: false
      });
    });

    //todo: the show/hide is a "view" thing (it does not effect the model) deal with it in the HTML
    scope.$on('event:task:toggled', function(event, data) {
      if (data % 2 == 0) {
        scope.table.showComplete = { complete: false };
      } else {
        scope.table.showComplete = '';
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

    // todo: this function can be removed. the checkbox is binded to the task
    this.completeTask = function(t) {
      t.complete = !t.complete;
      scope.$emit('event:task:complete', t);
    };
  }

  angular.module('app.todo')
    .controller('taskTableCtrl', ['$scope', TaskTable])

}(window, angular)) 