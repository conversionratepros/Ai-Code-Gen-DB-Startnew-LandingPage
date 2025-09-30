(function () {
    try {
        var debug = 0;
        var variation_name = "cro-recipe-59";

        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector)) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        function live(selector, event, callback, context) {
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            this && this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches = ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found, el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        function insertHtml(selector, content, position = "afterend") {
            var el = document.querySelector(selector);
            if (el && content) el.insertAdjacentHTML(position, content);
        }

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) el.classList.add(cls);
        }

        var newParts = `<div class="cro-Recipe-59-Faq-new-part">
        <div class="cro-Recipe-59-Faq-new-part-wrapper">
            <div class="cro-Recipe-59-faq-container container">
                <div class="cro-Recipe-59-header-part">
                    <p class="cro-Recipe-59-header-part-text">Benefits and why DebtBusters</p>
                </div>
                <div class="cro-Recipe-59-faq-item-inner">
                    <div class="cro-Recipe-59-content content1 croShow">
                        <div class="cro-Recipe-59-faq-item" index=1>
                            <div class="cro-Recipe-59-faq-item-header">
                                <h2 class="cro-Recipe-59-question"><span>What is debt consolidation?</span><span
                                        class="toggle-symbol"></span>
                                </h2>
                            </div>

                        </div>
                        <div class="cro-Recipe-59-answer">
                            <p class="cro-Recipe-59-answer-text">Debt consolidation simplifies payments by combining
                                all
                                your debts into one monthly
                                payment.
                                <span>However, check the costs of a consolidation loan compared with a consolidation
                                    plan,
                                    like debt counselling. Unlike debt consolidation, debt counselling lowers your
                                    interest
                                    rates, saving you money each month.</span>
                                <span>Thousands of South Africans have found financial relief through this.</span>
                            </p>
                        </div>
                    </div>
                    <div class="cro-Recipe-59-content content2">
                        <div class="cro-Recipe-59-faq-item" index=2>
                            <div class="cro-Recipe-59-faq-item-header">
                                <h2 class="cro-Recipe-59-question"><span>What will happen when I complete the form on
                                        this
                                        page?</span><span class="toggle-symbol"></span></h2>
                            </div>
                        </div>
                        <div class="cro-Recipe-59-answer">
                            <p class="cro-Recipe-59-answer-text">Once you submit the form, one of our friendly
                                agents will call you (usually within
                                a minute or so) to gain an understanding of your current situation. They will work
                                with
                                you to do an assessment and to see what debt management solution would be best for
                                you to consider.
                            </p>
                        </div>
                    </div>
                    <div class="cro-Recipe-59-content content3">
                        <div class="cro-Recipe-59-faq-item" index=3>
                            <div class="cro-Recipe-59-faq-item-header">
                                <h2 class="cro-Recipe-59-question"><span>Can I trust DebtBusters with my personal
                                        information?</span><span class="toggle-symbol"></span></h2>
                            </div>
                        </div>
                        <div class="cro-Recipe-59-answer">
                            <p class="cro-Recipe-59-answer-text">Yes. We are a fully accredited and registered debt
                                counselling company (NCRDC2484)
                                and a member of the National Debt Counsellors' Association. We adhere to the
                                Protection of Personal Information Act and our website uses SSL security meaning
                                that you can trust us with your information.</p>
                        </div>
                    </div>
                    <div class="cro-Recipe-59-content content4">
                        <div class="cro-Recipe-59-faq-item" index=4>
                            <div class="cro-Recipe-59-faq-item-header">
                                <h2 class="cro-Recipe-59-question"><span>Does DebtBusters provide loans?</span><span
                                        class="toggle-symbol"></span></h2>
                            </div>
                        </div>
                        <div class="cro-Recipe-59-answer">
                            <p class="cro-Recipe-59-answer-text">No, consolidating your debt with us does not
                                involve
                                taking out a new loan.
                                <span>Many will look toward a consolidation loan, which involves taking out a
                                    single,
                                    new
                                    loan, at the highest interest rate, to pay off multiple smaller debts. For most
                                    consumers
                                    this comes at a very high-interest rate, 25% or more.</span>

                            </p>
                        </div>
                    </div>
                    <div class="cro-Recipe-59-content content5">
                        <div class="cro-Recipe-59-faq-item" index=5>
                            <div class="cro-Recipe-59-faq-item-header">
                                <h2 class="cro-Recipe-59-question"><span>Will my credit score be affected by signing up
                                        with
                                        DebtBusters?</span><span class="toggle-symbol"></span></h2>
                            </div>
                        </div>
                        <div class="cro-Recipe-59-answer">
                            <p class="cro-Recipe-59-answer-text">Yes, positively! We recently carried out a study
                                which
                                proved that
                                debt counselling actually delivers credit score benefits and increases.
                                <!-- <span>
                                    Over-indebted consumers who enquire about, sign up and successfully complete
                                    debt counselling will not only have lower monthly debt repayments through the debt
                                    restructuring plan but will emerge with significantly higher credit scores than
                                    their
                                    over-indebted peers who should have signed up but did not.
                                </span> -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        function init() {
            addClass("body", variation_name);

            waitForElement("section.cro-debt-3-reviews", function () {
                if (!document.querySelector(".cro-Recipe-59-Faq-new-part")) {
                    insertHtml("section.cro-debt-3-reviews", newParts, "afterend");
                }
            });

            // waitForElement('.cro-Recipe-59-faq-item[index="1"]', function () {
            //     document.querySelector('.cro-Recipe-59-faq-item[index="1"]').click();
            // });
        }

        // function toggleFaq(index) {
        //     var faqItems = document.querySelectorAll(".cro-Recipe-59-faq-item");
        //     var clickedFaqItem = faqItems[index - 1];
        //     var clickedAnswer = clickedFaqItem.querySelector(".cro-Recipe-59-answer");

        //     if (clickedFaqItem.classList.contains("clicked")) {
        //         // Already open, close it
        //         clickedFaqItem.classList.remove("clicked");
        //         clickedAnswer.style.maxHeight = "0px";
        //         currentOpen = null;
        //     } else {
        //         // Close all
        //         faqItems.forEach(function (item) {
        //             item.classList.remove("clicked");
        //             let answer = item.querySelector(".cro-Recipe-59-answer");
        //             if (answer) answer.style.maxHeight = "0px";
        //         });
        //         // Open clicked
        //         clickedFaqItem.classList.add("clicked");
        //         clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        //         currentOpen = clickedAnswer;
        //     }
        // }

        function even_handler() {
            live(".cro-Recipe-59-faq-item", "click", function () {
                var check = document.querySelector(".cro-Recipe-59-content.croShow");
                var parent = this.closest(".cro-Recipe-59-content");

                if (check && parent === check) {
                    check.classList.remove("croShow");
                    console.log("remove");
                } else {

                    if (check) {
                        check.classList.remove("croShow");
                        console.log("remove");
                    }
                    if (parent) {
                        parent.classList.add("croShow");
                        console.log("add");
                    }
                }
            });
        }
        if (!window.cro_22) {
            waitForElement('.relative.pt-5', init);
            even_handler();
            window.cro_22 = true;
        }


        // waitForElement(".relative.pt-5", init);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();