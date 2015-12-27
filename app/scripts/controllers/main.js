'use strict';

/**
 * @ngdoc function
 * @name bugmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bugmanApp
 */
angular.module('bugmanApp')
  .controller('MainCtrl', function($uibModal) {

    this.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/bugs.html',
        controller: 'BugsCtrl',
        controllerAs: 'vm',
        resolve: {
          items: function() {
            return '';
          }
        }
      });
    };

   this.limite = 30;

   this.listTypeRadio = 'B';
   this.bugs = [{id:'1',
                descricao:'erro ao abrir vaga no agillis erro ao abrir vaga no agillis erro ao abrir vaga no agillis',
                data:'2015-12-27',
                url:'agillis.allis.com.br/agillis/painelempresaallis/contratarcandidato/4565645',
                exemplo:'id456456 id45646 id6456',
                status: 'pendente',
                user: 'willians.oliveria'},
                {id:'2',
                             descricao:'erro ao abrir vaga no agillis erro ao abrir vaga no agillis erro ao abrir vaga no agillis',
                             data:'2015-12-27',
                             url:'agillis.allis.com.br/agillis/painelempresaallis/',
                             exemplo:'id456456 id45646 id6456',
                             status: 'pendente',
                             user: 'willians.oliveria'}];

  });
