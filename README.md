# Simple jQuery Slider Plug-in

## Usage

### Options

- **duration** Duration (in ms) of transition between slides. Default is 200ms.
- **automatic** Enable/Disable automatic scrolling. Default is true. 
- **delay** Delay (in ms) between automatically proceeding to next slide. Default is 4000ms.
- **startPosition** First (0 indexed) slide to show. Default is 0.
- **groupTogether** Groups sliders matching the selector together, so left/right controls are shared. Default is false.
- **onTransition** Can pass a callback to be called after each transition.
- **useInsideWrapper** Use a .wrapper class inside the main container for the width. Useful on fixed width sliders with a full width container.


### Return value

A single ``Slider`` instance is returned if the ``groupTogether`` option is false. If true then an array of instances are returned, one for each element in the jQuery collection.


### Sample mark-up

    <div class="slider">
        <div class="slides-wrapper">
            <ul class="slides">
                <li><img src="/1.jpg" alt="" /></li>
                <li><img src="/2.jpg" alt="" /></li>
                <li><img src="/3.jpg" alt="" /></li>
            </ul>
        </div>
        <span class="slide-left">&lt;</span>
        <span class="slide-right">&gt;</span>
    </div>


### Sample JS

    var slider = $('.slider').slider({
        duration: 200,
        delay: 4000,
        startPosition: 2,
        onTransition: function(position) {
            console.log('New position is ' + position);
        }
    });


### Sample CSS

    .slider {
        position: relative;
    }

    .slides-wrapper {
        overflow: hidden;
        position: relative;
    }

    .slides {
        list-style: none;
        white-space: nowrap;
        position: relative;
        left: 0;
    }

    .slides li {
        display: inline-block;
        margin-right: -3px; /* fixes inline-block whitespace issue */
    }

    .slides li * {
        white-space: normal;
    }

    .slide-left,
    .slide-right {
        background: url('/images/arrows.png') no-repeat;
        cursor: pointer;
        position: absolute;
        top: 50%;
        margin-top: -36px;
        text-indent: -9999px;
        width: 40px;
        height: 72px;
        -webkit-user-select: none;
         -khtml-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
    }

    .slide-left {
        background-position: top left;
        left: -60px;
    }

    .slide-right {
        background-position: top right;
        right: -60px;
    }

    .slide-left:active {
        margin-top: -35px;
        left: -59px;
    }

    .slide-right:active {
        margin-top: -35px;
        right: -61px;
    }

    .slide-left:hover,
    .slide-right:hover {
        background-image: url('/images/arrows-highlighted.png');
    }

### RequireJS

This plug-in is AMD-compatible, you only need to stick it in your modules directory and reference it as normal:

    define(['jquery', 'libs/jquery.slider'], function($) {
        // ...
    });
