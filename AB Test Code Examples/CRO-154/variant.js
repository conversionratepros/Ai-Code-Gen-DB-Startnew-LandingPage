(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        /* all Pure helper functions */

        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
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

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }

        var newPartMob = `<div class="cro-t-clint">
    <div class="cro-t-clint-wrapper container">
        <div class="cro-t-clint-inner">
            <p class="cro-t-clint-text">
                <span>31,068</span>
                debt-free clients — and counting
            </p>
        </div>

    </div>
                        </div>`

        var newPartDesk = `<div class="cro-t-clint-desk">
    <div class="cro-t-clint-wrapper-desk">
        <div class="cro-t-clint-inner-desk">
            <p class="cro-t-clint-text-desk">
                <span>31,068</span>
                debt-free clients — and counting
            </p>
        </div>

    </div>
                            </div>`

        function updateTime(selector) {
            waitForElement(selector, function () {
                var textElement = document.querySelector(selector);
                var currentValue = 0;
                var endValue = 36649;
                var intervalTime = 30; // Time between updates in milliseconds
                var incrementValue = 1; // Initial increment value

                var formatNumber = (number) => {
                    return number.toLocaleString(); // Formats the number with commas
                };

                // Function to determine the increment value based on the current value
                var determineIncrement = (value) => {

                    if (value >= 10000) {
                        return 1000; // Increment by 100 if value is 10,000 or more
                    } else if (value >= 1000) {
                        return 100; // Increment by 10 if value is 1,000 or more
                    } else if (value >= 100) {
                        return 10; // Increment by 1 if value is 100 or more
                    }
                    return 1; // Default increment value
                };

                var updateText = () => {
                    if (currentValue <= endValue) {
                        textElement.textContent = formatNumber(currentValue);
                        incrementValue = determineIncrement(currentValue); // Update increment value dynamically
                        currentValue += incrementValue;
                    } else {
                        currentValue = endValue; // Ensure we don't exceed endValue
                        textElement.textContent = formatNumber(currentValue);
                        clearInterval(intervalId); // Stop the interval when done
                    }
                };

                // Use a different variable for the interval ID
                var intervalId = setInterval(updateText, intervalTime);

            });

        }

        /* Variation Init */
        function init() {
            addClass("body", "cro-t-108")

            waitForElement('section.cro-t-benefits', function () {
                if (!document.querySelector('.cro-t-clint')) {
                    insertHtml("section.cro-t-benefits", newPartMob, "beforebegin");
                }
            });

            waitForElement('section.container.relative.pb-0', function () {
                if (!document.querySelector('.cro-t-clint-desk')) {
                    insertHtml("section.container.relative.pb-0", newPartDesk, "afterbegin");
                }
            });

            waitForElement("section.text-white .container .mb-5.grid", function () {
                var parent = document.querySelector('.mb-5.grid').closest('section')
                if (parent) {
                    parent.classList.add('cro-t-benefits')
                }
            });

            updateTime('.cro-t-clint-text-desk span, .cro-t-clint-text span')
            updateTime('.cro-t-clint-text span')

        }

        /* Initialise variation */
        waitForElement('body', init);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();