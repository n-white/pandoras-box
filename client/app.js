angular.module('pandoraApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('questionState', {
			url: '/questionurl',
			templateUrl: 'question/question.html'
			// controller: 'QuestionController'
		})
});