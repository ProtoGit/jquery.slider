/**
 * https://github.com/ProtoGit/jquery.slider
 */
(function($) {
    $.fn.slider = function(options) {

        if (!options) {
            options = {};
        }

        var duration = options.duration || 200;
        var startPosition = options.startPosition || 0;
        var groupTogether = options.groupTogether || false;

        function Slider(container) {
            this.container = container;
            this.init();
        }

        Slider.prototype.init = function() {
            this.slides = this.container.find('.slides');
            this.slideWidth = parseInt(this.slides.first().children().first().css('width'));
            this.slideCount = parseInt(this.slides.first().children().length);
            this.animating = false;
            this.maxPosition = this.calculateMaxPosition();
            if (startPosition > 0) {
                this.animate(startPosition);
            } else {
                this.position = 0;
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
                var leftValue = (position * this.slideWidth) * -1;
                this.position = position;
                this.animating = true;
                this.slides.stop().animate({left: leftValue}, duration, function() {
                    self.animating = false;
                });
            }
        }

        Slider.prototype.calculateMaxPosition = function() {
            var width = parseInt(this.container.css('width'));
            return parseInt(this.slideCount - (width / this.slideWidth));
        }

        function buildSlider(container) {
            var slider = new Slider(container);
            container.find('.slide-left').on('click', function() {
                slider.left();
            });
            container.find('.slide-right').on('click', function() {
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