(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "";
		var pageLocation = window.location.pathname;
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
		function addingHtml() {
			waitForElement(".py-5", function () {
				if (!document.querySelector(".cro-t-67-saving-container")) {
					insertHtml(".py-5", footerpart, "beforebegin");
				}
			});

			waitForElement(".cro-t-67-saving-container", function () {
				if (!document.querySelector(".cro-t-67-payment-container")) {
					insertHtml(".cro-t-67-saving-container", paymentSection, "beforebegin");
				}
			});

			waitForElement("#buttonsWrapper .w-56", function () {
				if (!document.querySelector(".cro-whatsapp-icon-text-part")) {
					insertHtml("#buttonsWrapper .w-56", whatsapp_icon, "afterend");
				}
			});

			waitForElement(".relative.container .omni-form", function () {
				var newhero = document.querySelector(".relative.container .omni-form")
				if (newhero) {
					if (!document.querySelector(".cro-t-67-hero-container")) {
						insertHtml(".relative.container .omni-form", heroSection, "beforebegin");
					}
				}

			});

			waitForElement(".relative.container .debtbusters-form", function () {
				var newhero = document.querySelector(".relative.container .debtbusters-form")
				if (newhero) {
					if (!document.querySelector(".cro-t-67-hero-container")) {
						insertHtml(".relative.container .debtbusters-form", heroSection, "beforebegin");
					}
				}

			});

			// .relative.container .debtbusters-form

			waitForElement(".omni-form #main-form", function () {
				if (!document.querySelector(".cro-t-67-from-img")) {
					insertHtml(".omni-form #main-form", newFromImg, "beforebegin");
				}
			});

			waitForElement(".debtbusters-form #main-form", function () {
				if (!document.querySelector(".cro-t-67-from-img")) {
					insertHtml(".debtbusters-form #main-form", newFromImg, "beforebegin");
				}
			});

			waitForElement(".omni-form #main-form", function () {
				if (!document.querySelector(".cro-t-67-from-header")) {
					insertHtml(".omni-form #main-form", fromsection, "beforebegin");
				}
			});
			waitForElement(".debtbusters-form #main-form", function () {
				if (!document.querySelector(".cro-t-67-from-header")) {
					insertHtml(".debtbusters-form #main-form", fromsection, "beforebegin");
				}
			});



			// .debtbusters-form #main-form

			waitForElement(".omni-form #name", function () {
				var parent = document.querySelector('#name').closest('div')
				if (parent) {
					parent.classList.add('cro-from-name-parent')
				}
			});
			waitForElement(".omni-form #surname", function () {
				var parent = document.querySelector('#surname').closest('div')
				if (parent) {
					parent.classList.add('cro-from-surname-parent')
				}
			});
			waitForElement(".omni-form #contactNumber", function () {
				var parent = document.querySelector('#contactNumber').closest('div')
				if (parent) {
					parent.classList.add('cro-from-conNumber-parent')
				}
			});
			waitForElement(".omni-form #email", function () {
				var parent = document.querySelector('#email').closest('div')
				if (parent) {
					parent.classList.add('cro-from-email-parent')
				}
			});
			// idNumber

			waitForElement(".omni-form #idNumber", function () {
				var parent = document.querySelector('#idNumber').closest('div')
				if (parent) {
					parent.classList.add('cro-from-idNumber-parent')
				}
			});

			waitForElement(".omni-form .button .underline", function () {
				var parent = document.querySelector('.button .underline').closest('.button')
				if (parent) {
					parent.classList.add('cro-btn-tnc')
				}
			});

			waitForElement(".omni-form #Callback", function () {
				var parent = document.querySelector('#Callback').closest('.button')
				if (parent) {
					parent.classList.add('cro-from-button')
				}
			});


			// ---Other--Page----------

			waitForElement(".debtbusters-form #name", function () {
				var parent = document.querySelector('#name').closest('div')
				if (parent) {
					parent.classList.add('cro-from-name-parent')
				}
			});
			waitForElement(".debtbusters-form #surname", function () {
				var parent = document.querySelector('#surname').closest('div')
				if (parent) {
					parent.classList.add('cro-from-surname-parent')
				}
			});
			waitForElement(".debtbusters-form #contactNumber", function () {
				var parent = document.querySelector('#contactNumber').closest('div')
				if (parent) {
					parent.classList.add('cro-from-conNumber-parent')
				}
			});
			waitForElement(".debtbusters-form #email", function () {
				var parent = document.querySelector('#email').closest('div')
				if (parent) {
					parent.classList.add('cro-from-email-parent')
				}
			});
			// idNumber

			waitForElement(".debtbusters-form #idNumber", function () {
				var parent = document.querySelector('#idNumber').closest('div')
				if (parent) {
					parent.classList.add('cro-from-idNumber-parent')
				}
			});

			waitForElement(".debtbusters-form .button .underline", function () {
				var parent = document.querySelector('.button .underline').closest('.button')
				if (parent) {
					parent.classList.add('cro-btn-tnc')
				}
			});

			waitForElement(".debtbusters-form #Callback", function () {
				var parent = document.querySelector('#Callback').closest('.button')
				if (parent) {
					parent.classList.add('cro-from-button')
				}
			});

		}

		function whatsAppButton() {
			live(".cro-whatsapp-icon-text", "click", function () {
				document.querySelector("#buttonsWrapper #Whatsapp").click()
			})
		}


		var footerpart = `<div class="cro-t-67-saving-container">
						<picture class="absolute right-0 cro-hero-banner">
				<source type="image/webp" srcset="/img/G4t6AhHjgs-640.webp 640w, /img/G4t6AhHjgs-768.webp 768w, /img/G4t6AhHjgs-1024.webp 1024w, /img/G4t6AhHjgs-1280.webp 1280w, /img/G4t6AhHjgs-1536.webp 1536w, /img/G4t6AhHjgs-1800.webp 1800w" sizes="100vw">
				<source type="image/jpeg" srcset="/img/G4t6AhHjgs-640.jpeg 640w, /img/G4t6AhHjgs-768.jpeg 768w, /img/G4t6AhHjgs-1024.jpeg 1024w, /img/G4t6AhHjgs-1280.jpeg 1280w, /img/G4t6AhHjgs-1536.jpeg 1536w, /img/G4t6AhHjgs-1800.jpeg 1800w" sizes="100vw"><img class="h-32 xl:h-48 2xl:h-72 object-contain object-right z-40" alt="DebtBusters logo" loading="eager" decoding="sync" src="/img/G4t6AhHjgs-640.jpeg" width="1800" height="1136"></picture>
        <div class="cro-t-67-saving-container-wrapper container">
            <h1 class="cro-t-67-saving-container-header">Through this process you'll enjoy:</h1>
            <div class="cro-t-67-saving-list-items">
                <div class="cro-t-67-saving-list-item cro-t-67-item1">
                    <div class="cro-t-67-saving-list-item-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="19px" height="21px" viewBox="0 0 19 21"
                            version="1.1">
                            <g id="" fill="rgba(91, 172, 67, 1)">
                                <path
                                    d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                </path>
                            </g>
                        </svg></div>
                    <p class="cro-t-67-saving-list-item-content">Average monthly saving of between R6,000 – R12,000</p>
                </div>
                <div class="cro-t-67-saving-list-item cro-t-67-item2">
                    <div class="cro-t-67-saving-list-item-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="19px" height="21px" viewBox="0 0 19 21"
                            version="1.1">
                            <g id="" fill="rgba(91, 172, 67, 1)">
                                <path
                                    d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                </path>
                            </g>
                        </svg></div>
                    <p class="cro-t-67-saving-list-item-content">Reduction on interest rates from 21% to 3%</p>
                </div>
                <div class="cro-t-67-saving-list-item cro-t-67-item3">
                    <div class="cro-t-67-saving-list-item-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="19px" height="21px" viewBox="0 0 19 21"
                            version="1.1">
                            <g id="" fill="rgba(91, 172, 67, 1)">
                                <path
                                    d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                </path>
                            </g>
                        </svg></div>
                    <p class="cro-t-67-saving-list-item-content">One single payment (compared to paying multiple credit
                        providers)</p>
                </div>
                <div class="cro-t-67-saving-list-item cro-t-67-item4">
                    <div class="cro-t-67-saving-list-item-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="19px" height="21px" viewBox="0 0 19 21"
                            version="1.1">
                            <g id="" fill="rgba(91, 172, 67, 1)">
                                <path
                                    d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                </path>
                            </g>
                        </svg></div>
                    <p class="cro-t-67-saving-list-item-content">Stops the harassment by credit providers/debt
                        collectors
                    </p>
                </div>
                <div class="cro-t-67-saving-list-item cro-t-67-item5">
                    <div class="cro-t-67-saving-list-item-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="19px" height="21px" viewBox="0 0 19 21"
                            version="1.1">
                            <g id="" fill="rgba(91, 172, 67, 1)">
                                <path
                                    d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                </path>
                            </g>
                        </svg></div>
                    <p class="cro-t-67-saving-list-item-content">Protection of assets</p>
                </div>
            </div>
					<p class="cro-t-67-saving-footer-text">The longer it takes to get started to become debt free, the more difficult it becomes to achieve your goals.</p>
						<p class='cro-t-67-saving-footer-text1'>Our clients sleep easily at night knowing their families are protected and that they have a plan to get debt free.</p>
					<div class="cro-t-67-saving-footer-button">
					<a class="cro-t-67-saving-footer-button-link" href="#">Call me back</a></div>

				</div>
			</div>`

		var paymentSection = `<div class="cro-t-67-payment-container">
        <div class="cro-t-67-payment-container-wrapper container">
            <h1 class="cro-payment-container-header">The process is simple</h1>
            <h1 class="cro-payment-container-sub-header">Struggling to manage your debt payments adds so much stress to
                your life. We help our clients go from having too much debt and too much stress to getting debt free,
                with a better credit score.</h1>
            <h1 class="cro-t-67-payment-card-header">Getting debt free starts with 3 easy steps:</h1>
            <div class="cro-t-67-payment-card-container">
                <div class="cro-t-67-payment-card-container-wrapper">
                    <div class="cro-t-67-payment-cards">
                        <div class="cro-t-67-payment-cards-wrapper">
                            <div class="cro-t-67-payment-card payment-cards-1">
                                <div class="cro-t-67-payment-cards-icon">1</div>
                                <p class="cro-t-67-payment-cards-text">Complete the form above and click submit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cro-t-67-payment-cards">
                        <div class="cro-t-67-payment-cards-wrapper">
                            <div class="cro-t-67-payment-card payment-cards-2">
                                <div class="cro-t-67-payment-cards-icon">2</div>
                                <p class="cro-t-67-payment-cards-text">One of our friendly agents will contact you to
                                    discuss your situation</p>
                            </div>
                        </div>
                    </div>
                    <div class="cro-t-67-payment-cards">
                        <div class="cro-t-67-payment-cards-wrapper">
                            <div class="cro-t-67-payment-card payment-cards-3">
                                <div class="cro-t-67-payment-cards-icon">3</div>
                                <p class="cro-t-67-payment-cards-text">We'll provide you with a personalised plan to get
									debt-free.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cro-t-67-payment-footer-button">
                    <a class="cro-t-67-payment-footer-button-link" href="#">Call me back</a>
                </div>
            </div>
        </div>
    </div>`

		var heroSection = `<div class="cro-t-67-hero-container">
	<div class="cro-t-67-hero-container-wrapper">
		<h1 class="cro-t-67-hero-container-header">No more debt. </br><span>We'll get it sorted.</span></h1>
		<p class="cro-t-67-hero-container-sub-header">We’ll get your interest rates right down. You’ll make one consolidated payment a month. You’ll have more cash to live on.<span> Sorted.</span>

		</p>
		<div class="mb-5 w-full md:72 lg:w-128 max-w-full lg:max-w-full cro-hero-section-fotter-img">
			<picture>
				<source type="image/webp"
					srcset="/img/NEAzK8p99K-640.webp 640w, /img/NEAzK8p99K-768.webp 768w, /img/NEAzK8p99K-1024.webp 1024w, /img/NEAzK8p99K-1280.webp 1280w, /img/NEAzK8p99K-1536.webp 1536w, /img/NEAzK8p99K-1800.webp 1800w"
					sizes="100vw">
				<source type="image/jpeg"
					srcset="/img/NEAzK8p99K-640.jpeg 640w, /img/NEAzK8p99K-768.jpeg 768w, /img/NEAzK8p99K-1024.jpeg 1024w, /img/NEAzK8p99K-1280.jpeg 1280w, /img/NEAzK8p99K-1536.jpeg 1536w, /img/NEAzK8p99K-1800.jpeg 1800w"
					sizes="100vw"><img
					alt="Consistently rated highly for helpfulness | 1 mins average response time" loading="eager"
					decoding="sync" src="/img/NEAzK8p99K-640.jpeg" width="1800" height="248">
			</picture>
		</div>
	</div>
</div>`

		var fromsection = `<div class="cro-t-67-from-header">
        <div class="cro-t-67-from-header-wrapper">
            <p class="cro-t-67-from-header-text">YES! I want to start my free, private, Debt-Free Plan now.</p>
        </div>
    </div>`

		var newFromImg = `
	<div class="cro-t-67-from-img">
	<div class="cro-t-67-from-img-wrapper">
        <img src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/From-icon.png" class="cro-from-img-top"
            alt="">
			</div>
    </div>`


		var whatsapp_icon = `<div class="cro-whatsapp-icon-text-part">
        <div class="cro-whatsapp-icon-text">
            <div class="cro-whatsapp-icon">
                <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/DebtBusters/Test+Rebuilt+%7C+Recipe+67+v2/cro-t-67-watsapp-icon-debthbusters.svg" alt="">
            </div>
            <div class="cro-whatsapp-text">
                Continue on WhatsApp
            </div>
        </div>
              </div>`






		function init() {
			addClass('body', 'cro-t-67_2')

			addingHtml()
			whatsAppButton()
			addingNewRule();

		}

		function addingNewRule() {
			live("#Whatsapp, #Callback, #Online", "click", function () {
				setTimeout(function () {
					var selectors = ['#errName', '#errSurname', '#errTel', '#errEmail', '#errIDNumber'];
					selectors.forEach(function (selector) {
						var errorElement = document.querySelector(selector);

						if (errorElement && errorElement.textContent.length > 0) {
							var parentElement = errorElement.closest('div');
							if (parentElement) {
								parentElement.classList.add('cro-t-67-' + selector.replace('#err', '') + 'Error');
							}
						} else {
							var existingClass = 'cro-t-67-' + selector.replace('#err', '') + 'Error';
							var existingElement = document.querySelector('.' + existingClass);

							if (existingElement) {
								existingElement.classList.remove(existingClass);
							}
						}
					});
				}, 20)

			})
		}

		if (
			pageLocation.includes('/landing-pages/omni-lp') ||
			pageLocation.includes('/landing-pages/2022-07-image-text-above-lp2/') ||
			pageLocation.includes('/landing-pages/2023-02-facebook-dr-turbo')
		) {
			waitForElement('body', init);
		}


	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();