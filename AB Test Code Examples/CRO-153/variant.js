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
      function addClass(el, cls) {
        var el = document.querySelector(el);
        if (el) {
          el.classList.add(cls);
        }
        }
        function insertHtml(selector, content, position) {
            var el = document.querySelector(selector);
            if (!position) {
              position = "afterend";
            }
            if (el && content) {
              el.insertAdjacentHTML(position, content);
            }
        }
  
      var helper = _$();
      var croAddText =''+ 
    '  <div class="cro-addText">'+ 
    '      <div class="cro-addText-wrapper">'+ 
    '          <div class="cro-addText-header">'+ 
    '              <h2 class="cro-addText-headingText">Get debt-free with<span class="cro-addText-headingText-span"> these simple steps</span></h2>'+ 
    '          </div>'+ 
    '          <div class="cro-addText-para">'+ 
    '              <div class="cro-addText-paraText">Our process is designed to simplify your life, save you money and relieve your stress. This short video walks you through the process step by step. Complete the form on this page to get started.'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <div class="cro-addText-headerImg">'+ 
    '              <img src="https://start-new.debtbusters.co.za/img/NEAzK8p99K-1280.webp" alt="" class="cro-addText-headerImg-img">'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';
    var croTopForm =''+ 
    '  <div class="cro-form-top">'+ 
    '      <div class="cro-form-top-wrapper">'+ 
    '          <picture>'+ 
    '              <source type="image/webp" srcset="/img/acNKO8IuI8-500.webp 500w" sizes="100vw"><img class="hidden md:block mx-auto mb-5 w-32" alt="Laurel" loading="eager" decoding="sync" src="/img/acNKO8IuI8-500.jpeg" width="500" height="385">'+ 
    '          </picture>'+ 
    '          <h2 class="mt-0 mb-3 text-xl">YES! I want to start my free, private, Debt-Free Plan now.</h2>'+ 
    '      </div>'+ 
    '  </div>';
  
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
          videoId: "XwDXXzXJQ88",
          playerVars: {
            playsinline: 1,
            autoplay: 1,
            rel: 0,
          },
        });
      }
  
    function init() {
        addClass("body","Recipe-test-2")
        document.body.classList.add("CRO-testimonial-video");
        // helper.waitForElement(
        //   "section.pt-5.pb-0 > div",
        //   function () {
        //     setTimeout(function () {
        //       var org_html = document.querySelector("section.pt-5.pb-0").innerHTML;
        //       var new_html = "<div id='cro_Inner'>" + org_html + "</div>";
        //       document.querySelector("section.pt-5.pb-0").innerHTML = new_html;
        //     }, 1000);
        //   },
        //   50,
        //   25000
        // );
  
        helper.waitForElement(
          "section.pt-5.pb-0",
          function () {
            // https://crpimagebucket.s3.af-south-1.amazonaws.com/play+button.png
            document
              .querySelector("section.pt-5.pb-0")
              .insertAdjacentHTML(
                "beforebegin",
                '<div class="croNewTextSection"><div class="croNewSection"><div class="croLoader"><img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/loading-symbol.webp"></div><div class="croOverlay"></div><img class="croImg" src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/pizza.jpg"><img class="croPlay" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/play+button.png"><a href="#callback-form" class="inline-block ml-auto mb-16 md:hidden btn xs bg-orange-new">Get started</a><div class="croVideo" id="cVideo"></div></div></div>'
              );
          },
          50,
          25000
        );
        
  
        if (window.innerWidth < 1024) {
          helper.waitForElement(
            "#callback-form",
            function () {
              document.querySelector("#callback-form").insertAdjacentElement("beforebegin", document.querySelector(".croNewTextSection"));
            },
            50,
            25000
          );
        }
        helper.waitForElement(
            ".croNewTextSection",
            function () {
              if (!document.querySelector(".cro-addText")) {
                  insertHtml(".croNewTextSection", croAddText, "afterbegin");
              }
            },
            50,
            25000
        );
        helper.waitForElement(
            ".hubspot-form.inline-form-fields form",
            function () {
              if (!document.querySelector(".cro-form-top")) {
                  insertHtml(".hubspot-form.inline-form-fields form", croTopForm, "beforebegin");
              }
            },
            50,
            25000
        );
        // 
        helper.waitForElement(
            ".py-5",
            function () {
             if(document.querySelector(".landing")){
                document.querySelector(".landing").insertAdjacentElement('afterend',document.querySelector(".py-5"))
             }
            },
            50,
            25000
        );
        helper.waitForElement(
            ".omni-form.inline-form-fields #main-form",
            function () {
              if (!document.querySelector(".cro-form-top")) {
                  insertHtml(".omni-form.inline-form-fields #main-form", croTopForm, "beforebegin");
                  console.log("working me")
              }
            },
            50,
            25000
        );
        helper.waitForElement(
            ".button #Online",
            function () {
                var submitButton = document.querySelector('.button #Online');
                if (submitButton) {
                  submitButton.value = 'Submit';
                }
            },
            50,
            25000
        );
    }
    var newhtmlString =''+ 
    '  <div class="relative py-0 z-50 cro-t-heading">'+ 
    '      <picture class="absolute right-0">'+ 
    '          <source type="image/webp" srcset="/img/G4t6AhHjgs-640.webp 640w, /img/G4t6AhHjgs-768.webp 768w, /img/G4t6AhHjgs-1024.webp 1024w, /img/G4t6AhHjgs-1280.webp 1280w, /img/G4t6AhHjgs-1536.webp 1536w, /img/G4t6AhHjgs-1800.webp 1800w" sizes="100vw">'+ 
    '          <source type="image/jpeg" srcset="/img/G4t6AhHjgs-640.jpeg 640w, /img/G4t6AhHjgs-768.jpeg 768w, /img/G4t6AhHjgs-1024.jpeg 1024w, /img/G4t6AhHjgs-1280.jpeg 1280w, /img/G4t6AhHjgs-1536.jpeg 1536w, /img/G4t6AhHjgs-1800.jpeg 1800w" sizes="100vw"><img class="h-32 xl:h-48 2xl:h-72 xl:h-80 object-contain object-right z-40" alt="DebtBusters logo" loading="eager" decoding="sync" src="/img/G4t6AhHjgs-640.jpeg" width="1800" height="1136"></picture>'+ 
    '      <div class="py-8 md:py-4 relative container">'+ 
    '          <a href="https://www.debtbusters.co.za/" class="inline-block" target="_blank">'+ 
    '              <picture>'+ 
    '                  <source type="image/webp" srcset="/img/7Hce1pNw80-640.webp 640w, /img/7Hce1pNw80-768.webp 768w, /img/7Hce1pNw80-1024.webp 1024w" sizes="100vw">'+ 
    '                  <source type="image/jpeg" srcset="/img/7Hce1pNw80-640.jpeg 640w, /img/7Hce1pNw80-768.jpeg 768w, /img/7Hce1pNw80-1024.jpeg 1024w" sizes="100vw"><img class="w-44" alt="DebtBusters logo" loading="eager" decoding="sync" src="/img/7Hce1pNw80-640.jpeg" width="1024" height="469"></picture>'+ 
    '          </a>'+ 
    '      </div>'+ 
    '  </div>';
    function init2() {
        var currentUrl = window.location.href;
        var targetUrl = "https://start-new.debtbusters.co.za/landing-pages/july-2021-admarula-lp1/";
      
        // Check if the current URL contains the target URL
        if (currentUrl.indexOf(targetUrl) != -1) {
            addClass("body","CRO-testimonial-video")
            var callbackFormDiv = document.getElementById('callback-form');
            if (callbackFormDiv.parentNode && !callbackFormDiv.parentNode.classList.contains('your-new-class')) {
                callbackFormDiv.parentNode.classList.add('cro-formSection');
            }
            helper.waitForElement(
                ".cro-formSection",
                function () {
                  // https://crpimagebucket.s3.af-south-1.amazonaws.com/play+button.png
                  document
                    .querySelector(".cro-formSection")
                    .insertAdjacentHTML(
                      "beforebegin",
                      '<div class="croNewTextSection"><div class="croNewSection"><div class="croLoader"><img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/loading-symbol.webp"></div><div class="croOverlay"></div><img class="croImg" src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/pizza.jpg"><img class="croPlay" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/play+button.png"><a href="#callback-form" class="inline-block ml-auto mb-16 md:hidden btn xs bg-orange-new">Get started</a><div class="croVideo" id="cVideo"></div></div></div>'
                    );
                },
                50,
                25000
            );
            if (window.innerWidth < 1024) {
                helper.waitForElement(
                  "#callback-form",
                  function () {
                    document.querySelector("#callback-form").insertAdjacentElement("beforebegin", document.querySelector(".croNewTextSection"));
                  },
                  50,
                  25000
                );
              }
      
              helper.waitForElement(
                  ".croNewTextSection",
                  function () {
                    if (!document.querySelector(".cro-addText")) {
                        insertHtml(".croNewTextSection", croAddText, "afterbegin");
                    }
                  },
                  50,
                  25000
              );
      
              // 
              helper.waitForElement(
                  ".py-5",
                  function () {
                   if(document.querySelector(".landing")){
                      document.querySelector(".landing").insertAdjacentElement('afterend',document.querySelector(".py-5"))
                   }
                  },
                  50,
                  25000
              );
            //   .py-5
            addClass('.py-5', 'container')
            addClass('body', 'cro-newChanges')
            if(!document.querySelector('.cro-t-heading')){
                document.querySelector('.landing').insertAdjacentHTML('afterbegin', newhtmlString)
            }
        }
    }
        
    
    addScript();
    helper.waitForElement(
        ".py-5",
        function () {
         init2();
        },
        50,
        25000
    );
    
    helper.waitForElement(
        "section.pt-5.pb-0",
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