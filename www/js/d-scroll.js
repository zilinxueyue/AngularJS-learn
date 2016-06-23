'use strict';

/**Creates a module named iScrollModule and assigning it to a variable*/
var myScrollModule = angular.module('myScrollModule',[]);

/**Creates a directive called 'iScroll' */
myScrollModule.directive('smoothscroll', function($log,$rootElement,$window){
	return {
		restirct : 'A',
		link : function(scope, element, attr){
			var minusHeight = 136;
			var resultHeight = $window.screen.availHeight - minusHeight;
			var scrollDimentions = attr.smoothscroll.split(',');
			if(scrollDimentions.length > 1){
				element.parent().css({'height':scrollDimentions[1]+'px'});
				element.css({'height':(scrollDimentions[1]*2)+'px'});
			}else{
				element.parent().css({'height':resultHeight+'px'});
				element.css({'height':(resultHeight*2)+'px'});
			}
			new iScroll(scrollDimentions[0]);
		}
	};
	
});