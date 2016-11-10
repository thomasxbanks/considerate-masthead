# Considerate Masthead

A jQuery plugin to turn an element into a considerate masthead. The header will scroll off page when scrolling down then slide into view when the user starts scrolling back up.

# Usage
1. Point your project at the JS file: `<script src="/path/to/folder/considerate-masthead.js"></script>`
1. Make sure you actually have a site header at the top of your page! `<header id="masthead">...</header>`
1. Init the plugin on the page header:
    - `$('body > header').considerateMasthead()` or `$('#masthead').considerateMasthead()`
    - Make sure your target element has got an `id`!
1. Scrolly-scroll around and watch it hidey/slidey :)

Have a look at the `index.html` for a demo.
