# utip

Unobstrusive tooltips jQuery/Zepto plugin.

## Requirements

utip has no other requirements than jQuery/Zepto.

## Installation

Include utip's CSS and jQuery/Zepto plugin.

```html
<script type='text/javascript' src='jquery.utip.js'></script>
<link rel="stylesheet" href="utip.css" type="text/css" />
```

## Markup

Specify a `data-utip` attribute on any DOM element you'd want a tooltip on, set to the tooltip's content, e.g.

```html
<a href="#" data-utip="Hello, I'm a utip.">Tooltip</a>
```

You can also specify a `data-utip-gravity` on those elements to set the tooltip's direction, e.g.

```html
<a href="#" data-utip="Hello, I'm a righty tooltip." data-utip-gravity="e">Tooltip</a>
```

`data-utip-gravity` can be set to `nw | n | ne | e | se | s | sw | w`

If you want to be able to hover on the tooltip, add a `data-utip-hoverable` attribute to the element, e.g.

```html
<a href="#" data-utip="Hello, I'm a hoverable utip." data-utip-hoverable>Tooltip</a>
```

## Usage

```javascript
$(function(){
  $('a[data-utip]').utip();
});
```

**Note:** utip binds its event to `$(document)` rather than the elements themselves, making it possible to dynamically add or remove utip'ed elements that match the selector, or in this case, `$('a[data-utip]')`.

## License

This software is licensed under the MIT license.
