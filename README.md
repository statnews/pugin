# pugin

jQuery p(l)ugin abstraction

![big ben](big-ben.png)

Pugin is a small plugin wrapper for and depending on jQuery to allow plugins to be written as classes with some default functionality.

`npm install statnews/pugin --save`

The `pugin` function takes a `pluginName` and `pluginClass` argument, the first being the name you want to call the function from on a jQuery object, i.e. `$('.foo').pluginName()`, and the class being a the plugin itself. 

This function then merges the properties of any object passed as an argument into any properties of a `_defaults` property existing on the `pluginClass`, resulting in a merged `options` object. It also creates a reference to the original DOM element, as well as a cached jQuery object referring to that element, as properties on an object (`element` and `$element`, respectively). Then, these are associated with the `$.data` function with that DOM element (if there is not already data associated with this plugin on that element) with the `pluginName` provided, and the value being the first instantiation of the `pluginClass` with these two objects passed as arguments. Given that two objects are passed, one with the `element` references and the other with the options, we can expect a default jQuery plugin that uses `pugin` to look like the following.

```javascript
import $ from 'jquery';
import pugin from 'pugin';

class MyPlugin {
  constructor(references, options) {
    // Here you can attach the options and el_refs to the class
    $.extend(this, references, options);
    
    // All of these props are now available on the class:
    this.element;
    this.$element;
    this.options.color;
    this.options.size;
  }
}

// These properties are provided as fallback if options aren't passed.
MyPlugin._defaults = {
  color: 'red',
  size: '20px'
}

pugin(`myPlugin`, MyPlugin);
```

Now, this plugin in usage:
```javascript
import $ from 'jquery';
import 'my-plugin'; // attaches to $ automatically

$('.foo').myPlugin({ color: 'blue' });
```

Development:

`npm install && npm start`

<sub>Icons made by [Freepik](http://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com) is licensed by [CC 3.0](http://creativecommons.org/licenses/by/3.0/)</sub>
