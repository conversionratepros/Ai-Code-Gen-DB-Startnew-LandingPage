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
        live: function (selector, event, callback, context) {
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          // matches polyfill
          this &&
            this.Element &&
            (function (ElementPrototype) {
              ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function (selector) {
                  var node = this,
                    nodes = (node.parentNode || node.document).querySelectorAll(selector),
                    i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
                };
            })(Element.prototype);
          // live binding helper using matchesSelector
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        },
        waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
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

    function innerChildContent(selector, childNumber, content) {
      var el = document.querySelector(selector);
      if (el.hasChildNodes()) {
        el.childNodes[childNumber].textContent = content;
      }
    }

    function waitForYT(trigger) {
      var interval = setInterval(function () {
        if (window.YT && window.YT.loading) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 10000);
    }

    function addScript() {
      // Inject YouTube API script
      var tag = document.createElement("script");
      tag.src = "//www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    var croTestimonialVideo =
      "" +
      '  <div id="cro-testimonial-video" class="cro-testimonial-video-container">' +
      '      <div class="cro-testimonial-video-wrapper container">' +
      '          <div class="cro-testimonial-left">' +
      '              <h1 class="cro-testimonial-left-header">' +
      "                  <strong>You are not alone</strong>" +
      "                  <span>Watch how we have helped our clients</span>" +
      "              </h1>" +
      '              <p class="cro-testimonial-left-para cro-testimonial-para-desktop">Happy client Joshua shares his experience with DebtBusters - hear his story below. Start your own journey today by completing the call back form below.</p>' +
      "          </div>" +
      '          <div class="cro-testimonial-right">' +
      '              <div class="croNewSection">' +
      '                  <div class="croLoader">' +
      '                      <img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/loading-symbol.webp" />' +
      "                  </div>" +
      '                  <div class="croOverlay"></div>' +
      '                  <img class="croImg" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/placeholder-db.png" />' +
      '                  <img class="croPlay" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/play+button.png" />' +
      '                  <div class="croVideo" id="cVideo"></div>' +
      "              </div>" +
      "          </div>" +
      '              <p class="cro-testimonial-left-para cro-testimonial-para-mob">Happy client Joshua shares his experience with DebtBusters - hear his story below. Start your own journey today by completing the call back form below.</p>' +
      '              <a href="#" class="inline-block ml-auto mb-16 md:hidden btn xs bg-orange-new cro-get-started-link">Get started</a>' +
      "      </div>" +
      "  </div>";

    function scroll(destination, selector) {
      var elements = document.querySelector(selector);
      if (elements) {
        elements.addEventListener("click", function (e) {
          e.preventDefault();
          var destEl = document.querySelector(destination);
          var destOffsetTop = destEl.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: destOffsetTop, behavior: "smooth" });
        });
      }
    }

    //------------------------

    var helper = _$();

    /* Initialise variation */

    helper.live(".croPlay", "click", function () {
      document.querySelector(".croPlay").classList.add("croHide");
      document.querySelector(".croLoader").classList.add("croShow");
      setTimeout(function () {
        document.querySelector(".croLoader").classList.remove("croShow");
        document.querySelector(".croNewSection").classList.add("croVideoPlay");

        waitForYT(function () {
          onYouTubePlayerAPIReady();
        });
      }, 2000);
    });

    function onYouTubePlayerAPIReady() {
      player = new YT.Player("cVideo", {
        height: "390",
        width: "640",
        videoId: "xBOD8WMnIKg",
        playerVars: {
          playsinline: 1,
          autoplay: 1,
        },
      });
    }

    function init() {
      document.body.classList.add("cro-testimonial-video");
      // helper.waitForElement(
      //   ".pt-5.pb-0 > div",
      //   function () {
      //     setTimeout(function () {
      //       var org_html = document.querySelector(".pt-5.pb-0").innerHTML;
      //       var new_html = "<div id='cro_Inner'>" + org_html + "</div>";
      //       document.querySelector(".pt-5.pb-0").innerHTML = new_html;
      //     }, 1000);
      //   },
      //   50,
      //   25000
      // );

      helper.waitForElement(
        ".items-center.container",
        function () {
          // https://crpimagebucket.s3.af-south-1.amazonaws.com/play+button.png
          document.querySelector(".items-center.container").insertAdjacentHTML("beforebegin", croTestimonialVideo);
        },
        50,
        25000
      );

      // if (window.innerWidth < 1024) {
      //   helper.waitForElement(
      //     "#cro_Inner #callback-form",
      //     function () {
      //       document.querySelector("#cro_Inner #callback-form").insertAdjacentElement("beforebegin", document.querySelector(".croNewSection"));
      //     },
      //     50,
      //     25000
      //   );
      // }
      helper.waitForElement(
        "#callback-form",
        function () {
          scroll("#callback-form", ".cro-testimonial-video-wrapper a.cro-get-started-link");
        },
        50,
        25000
      );
    }

    helper.waitForElement(
      ".pt-5.pb-0",
      function () {
        addScript();
        init();
      },
      50,
      25000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();