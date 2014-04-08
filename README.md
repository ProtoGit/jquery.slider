# Simple jQuery Slider Plug-in

## Usage

### Options

- **duration** Duration in milliseconds of transition between slides
- **startPosition** First (0 indexed) slide to show
- **groupTogether** Groups sliders matching the selector together, so left/right controls are shared

### Sample mark-up

    <div class="slider customiser-class-name">
        <div class="slides-wraper">
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

    $('.slider').slider({
        duration: 200,
        startPosition: 2
    });


### Sample CSS

    .slides-wrapper {
        overflow: hidden;
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