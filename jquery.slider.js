/**
 * https://github.com/ProtoGit/jquery.slider
 */
(function($) {
    $.fn.slider = function(options) {

        if (!options) {
            options = {};
        }

        var duration = options.duration || 200;
        var delay = options.delay || 4000;
        var startPosition = options.startPosition || 0;
        var groupTogether = options.groupTogether || false;
        var onTransition = options.onTransition || null;
        var useInsideWrapper = options.useInsideWrapper || false;
        var automatic = (typeof options.automatic === 'undefined')
            ? true
            : options.automatic;

        function Slider(container) {
            this.container = container;
            this.init();
        }

        Slider.prototype.init = function() {
            this.slides = this.container.find('.slides');
            this.slideCount = parseInt(this.slides.first().children().length);
            this.animating = false;
            this.maxPosition = this.calculateMaxPosition();
            this.animate(startPosition);
            if (automatic) {
                this.startTimer();
            }
        }

        Slider.prototype.left = function() {
            if (this.position > 0) {
                this.animate(this.position - 1);
            } else {
                this.animate(this.maxPosition);
            }
        }

        Slider.prototype.right = function() {
            if (this.position < this.maxPosition) {
                this.animate(this.position + 1);
            } else {
                this.animate(0);
            }
        }

        Slider.prototype.animate = function(position) {
            if (!this.animating) {
                var self = this;
                var leftValue = (position * this.getSlideWidth()) * -1;
                this.position = position;
                this.animating = true;
                this.slides.stop().animate({left: leftValue}, duration, function() {
                    self.animating = false;
                    if (onTransition) {
                        onTransition(position);
                    }
                });
            }
        }

        Slider.prototype.getSlideWidth = function() {
            return parseInt(this.slides.first().children().first().css('width'));
        }

        Slider.prototype.calculateMaxPosition = function() {
            var width;
            if(this.container.children('.wrapper').length > 0 && useInsideWrapper) {
                width = parseInt(this.container.children('.wrapper').first().css('width'));
            } else {
                width = parseInt(this.container.css('width'));
            }

            return parseInt(this.slideCount - (width / this.getSlideWidth()));
        }

        Slider.prototype.startTimer = function() {
            var self = this;
            this.timer = setInterval(function() {
                self.right();
            }, delay);
        }

        Slider.prototype.stopTimer = function() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }

        function buildSlider(container) {
            var slider = new Slider(container);
            container.find('.slide-left').click(function() {
                slider.stopTimer();
                slider.left();
            });
            container.find('.slide-right').click(function() {
                slider.stopTimer();
                slider.right();
            });
        }

        if (groupTogether) {
            buildSlider($(this));
        } else {
            this.each(function() {
                buildSlider($(this));
            });
        }

    };
})(jQuery);