# utip

Unobstrusive tooltips jQuery plugin.

## Requirements

utip has no other requirements than jQuery.

## Installation

Include utip's CSS and jQuery plugin.

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

## Usage

```javascript
$(function(){
  $('a[data-utip]').utip();
});
```

**Note:** utip binds its event to the selector rather than the elements themselves, making it possible to dynamically add or remove utip'ed elements.

## License

This software is licensed under the MIT licensed.