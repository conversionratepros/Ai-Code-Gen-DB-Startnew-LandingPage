(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro92";
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

		function live(selector, event, callback, context) {
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

		var newUpdate = `<div class="cro92-interest-rates">
								<div class="cro92-interest-rates-wrapper container">
									<div class="cro92-interest-rates-inner">
										<div class="cro92-interest-rates-left">
											<div class="cro92-interest-rates-left-wrapper">
												<div class="cro92-interest-rates-text">
													We’ll get your interest rates right down. You’ll make one consolidated payment a month.
													You’ll have more cash to live on. <span>Sorted.</span>
												</div>
											</div>
										</div>
										<div class="cro92-interest-rates-right">
											<div class="cro92-interest-rates-right-wrapper">
												<div class="cro92-interest-rates-right-image image_1">
													<img class="cro92-right-icon" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/DebtBusters/Recipe+92/cro-db-92-3.png"
														alt="">
												</div>
												<div class="cro92-interest-rates-right-image image_2">
													<img class="cro92-right-icon" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/DebtBusters/Recipe+92/cro-db-92-2.png" alt="">
												</div>
												<div class="cro92-interest-rates-right-image image_3">
													<img class="cro92-right-icon" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/DebtBusters/Recipe+92/cro-db-92-1.png"
														alt="">
												</div>
											</div>
										</div>
									</div>
								</div>
    					</div>`;

		var newUpdateMobile = `<div class="cro92-interest-rates mobile">
									<div class="cro92-interest-rates-wrapper">
										<div class="cro92-interest-rates-inner">
											<div class="cro92-interest-rates-left">
												<div class="cro92-interest-rates-left-wrapper">
													<div class="cro92-interest-rates-text">
														We’ll get your interest rates right down. You’ll make one consolidated payment a month.
														You’ll have more cash to live on. <span>Sorted.</span>
													</div>
												</div>
											</div>
											<div class="cro92-interest-rates-right">
												<div class="cro92-interest-rates-right-wrapper">
													<div class="cro92-interest-rates-right-image image_1">
														<img class="cro92-right-icon" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/DebtBusters/Recipe+92/cro-db-92-3.png"
															alt="">
													</div>
													<div class="cro92-interest-rates-right-image image_2">
														<img class="cro92-right-icon" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/DebtBusters/Recipe+92/cro-db-92-2.png" alt="">
													</div>
													<div class="cro92-interest-rates-right-image image_3">
														<img class="cro92-right-icon" src="https://i.ibb.co.com/0Rrht9LN/NEAz-K8p99-K-1800-1-1.png"
															alt="">
													</div>
												</div>
											</div>
										</div>
									</div>
    						</div>`;

		var formHeading = `<div class="cro92-from-header">
								<div class="cro92-from-header-wrapper">
									<div class="cro92-from-header-inner">
										<div class="cro92-from-heading-main">
											<div class="cro92-from-heading-text Desktop">
												Feeling stuck in debt?
											</div>
											<div class="cro92-from-heading-text Mobile" style="display: none;">
												Stuck in debt?
											</div>
											<div class="cro92-from-heading-text secend">
												There’s always a way forward.
											</div>
										</div>
										<div class="cro92-from-sub_heading">
											<div class="cro92-from-sub_heading-text">
												You’re not alone. Our expert team has helped thousands break free from debt and breathe again.
											</div>
										</div>
									</div>
								</div>
    						</div>`;

		var formBottomIcon = ` <div class="cro92-form-bottom">
							<div class="cro92-form-bottom-wrapper">
								<div class="cro92-form-bottom-inner">
									<div class="cro92-form-bottom-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none"
											class="">
											<path
												d="M16.4201 2.34517L9.24005 0.515167C9.16071 0.500722 9.0794 0.500722 9.00005 0.515167C8.93376 0.505161 8.86635 0.505161 8.80005 0.515167L1.58005 2.34517C1.12227 2.45945 0.719624 2.7319 0.443302 3.11436C0.16698 3.49681 0.0347737 3.96465 0.0700547 4.43517L0.490055 9.94517C0.658264 12.1309 1.422 14.2288 2.69836 16.0111C3.97472 17.7934 5.71492 19.1921 7.73005 20.0552L8.61005 20.4352C8.72096 20.4814 8.83991 20.5052 8.96005 20.5052C9.0802 20.5052 9.19915 20.4814 9.31005 20.4352L10.1901 20.0552C12.2052 19.1921 13.9454 17.7934 15.2218 16.0111C16.4981 14.2288 17.2618 12.1309 17.4301 9.94517L17.8501 4.43517C17.8895 3.97529 17.7686 3.51594 17.508 3.13501C17.2473 2.75408 16.863 2.47503 16.4201 2.34517ZM12.7101 8.22517L8.71005 12.2252C8.61709 12.3189 8.50649 12.3933 8.38463 12.4441C8.26277 12.4948 8.13207 12.521 8.00005 12.521C7.86804 12.521 7.73734 12.4948 7.61548 12.4441C7.49362 12.3933 7.38302 12.3189 7.29005 12.2252L5.29005 10.2252C5.10175 10.0369 4.99596 9.78147 4.99596 9.51517C4.99596 9.24886 5.10175 8.99347 5.29005 8.80517C5.47836 8.61686 5.73375 8.51108 6.00005 8.51108C6.26636 8.51108 6.52175 8.61686 6.71005 8.80517L8.00005 10.1052L11.2901 6.80517C11.4784 6.61686 11.7338 6.51107 12.0001 6.51107C12.2664 6.51107 12.5218 6.61686 12.7101 6.80517C12.8984 6.99347 13.0041 7.24886 13.0041 7.51517C13.0041 7.78147 12.8984 8.03686 12.7101 8.22517Z"
												fill="white" />
										</svg>
									</div>
									<div class="cro92-form-bottom-text">
										Secure & Confidential
									</div>
								</div>
							</div>
    					</div>`;

		var inputHeading = ` <div class="cro-from-heading">
								<div class="cro-from-heading-wrapper">
									<div class="cro-from-heading-text">
										Let’s talk
									</div>
								</div>
    						</div>`;

		function addingHtml() {
			waitForElement('section.pt-5', function () {
				if (!document.querySelector('.cro92-interest-rates')) {
					insertHtml('section.pt-5', newUpdate, "afterend");
				}
			});

			waitForElement('section.pt-5 .lead', function () {
				if (!document.querySelector('.cro92-interest-rates.mobile')) {
					insertHtml('section.pt-5 .lead', newUpdateMobile, "afterend");
				}
			});


			waitForElement('section.pt-5 h1', function () {
				if (!document.querySelector('.cro92-from-header')) {
					insertHtml('section.pt-5 h1', formHeading, "afterend");
				}
			});

			waitForElement('.omni-form #buttonsWrapper', function () {
				if (!document.querySelector('.cro92-form-bottom')) {
					insertHtml('.omni-form #buttonsWrapper', formBottomIcon, "afterend");
				}
			});
			waitForElement('.omni-form .main-form', function () {
				if (!document.querySelector('.cro-from-heading')) {
					insertHtml('.omni-form .main-form', inputHeading, "afterbegin");
				}
			});
		}

		/* Variation Init */
		function init() {
			addClass("body", variation_name);
			addingHtml();
		}


		waitForElement('.omni-form', init);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();