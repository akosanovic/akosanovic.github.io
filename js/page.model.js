// Generated by CoffeeScript 1.9.3
(function() {
  this.Page = (function() {
    function Page(htmlElement, hasAnimation) {
      this.mainContainer = $('.main--content--wrapper');
      this.element = htmlElement;
      this.page = $(htmlElement);
      this.hasAnimation = hasAnimation;
      this.pageAnimation = null;
      this._setPageSize();
      $(window).on('resize', this._setPageSize.bind(this));
    }

    Page.prototype._getWindowDimensions = function() {
      this.windowW = $(window).width();
      return this.windowH = $(window).height();
    };

    Page.prototype._setPageSize = function() {
      this._getWindowDimensions();
      this.page.height(this.windowH);
      return this.page.width(this.windowW);
    };

    Page.prototype.top = function() {
      return this.element.getBoundingClientRect().top;
    };

    Page.prototype.bottom = function() {
      return this.element.getBoundingClientRect().bottom;
    };

    Page.prototype.left = function() {
      return this.element.getBoundingClientRect().left;
    };

    Page.prototype.right = function() {
      return this.element.getBoundingClientRect().right;
    };

    Page.prototype.isActive = function() {
      if (this.top() === 0 && this.left() === 0) {
        return true;
      } else {
        return false;
      }
    };

    Page.prototype.getPageName = function() {
      var name;
      name = this.page.data('page-name');
      return String(name);
    };

    Page.prototype.getWidth = function() {
      return this.page.width();
    };

    Page.prototype.getHeight = function() {
      return this.page.height();
    };

    Page.prototype.autoScrollToActivate = function() {
      var pageLeft, pageTop;
      pageTop = this.top();
      pageLeft = this.left();
      console.log("TOP ", pageTop);
      console.log("left", pageLeft);
      console.log("Main Container position ", this.mainContainer[0].getBoundingClientRect());
      this._destroyAnimation();
      if (pageTop > 0) {
        return TweenLite.to(this.mainContainer, 0.5, {
          top: -pageTop,
          ease: Power0.easeOut,
          onComplete: this._activateAnimation.bind(this)
        });
      } else if (pageTop < 0) {
        return TweenLite.to(this.mainContainer, 0.5, {
          top: 0,
          ease: Power0.easeOut,
          onComplete: this._activateAnimation.bind(this)
        });
      } else if (pageLeft > 0) {
        return TweenLite.to(this.mainContainer, 0.5, {
          left: -pageLeft,
          ease: Power0.easeOut,
          onComplete: this._activateAnimation.bind(this)
        });
      } else if (pageLeft < 0) {
        return TweenLite.to(this.mainContainer, 0.5, {
          left: 0,
          ease: Power0.easeOut,
          onComplete: this._activateAnimation.bind(this)
        });
      }
    };

    Page.prototype._activateAnimation = function() {
      var pa;
      if (this.hasAnimation) {
        this.pageAnimation = new PageAnimation();
        console.log("PAGE animation is " + this.pageAnimation);
        pa = this.pageAnimation.lineAniamtion();
        return pa.play();
      }
    };

    Page.prototype._destroyAnimation = function() {
      if (this.pageAnimation) {
        return this.pageAnimation.destroyAnimation();
      }
    };

    return Page;

  })();

}).call(this);