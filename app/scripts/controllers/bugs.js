'use strict';

/**
 * @ngdoc function
 * @name bugmanApp.controller:BugsCtrl
 * @description
 * # BugsCtrl
 * Controller of the bugmanApp
 */
angular.module('bugmanApp')
  .controller('BugsCtrl', function($uibModalInstance) {

    this.bug = {descricao: 'teste',url:'agillis',exemplo:'seila'};

    this.save = function() {
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

  });
