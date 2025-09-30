(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper liberary */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        live: function(selector, event, callback, context) {
        /****Helper Functions****/
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
        }
        // matches polyfill
        this && this.Element &&
          (function(ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function(selector) {
            var node = this,
              nodes = (
              node.parentNode || node.document
              ).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
            };
          })(Element.prototype);
        // live binding helper using matchesSelector
        function live(selector, event, callback, context) {
          addEvent(context || document, event, function(e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
          });
        }
        live(selector, event, callback, context);
        },
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });


   
    var helper = _$();
    
    function init(){
     document.querySelector('body').classList.add('CRO_Test-42_43_44')
     helper.waitForElement(
      "#callback-form",
      function () {
        document.querySelector('#callback-form').insertAdjacentHTML('afterbegin','<div class="croImage"> <img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/green-award.png"></div>')
      },
      50,
      25000
    );
    }

    helper.waitForElement(
      "body",
      function () {
        init();    
      },
      50,
      25000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();