var carousel = (function () {

    function _Carousel($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();
    }

    _Carousel.prototype.init = function () {
        this.$imgct = this.$ct.find('.img-ct');
        this.imgCount = this.$imgct.children().size();
        this.$items = this.$imgct.children();
        this.$imgct.width(this.$imgct.width() * this.imgCount);
        this.$pre = this.$ct.find('.pre');
        this.$next = this.$ct.find('.next');
        this.$bullet = this.$ct.find('.bullet');
        this.curIdx = 0;
        this.isAnimate = false;
        this.play(0);
        this.autoPlay();
    };
    _Carousel.prototype.play = function (idx) {
        var _this = this;
        if (this.isAnimate) return;
        this.isAnimate = true;
        this.$items.eq(this.curIdx).fadeOut(0);
        this.$items.eq(idx).fadeIn(0, function () {
            _this.isAnimate = false;
        });
        this.curIdx = idx;
        this.setBullet();
    };
    _Carousel.prototype.setBullet = function () {
        this.$bullet.children().removeClass('active')
            .eq(this.curIdx).addClass('active');
    };
    _Carousel.prototype.autoPlay = function () {
        var _this = this;
        this.clock = setInterval(function () {
            _this.playNext();
        }, 3000);
    };
    _Carousel.prototype.playNext = function () {
        this.play((this.curIdx + 1) % this.imgCount);
    };
    _Carousel.prototype.playPre = function () {
        this.play((this.imgCount + this.curIdx - 1) % this.imgCount);
    };
    _Carousel.prototype.bind = function () {
        var _this = this;
        this.$next.on('click', function () {
            _this.playNext();
            _this.stopAuto();
            _this.autoPlay();
        });
        this.$pre.on('click', function () {
            _this.playPre();
            _this.stopAuto();
            _this.autoPlay();
        });
        this.$bullet.find('li').on('click', function () {
            var idx = $(this).index();
            _this.play(idx);
        });
    };
    _Carousel.prototype.stopAuto = function () {
        clearInterval(this.clock);
    };


    return {
        init: function ($ct) {
            $ct.each(function (index, node) {
                new _Carousel($(node));
            })
        }
    }
})();

carousel.init($(".carousel"));