(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-t-debt-90";
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
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
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

		var croCtaButton = `<div class="cro-90-ctaButton">
        <div class="cro-90-ctaButton-wrapper">
            <div class="flex justify-center" id="cro_90_buttonsWrapper">
                <div class="cro_90_callMe cro_90_button">
                    <div class="mt-4 mr-4 w-48">
                        <input type="submit" id="cro_90_Callback" value="Call Me" class="bg-orange-new !rounded-full !text-white !font-bold cursor-pointer submitbutton">
                    </div>
                    <div class="cro_90_callMe-content cro_90_cardContent">
                        <p><span>Speak to an agent </span> who can guide you through the process and answer your questions.</p>
                    </div>
                </div>
                <div class="cro_90_applyNow cro_90_button">
                    <div class="mt-4 mr-4 w-48">
                        <input type="submit" id="cro_90_Online" value="Apply Now" class="bg-orange-new !rounded-full !text-white !font-bold cursor-pointer submitbutton">
                    </div>
                    <div class="cro_90_applyNow-content cro_90_cardContent">
                        <p><span>Skip the phone</span> calls and apply online immediately.</p>
                    </div>
                </div>
                <div class="cro_90_whatsApp cro_90_button">
                    <div class="mt-4 w-56">
                        <svg xmlns="http://www.w3.org/2000/svg" class="cro_90_appIcon" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M9.21729 0C4.25145 0 0.217285 4.03417 0.217285 9C0.217285 10.5962 0.655032 12.0858 1.38508 13.3861L0.231806 17.5032C0.213382 17.5691 0.212549 17.6387 0.229392 17.705C0.246234 17.7713 0.280164 17.832 0.327797 17.8811C0.37543 17.9302 0.435103 17.966 0.500866 17.9848C0.566628 18.0037 0.636183 18.005 0.702594 17.9885L4.99548 16.9247C6.25692 17.5981 7.6883 18 9.21729 18C14.1831 18 18.2173 13.9658 18.2173 9C18.2173 4.03417 14.1831 0 9.21729 0ZM9.21729 0.782609C13.7601 0.782609 17.4347 4.45714 17.4347 9C17.4347 13.5429 13.7601 17.2174 9.21729 17.2174C7.76086 17.2174 6.39681 16.8377 5.211 16.1742C5.12427 16.1257 5.02236 16.112 4.92593 16.136L1.1665 17.0676L2.17457 13.471C2.189 13.4201 2.19298 13.3669 2.18628 13.3145C2.17958 13.2621 2.16234 13.2116 2.13559 13.166C1.41495 11.944 0.999894 10.5222 0.999894 9C0.999894 4.45714 4.67442 0.782609 9.21729 0.782609ZM5.94699 4.30435C5.69615 4.30435 5.33791 4.39767 5.04363 4.71476C4.86687 4.90521 4.13033 5.62285 4.13033 6.88451C4.13033 8.19989 5.04261 9.3349 5.15292 9.48072H5.15368V9.48149C5.14322 9.46774 5.29369 9.68564 5.49454 9.94693C5.6954 10.2082 5.97627 10.5514 6.32912 10.9229C7.03483 11.6659 8.02705 12.5246 9.25856 13.0498C9.82568 13.2913 10.2731 13.4372 10.6121 13.5436C11.2403 13.7408 11.8124 13.7108 12.2423 13.6475C12.564 13.6001 12.9178 13.4457 13.2679 13.2241C13.618 13.0025 13.9611 12.7271 14.1124 12.3085C14.2208 12.0084 14.2759 11.7311 14.2958 11.503C14.3058 11.3889 14.3071 11.2882 14.2997 11.195C14.2922 11.1018 14.3002 11.0303 14.2133 10.8877C14.0311 10.5886 13.8248 10.5808 13.6095 10.4743C13.4899 10.4151 13.1494 10.2488 12.8078 10.086C12.4666 9.92345 12.1712 9.77946 11.9893 9.71459C11.8743 9.67323 11.734 9.6137 11.5315 9.63663C11.329 9.65956 11.129 9.80567 11.0125 9.97826C10.9022 10.1419 10.4579 10.6663 10.3224 10.8205C10.3206 10.8194 10.3324 10.8248 10.2789 10.7983C10.1113 10.7154 9.90643 10.6449 9.60324 10.485C9.30005 10.325 8.92078 10.0889 8.50575 9.723V9.72223C7.88804 9.17841 7.45535 8.49565 7.31885 8.2663C7.32804 8.25536 7.31775 8.26861 7.33719 8.24949L7.33795 8.24873C7.47746 8.11132 7.6011 7.9472 7.70557 7.82685C7.85369 7.65621 7.91906 7.50578 7.98987 7.36523C8.13101 7.08513 8.05242 6.7769 7.97077 6.61472V6.61396C7.97641 6.62518 7.9266 6.51528 7.87294 6.3885C7.81913 6.26136 7.75054 6.09654 7.67729 5.92077C7.53078 5.56924 7.36721 5.17497 7.26993 4.94404V4.94327C7.15534 4.67127 7.00031 4.47531 6.79762 4.38077C6.59493 4.28624 6.41585 4.31311 6.40861 4.31275H6.40784C6.2632 4.30608 6.10447 4.30435 5.94699 4.30435ZM5.94699 5.08696C6.09785 5.08696 6.24659 5.0888 6.37116 5.0946C6.49931 5.10099 6.49134 5.10151 6.46669 5.09001C6.44165 5.07834 6.47562 5.07455 6.54847 5.24745C6.64371 5.47357 6.80809 5.86927 6.95506 6.22189C7.02854 6.3982 7.09731 6.56367 7.15224 6.69344C7.20716 6.82322 7.23692 6.89568 7.27146 6.96476V6.96552L7.27223 6.96629C7.30609 7.0331 7.3031 6.99032 7.29133 7.01367C7.20876 7.17756 7.19755 7.2178 7.11402 7.31403C6.98684 7.46055 6.85711 7.62394 6.78845 7.69158C6.72837 7.75059 6.61997 7.84253 6.55229 8.0225C6.4845 8.20275 6.51614 8.45005 6.62489 8.63468C6.76969 8.8805 7.24684 9.65712 7.98834 10.31C8.45532 10.7216 8.89038 10.9941 9.23792 11.1774C9.58547 11.3607 9.86853 11.4678 9.93187 11.4992C10.0823 11.5736 10.2467 11.6314 10.4378 11.6084C10.629 11.5855 10.7938 11.4695 10.8987 11.3509L10.8994 11.3501C11.0391 11.1918 11.4539 10.7181 11.653 10.4261C11.6614 10.4291 11.6587 10.4268 11.7248 10.4506V10.4513H11.7256C11.7558 10.4621 12.1342 10.6315 12.4715 10.7922C12.8089 10.953 13.1513 11.12 13.2625 11.1751C13.4231 11.2546 13.499 11.3063 13.5186 11.3066C13.5199 11.341 13.5212 11.3783 13.5163 11.435C13.5026 11.5921 13.4606 11.8097 13.3764 12.0425C13.3352 12.1566 13.1206 12.3917 12.8498 12.563C12.5791 12.7343 12.2496 12.8553 12.1276 12.8733C11.7607 12.9274 11.3251 12.9471 10.8467 12.7969C10.515 12.6928 10.1014 12.558 9.56579 12.3299C8.4796 11.8667 7.55643 11.0784 6.89697 10.3841C6.56724 10.0369 6.30307 9.71375 6.11513 9.46926C5.92754 9.22523 5.84562 9.09824 5.77732 9.00841L5.77656 9.00764C5.65532 8.84731 4.91294 7.81468 4.91294 6.88451C4.91294 5.90008 5.37018 5.51404 5.61759 5.24745C5.74748 5.1075 5.88948 5.08696 5.94699 5.08696Z" fill="white"/>
                        </svg>
                        <input type="submit" id="cro_90_Whatsapp" value="WhatsApp" class="bg-orange-new !rounded-full !text-white !font-bold cursor-pointer submitbutton whatsapp">
                        <svg xmlns="http://www.w3.org/2000/svg" class="cro_90_arrowIcon" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M7.26514 6.45117L1.96045 11.7832C1.68701 12.0293 1.27686 12.0293 1.03076 11.7832L0.401855 11.1543C0.155762 10.9082 0.155762 10.498 0.401855 10.2246L4.61279 5.98633L0.401855 1.77539C0.155762 1.50195 0.155762 1.0918 0.401855 0.845703L1.03076 0.216797C1.27686 -0.0292969 1.68701 -0.0292969 1.96045 0.216797L7.26514 5.54883C7.51123 5.79492 7.51123 6.20508 7.26514 6.45117Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="cro_90_applyNow-content cro_90_cardContent">
                        <p><span>Chat with an agent on WhatsApp</span> who can guide you through the process and answer your questions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
		
		function init() {
			addClass("body", variation_name);

			// waitForElement("#buttonsWrapper", function () {
			// 	var parent = document.querySelector('#buttonsWrapper').closest('.button')
			// 	if(parent){
			// 		parent.classList.add('cro-t-90-buttonsWrapper')
			// 	}
			// });

			waitForElement("#buttonsWrapper", function () {
				if (!document.querySelector(".cro-90-ctaButton")) {
					insertHtml("#buttonsWrapper", croCtaButton, "afterend");
				}
			});


		}
		
		function croEventHandkler() {

			live(".cro_90_callMe.cro_90_button .mt-4", "click", function (e) {
				e.preventDefault();
				var callBtn = document.querySelector("#Callback");
				if (callBtn) {
					callBtn.click();
				}
			});

			live(".cro_90_applyNow.cro_90_button .mt-4", "click", function () {
				e.preventDefault();
				var applyBtn = document.querySelector("#Online");
				if (applyBtn) {
					applyBtn.click();
				}
			});

			live(".cro_90_whatsApp.cro_90_button .mt-4", "click", function () {
				e.preventDefault();
				var whatsBtn = document.querySelector("#Whatsapp");
				if (whatsBtn) {
					whatsBtn.click();
				}
			});
		}
		
		if (!window.cro_t_debt_90) {
            waitForElement('body', init);
			croEventHandkler();
			window.cro_t_debt_90 = true;
		}
		
		
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();