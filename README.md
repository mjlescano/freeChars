## freeChars jQuery Plugin
Minimal characters counter for textarea/input elements. Also works as a polyfill for "maxlength" attribute.

### Usage

Inlcude the scripts:

```html
<!-- (optional) window.requestAnimationFrame Polyfill for good performance on old browsers. -->
<script type="text/javascript" src="lib/rAF.js"></script>
<!-- jQuery (1.9 or newer). -->
<script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
<!-- The plugin :D -->
<script type="text/javascript" src="src/jquery.freeChars.js"></script>
```

Then simply call `.freeChars()` and give it the element you wish to update:

```javascript
$('textarea').freeChars({
  update: $('#textareaCount')
})
```

You could also set a custom handler to be called when the textarea value changes. It will recieve two arguments, the available characters to be used and the current maxlegth value.

```javascript
$('textarea').freeChars({
  onUpdate: function(available, maxlength){
    console.log('There are '+available+' characters left.')
    console.log('The textarea can only have '+maxlength+' characters.')
  }
})
```

### Options
* `maxLength` (Integer)(default: `140`) -- Number of characters to count.
* `limit`:  (Boolean)(default: `true`) -- Apply maxlength property. If false, negative values will be given to 'available' argument.
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
  $('textarea').freeChars({ update: $('#count') })
</script>
```

## Support or Contact
Developed by [@mjlescano](http://twitter.com/touteo). Issues and Pull Requests welcome :D

### MIT Licensed
