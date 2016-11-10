;
(function($, window, document, undefined) {
    'use strict'

    let pluginName = 'considerateMasthead',
        defaults = {

        }

    function Plugin(element, options) {
        this.element = element

        this.options = $.extend({}, defaults, options)

        this._defaults = defaults
        this._name = pluginName

        this.init()
    }

    Plugin.prototype.init = function() {
        // Log for debug
        //console.log(this)
        // Define the element
        let masthead = this.element
        // Apply the correct padding to the page to prevent stuff disappearing under the masthead
        $('html').css('padding-top', masthead.clientHeight)
        // Add the stylesheet to the <head>
        $('head').append("<style>[id='" + masthead.id + "'] {position: fixed; top: 0; right: 0; left: 0; transition: transform ease-in 200ms;}[id='" + masthead.id + "'].slide-away{transform: translate3d(0, -100%, 0); -webkit-transform: translate3d(0, -100%, 0);}</style>")

        var currentScroll = 0;
        jQuery(window).scroll(function(event) {
            // Directional scroll
            var nextScroll = jQuery(this).scrollTop()
            if (nextScroll > currentScroll) {
                // When the user scrolls down, hide the masthead
                $(masthead).addClass('slide-away')
            } else {
              // When the user scrolls up, show the masthead
                $(masthead).removeClass('slide-away')
            }

            currentScroll = nextScroll; //Updates current scroll position

        })

    }


    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options))
            }
        })
    }


}(jQuery, window, document))
