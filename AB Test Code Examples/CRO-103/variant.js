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

    function insertHtml(selector, content, position) {
      var el = document.querySelector(selector);
      if (!position) {
        position = "afterend";
      }
      if (el && content) {
        el.insertAdjacentHTML(position, content);
      }
    }

    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.add(cls);
      }
    }

    var croServiceExplanation =
      '  <div id="cro55-service-explanation" class="cro-test56-container">' +
      '      <div class="cro-test56-wrapper container">' +
      '          <div class="cro-test56-top">' +
      '              <h1 class="cro-test56-top-header">4 Easy steps to getting you debt free</h1>' +
      "          </div>" +
      '          <div class="cro-test56-bottom">' +
      "              <!-- section for card 1 and 2  -->" +
      '              <div class="cro-test56-bottom-top">' +
      "                  <!-- card 1  -->" +
      '                  <div class="cro-test56-card cro-test56-card1">' +
      '                      <div class="cro-test56-card-top">' +
      '                          <div class="cro-test56-card-right">' +
      '                              <h2 class="cro-test56-card-number">1</h2>' +
      "                          </div>" +
      '                          <div class="cro-test56-card-left">' +
      '                              <h2 class="cro-test56-card-header">Your monthly debt payments are lower</h2>' +
      "                          </div>" +
      "                      </div>" +
      '                      <div class="cro-test56-card-bottom">' +
      '                          <p class="cro-test56-card-text">Through our great relationships and negotiations with the banks and creditors, we could lower your monthly repayments, making it more manageable and allowing you to afford your living expenses.</p>' +
      "                      </div>" +
      "                  </div>" +
      "  " +
      "                  <!-- arrow between 1 and 2  -->" +
      '                  <div class="cro-test56-card-arrow">' +
      '                      <img class="cro-test56-arrow cro-test56-arrow1" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/arrow+(2).png" alt="" />' +
      '                      <img class="cro-test56-line cro-test56-line1" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/Vector+1.svg" alt="" />' +
      "                  </div>" +
      "  " +
      "                  <!-- card 2  -->" +
      '                  <div class="cro-test56-card cro-test56-card2">' +
      '                      <div class="cro-test56-card-top">' +
      '                          <div class="cro-test56-card-right">' +
      '                              <h2 class="cro-test56-card-number">2</h2>' +
      "                          </div>" +
      '                          <div class="cro-test56-card-left">' +
      '                              <h2 class="cro-test56-card-header">Your assets are protected</h2>' +
      "                          </div>" +
      "                      </div>" +
      '                      <div class="cro-test56-card-bottom">' +
      '                          <p class="cro-test56-card-text">Our solution gives you legal protection. There are less risk of summonses and judgements. And your assets may not be repossessed.</p>' +
      "                      </div>" +
      "                  </div>" +
      "              </div>" +
      "              <!-- between section 1 and 2  -->" +
      '              <div class="cro-test56-bottom-middle">' +
      '                <div class="cro-test56-line-desktop">' +
      '                  <img class="cro-test56-arrow cro-test56-arrow2" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/arrow-right.png" alt="" />' +
      '                  <img class="cro-test56-line2" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/Vector+2.svg" alt="" />' +
      "                </div>" +
      "  " +
      '                <div class="cro-test56-card-arrow cro-test56-line-mobile">' +
      '                  <img class="cro-test56-arrow cro-test56-arrow2-mobile" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/arrow+(2).png" alt="" />' +
      '                  <img class="cro-test56-line cro-test56-line2-mobile" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/Vector+1.svg" alt="" />' +
      "                </div>" +
      "              </div>" +
      "  " +
      "              <!-- section for card 3 and 4  -->" +
      '              <div class="cro-test56-bottom-bottom">' +
      '                  <div class="cro-test56-card cro-test56-card3">' +
      '                      <div class="cro-test56-card-top">' +
      '                          <div class="cro-test56-card-right">' +
      '                              <h2 class="cro-test56-card-number">3</h2>' +
      "                          </div>" +
      '                          <div class="cro-test56-card-left">' +
      '                              <h2 class="cro-test56-card-header">There is only one consolidated monthly payment</h2>' +
      "                          </div>" +
      "                      </div>" +
      '                      <div class="cro-test56-card-bottom">' +
      '                          <p class="cro-test56-card-text">No more having to deal with multiple creditors and departments to arrange payment. You make one consolidated monthly payment, and we’ll get it sorted.</p>' +
      "                      </div>" +
      "                  </div>" +
      '                  <div class="cro-test56-card-arrow">' +
      '                      <img class="cro-test56-arrow cro-test56-arrow3" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/arrow+(2).png" alt="" />' +
      '                      <img class="cro-test56-line cro-test56-line3" src="https://crpimagebucket.s3.af-south-1.amazonaws.com/Vector+1.svg" alt="" />' +
      "                  </div>" +
      '                  <div class="cro-test56-card cro-test56-card4">' +
      '                      <div class="cro-test56-card-top">' +
      '                          <div class="cro-test56-card-right">' +
      '                              <h2 class="cro-test56-card-number">4</h2>' +
      "                          </div>" +
      '                          <div class="cro-test56-card-left">' +
      '                              <h2 class="cro-test56-card-header">Improve your credit score</h2>' +
      "                          </div>" +
      "                      </div>" +
      '                      <div class="cro-test56-card-bottom">' +
      '                          <p class="cro-test56-card-text">Our clients on average have a better and higher credit score when they stick to the programme and complete it successfully.</p>' +
      "                      </div>" +
      "                  </div>" +
      "              </div>" +
      "          </div>" +
      "      </div>" +
      "  </div>";

    var helper = _$();
    /* Variation Init */
    function init() {
      addClass("body", "recipe-test55");
      if (!document.querySelector("#cro55-service-explanation")) {
        insertHtml(".container.items-center", croServiceExplanation, "beforebegin");
      }
    }

    /* Initialise variation */
    helper.waitForElement(".container.items-center", init, 50, 50000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();