
var cyberpunks = angular.module('cyberpunks', []);

cyberpunks.controller('InformationPanel', ['$scope', function($scope) {
	$scope.entity = {
		name: 'Plug Life',
		bots: 27,
		money: 2048,
		influence: 'noob',
		rank: 'dufus',
		img: 'cat1.jpeg',
		research: [
			{
				name: 'Malware',
				value: 13
			},
			{
				name: 'JavaScript',
				value: 40
			},
			{
				name: 'Mapping',
				value: 75
			}
		]
	}
}]);

cyberpunks.controller('Actions', ['$scope', function($scope) {
	$scope.actions = [
		{
			name: 'scan',
			style: 'success'
		},
		{
			name: 'attack',
			style: 'alert'
		},
		{
			name: 'research',
			style: 'disabled'
		}
	]
}]);

cyberpunks.controller('Neighbors', ['$scope', function($scope) {
	$scope.neighbors = [
		{
			name: 'Bootsie',
			type: 'dufus',
			img: 'cat2.jpeg'
		},
		{
			name: 'Katie',
			type: 'Fed',
			img: 'cat3.jpeg'
		},
		{
			name: 'Chili\'s',
			type: 'Corp',
			img: 'cat4.jpeg'
		}
	]
}]);

cyberpunks.controller('Events', ['$scope', function($scope) {
	$scope.events = [
		{
			name: 'Bootsie',
			img: 'cat2.jpeg',
			action: 'attacked you -2'
		},
		{
			name: 'Katie',
			img: 'cat3.jpeg',
			action: 'scanned you'
		},
		{
			name: 'You',
			img: 'cat4.jpeg',
			action: ' attacked Chili\'s'
		}
	]
}]);

$(document).foundation();
