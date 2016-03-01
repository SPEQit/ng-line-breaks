ng-line-breaks
===================

[![Bower][bower-image]][bower-url] [![Build Status][ci-image]][ci-url]

Directive to replace line breaks with `<br>`s when rendering in an element. This is helpful when trying to render ng-model from a textarea within another element

install
-------

```
bower install ng-line-breaks
```

usage
-----

Make sure you include the module in your application config:

```
angular.module('myApp', [
  'lineBreaks',
  ...
]);
```

Set up your model
```
$scope.modelValue = "This is some text\nwith\n line\nbreaks.\n\nCool huh?";
```

Use the directive
```
<p ng-model="modelValue" line-breaks></p>
```

Text with `<br>`s is rendered
```
<p ng-model="modelValue" line-breaks>This is some text<br>with<br> line<br>breaks.<br><br>Cool huh?<br></p>
```

[bower-url]: https://github.com/SPEQit/ng-line-breaks
[bower-image]: https://img.shields.io/bower/v/ng-line-breaks.svg
[ci-url]: https://travis-ci.org/SPEQit/ng-line-breaks
[ci-image]: https://img.shields.io/travis/SPEQit/ng-line-breaks.svg
