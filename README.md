## freeChars jQuery Plugin
Minimal characters counter for textarea/input elements. Also works as a polyfill for "maxlength" attribute.

### Usage

Inlcude jQuery (1.9 or newer), requestAnimationFrame Polyfill if you want to be backwards compatible, and `jquery.freeChars.js`.

```html
<script type="text/javascript" src="lib/rAF.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="src/jquery.freeChars.js"></script>
```

Then simply call `.freeChars()` to initiate the plugin:

```javascript
$('textarea').freeChars({
  update: $('span#textareaCount')
})
```

You could also have a custom handler to be called when the textarea value change, will recieve two arguments, the available characters to be used and the current maxlegth value.

```javascript
$('textarea').freeChars({
  onUpdate: function(available, maxlength){
    console.log('There are '+available+'characters left.')
    console.log('The textarea can only have '+maxlength+' characters.')
  }
})
```

### Options
* `maxLength` (Integer)(default: `140`) -- number of characters to count.
* `limit`:  (Boolean)(default: `true`) -- if it has to apply the limit, if false, negative values will be given to 'available' argument.
* `onUpdate`: (Function)(optional) -- Function to be called everytime the textarea changes the value.
* `update`: (jQuery element)(optional) -- The content of this element will be setted with the remaining characters.

### Full Example

```html
<textarea maxlength="30"></textarea>
<p>
  <span>Available:</span>
  <span id="count"></span>
</p>
<script type="text/javascript">
  var $count = $('#count')
  $('textarea').freeChars({ update: $count })
</script>
```

## Support or Contact
Developed by [@mjlescano](http://twitter.com/touteo). Issues and Pull Requests welcome :D

### MIT Licensed