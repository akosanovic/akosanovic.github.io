// Generated by CoffeeScript 1.9.3
(function() {
  this.PageAnimation = (function() {
    function PageAnimation() {
      this.mainContainer = $('.main--content--wrapper');
      this.aboutUsPage = this.mainContainer.find('.aboutUs--page');
      this.animatedLineH = null;
      this.animatedLineV = null;
      this.lineAnimationTimeline = null;
    }

    PageAnimation.prototype.destroyAnimation = function() {
      this.animatedLineH = null;
      this.animatedLineV = null;
      this.lineAnimationTimeline.clear();
      this.lineAnimationTimeline.kill();
      return this.lineAnimationTimeline = null;
    };

    PageAnimation.prototype.lineAniamtion = function() {
      var horizontalLineDuration;
      this.animatedLineH = this.mainContainer.find('.animated--line--horizontal');
      this.animatedLineV = this.mainContainer.find('.animated--line--vertical');
      horizontalLineDuration = 0.5;
      this.lineAnimationTimeline = new TimelineLite({
        paused: true,
        onComplete: "ayoo"
      });
      this.lineAnimationTimeline.set(this.animatedLineH, {
        left: '100%',
        top: '50%',
        height: '3px',
        width: 0
      }).set(this.animatedLineV, {
        left: "100%",
        left: "60%"
      }).add("horizontalLine").fromTo(this.animatedLineH, 0.7, {
        width: 0
      }, {
        width: '30%',
        left: "50%",
        ease: Power1.easeOut
      }).add("verticalLine").fromTo(this.animatedLineV, 0.7, {
        left: "100%"
      }, {
        left: "50%",
        ease: Power1.easeOut
      }, "horizontalLine").fromTo(this.animatedLineV, 0.8, {
        height: 0
      }, {
        height: "60%"
      }, "horizontalLine+=0.2").to(this.animatedLineH, 0.3, {
        width: 0,
        left: "50%",
        ease: Power1.easeOut
      }, "verticalLine").set(this.animatedLineV, {
        left: "50%",
        height: '60%'
      });
      return this.lineAnimationTimeline;
    };

    return PageAnimation;

  })();

}).call(this);