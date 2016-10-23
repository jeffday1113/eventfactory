'use strict';

angular.
  module('eventList').
  component('eventList', {
    templateUrl: 'event-list/event-list.template.html',
    controller: function EventListController($http) {
      var self = this;
      $http.get('EventFactoryProblemData.json').then(function(response) {
        self.events = response.data;
      });
    }
  });
