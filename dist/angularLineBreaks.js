(function() {
  'use strict';
  angular.module('lineBreaks', []);

  angular.module('lineBreaks').directive('lineBreaks', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, ctrl) {
        return ctrl.$render = function() {
          var html;
          if (ctrl.$modelValue == null) {
            return;
          }
          html = ctrl.$modelValue.replace(/\n$/, '<br/>&nbsp;').replace(/\n/g, '<br/>');
          return element.html(html);
        };
      }
    };
  });

}).call(this);
