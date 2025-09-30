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

	  function waitForSwiper(trigger) {
		var interval = setInterval(function () {
			if (typeof window.Swiper != "undefined") {
				clearInterval(interval);
				trigger();
			}
		}, 50);
		setTimeout(function () {
			clearInterval(interval);
		}, 15000);
	}

    function debounce(func, timeout = 100) {
		let timer;
		return (...args) => {
		  clearTimeout(timer);
		  timer = setTimeout(() => {
			func.apply(this, args);
		  }, timeout);
		};
	}

	function addScript() {
		var scriptOne = document.createElement("script");
		scriptOne.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
		document.querySelector("head").appendChild(scriptOne);

		var swiperCss =
			'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>';
		document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
	}

	function swiperInitiate(){
		new Swiper('.swiper-container', {
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 20,
		});
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

	/* Variation html */
	var croGoodBye = `<section class="cro-goodBye">
	<div class="cro-goodBye-wrapper container">
		<h2 class="cro-goodBye-heading">Say <span>goodbye</span> to overwhelming debt <br>repayments</h2>
		<p class="cro-goodBye-para">Don’t let debt control your life any longer. Our proven debt management plan <br>will reduce your monthly obligations, giving you the breathing room you need <br>to live life on your terms.</p>

		<div class="cro-goodBye-section">
			<div class="cro-goodBye-sectionOne croSectionOne">
				<div class="cro-goodBye-sectionOne-hed">
					<div class="cro-goodBye-sectionOne-hedNum">
						<span class="cro-goodBye-sectionOne-hedNumber">1</span>
					</div>
					<div class="cro-goodBye-sectionOne-hedText">
						<h2 class="cro-goodBye-sectionOne-hedTextTxt">We’ll reduce your monthly payments</h2>
					</div>
				</div>
				<div class="cro-goodBye-sectionOne-bottom">
					<p class="cro-goodBye-sectionOne-bottom-TextPara">Through negotiations with banks and creditors we lower interest rates and consolidate your debt into one low monthly payment.</p>
				</div>
			</div>
			<div class="cro-goodBye-sectionOne croSectiontwo">
				<div class="cro-goodBye-sectionOne-hed">
					<div class="cro-goodBye-sectionOne-hedNum">
						<span class="cro-goodBye-sectionOne-hedNumber">2</span>
					</div>
					<div class="cro-goodBye-sectionOne-hedText">
						<h2 class="cro-goodBye-sectionOne-hedTextTxt">You and your assets will be legally protected</h2>
					</div>
				</div>
				<div class="cro-goodBye-sectionOne-bottom">
					<p class="cro-goodBye-sectionOne-bottom-TextPara">You are legally protected as debt counselling decreases summonses and judgements. Your assets are safe and cannot be repossessed.</p>
				</div>
			</div>
			<div class="cro-goodBye-sectionOne croSectionThree">
				<div class="cro-goodBye-sectionOne-hed">
					<div class="cro-goodBye-sectionOne-hedNum">
						<span class="cro-goodBye-sectionOne-hedNumber">3</span>
					</div>
					<div class="cro-goodBye-sectionOne-hedText">
						<h2 class="cro-goodBye-sectionOne-hedTextTxt">Start your journey to a higher credit score</h2>
					</div>
				</div>
				<div class="cro-goodBye-sectionOne-bottom">
					<p class="cro-goodBye-sectionOne-bottom-TextPara">Consumers who completed debt counselling have, on average, significantly higher credit scores than those who considered it, but did not proceed.</p>
				</div>
			</div>
		</div>
	</div>
</section>`;

	var croTrust = ` <section class="cro-trusted">
	<div class="cro-trusted-wrapper container">
		<div class="cro-trusted-left">
			<h2 class="cro-trusted-left-head">The trusted <span>leaders</span> <br>in debt management since 2004</h2>
			<p class="cro-trusted-left-paraOne">When it comes to debt management, there’s no one more equipped and <br>experienced than DebtBusters. With the most registered debt counsellors in <br>South Africa, we have the knowledge, tools, and relationships with credit <br>providers to deliver unrivalled solutions.</p>
			<p class="cro-trusted-left-paraTwo">Regulated by the National Credit Regulator, we have been at the forefront <br>of helping South Africans for over 15 years. Our exceptional team of debt <br>counsellors, winners of 8 national awards, is ready to guide you <br>through every step of the process.</p>
		</div>
		<div class="cro-trusted-right">
			<div class="cro-trusted-right-des">
				<div class="cro-trusted-right-desImg">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/piggy.png" alt="" class="cro-trusted-right-desImg-img">
				</div>
				<div class="cro-trusted-right-desTxt">
					<h2 class="cro-trusted-right-desTxt-text">Helped clients unlock R2,000 cash p/m, on average</h2>
				</div>
			</div>
			<div class="cro-trusted-right-des">
				<div class="cro-trusted-right-desImg">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/cheerfull.png" alt="" class="cro-trusted-right-desImg-img">
				</div>
				<div class="cro-trusted-right-desTxt">
					<h2 class="cro-trusted-right-desTxt-text">Helped more than 500,000 South Africans</h2>
				</div>
			</div>
			<div class="cro-trusted-right-des">
				<div class="cro-trusted-right-desImg">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/percent.png" alt="" class="cro-trusted-right-desImg-img">
				</div>
				<div class="cro-trusted-right-desTxt">
					<h2 class="cro-trusted-right-desTxt-text">Reduced interest rates to 3% down from 21%, on average</h2>
				</div>
			</div>
			<div class="cro-trusted-right-des">
				<div class="cro-trusted-right-desImg">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/support.png" alt="" class="cro-trusted-right-desImg-img">
				</div>
				<div class="cro-trusted-right-desTxt">
					<h2 class="cro-trusted-right-desTxt-text">More than 500 qualified debt consultants</h2>
				</div>
			</div>
		</div>
	</div>
</section>`;

	var croqtn = `<section class="cro-question">
	<div class="cro-question-wrapper container">
		<h2 class="cro-questionHead">Frequently asked <span>questions</span></h2>
		<div class="cro-question-sec cro-numOne">
			<div class="cro-question-secOne">
				<p class="cro-question-secQtn">How does Debt Counselling work?</p>
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/dropdown.png" alt="" class="cro-question-secQtn-img">
			</div>
			<div class="cro-question-secTwo">
				<div class="cro-question-secTwo-display">
					<div class="cro-question-secTwo-div-left">
						<p class="cro-question-secAns">Debt Counselling is a regulated process, allowing us to create a financial plan and budget that fits you uniquely and gives you the power to repay your debts. We negotiate with your creditors to get longer repayment periods, lower interest rates, fees, and monthly payments, and put more money in your pocket. The process also provides legal protection of your assets and keeps creditors off your back.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cro-question-sec cro-numTwo">
			<div class="cro-question-secOne">
				<p class="cro-question-secQtn">Will debt counselling affect my credit score?</p>
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/dropdown.png" alt="" class="cro-question-secQtn-img">
			</div>
			<div class="cro-question-secTwo">
				<div class="cro-question-secTwo-display">
					<div class="cro-question-secTwo-div-left">
						<p class="cro-question-secAns">Over-indebted consumers who successfully complete debt counselling have, on average, significantly higher credit scores than those who consider it but do not proceed.</p>
						<p class="cro-question-secAns cro-secAns-para2">A consumer’s credit score will drop during the first few months of the debt counselling journey, as credit providers receive limited amount of debt repayments during this initial period as per wider industry agreements. Credit providers know they will not receive payments in the first few months, and this is built into the overall programme.</p>
						<p class="cro-question-secAns cro-secAns-para2">Once negotiations with credit providers are finalised and the consumer continues to pay the new restructured, more affordable repayments a steady increase in their credit score can be seen.</p>
						<p class="cro-question-secAns cro-secAns-para2">The increase gets even higher post clearance. In fact, consumers who complete debt counselling have an average credit score that is 112 points higher than their starting point.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cro-question-sec cro-numThree">
			<div class="cro-question-secOne">
				<p class="cro-question-secQtn">How long does the debt counselling process take?</p>
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/dropdown.png" alt="" class="cro-question-secQtn-img">
			</div>
			<div class="cro-question-secTwo">
				<div class="cro-question-secTwo-display">
					<div class="cro-question-secTwo-div-left">
						<p class="cro-question-secAns">DebtBusters’ financial consultants try to get debt matters solved in a time that is not excessive. Usually, the period is between 3.5 to 5 years.</p>
						<p class="cro-question-secAns cro-secAns-para2">The period depends on how much debt the client has, the interest rate and how much the client can pay back each month. By paying back a greater amount of money each month, the client’s debt will be reduced much faster.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cro-question-sec cro-numFour">
			<div class="cro-question-secOne">
				<p class="cro-question-secQtn">What fees are involved in Debt Counselling?</p>
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/dropdown.png" alt="" class="cro-question-secQtn-img">
			</div>
			<div class="cro-question-secTwo">
				<div class="cro-question-secTwo-display">
					<div class="cro-question-secTwo-div-left">
						<p class="cro-question-secAns">Debt Counselling is a formal process, which is governed by the National Credit Act. Your monthly debt repayment amount is specific to your situation and how much you owe on your debt in total. Debt Counsellors are permitted by the governing body, the National Credit Regulator (NCR) to charge certain fees which include:</p>
							<div class="cro-question-secAns-fourList">
								<li>A once off Restructuring Fee of 100% of your debt rehabilitation amount up to a maximum as per the NCR’s guidelines.</li>
								<li>A once off Application Fee</li>
								<li>A once off Administration Fee for your application as per the NCR guidelines.</li>
								<li>A Sundry Fee equivalent to your monthly debt rehabilitation amount for your legal application to the NCT or Magistrate Court.</li>
								<li>A Reckless Lending Fee , which covers the cost of a reckless lending investigation done on the client's account as regulated by the NCR.</li>
								<li>A monthly Aftercare Fee for your monthly debt rehabilitation amount for every month that you are under debt counselling.</li>
								<li>A monthly Transactional Payment Distribution Fee (PDA) as per the NCR.</li>
							</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cro-question-sec cro-numFive">
			<div class="cro-question-secOne">
				<p class="cro-question-secQtn">Can I still use my credit cards while under debt counselling?</p>
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/dropdown.png" alt="" class="cro-question-secQtn-img">
			</div>
			<div class="cro-question-secTwo">
				<div class="cro-question-secTwo-display">
					<div class="cro-question-secTwo-div-left">
						<p class="cro-question-secAns">Debt counselling is a debt rehabilitation process, which enables South African consumers to take control of their financial situation and bring them back to financial well-being. Clients will not be allowed or able to apply for more credit or use their credit cards, while under debt review. But once the programme has been successfully completed and a Clearance Certificate has been issued, you would be able to become credit-active again.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cro-question-sec cro-numSix">
			<div class="cro-question-secOne">
				<p class="cro-question-secQtn">Can I apply for new credit while in debt counselling?</p>
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/dropdown.png" alt="" class="cro-question-secQtn-img">
			</div>
			<div class="cro-question-secTwo">
				<div class="cro-question-secTwo-display">
					<div class="cro-question-secTwo-div-left">
						<p class="cro-question-secAns">You cannot apply for new credit while under debt counselling. Creditors are not allowed to lend you money if you are under the process. This is a measure put in place to protect you and ensure that you do not get into further debt, while you complete the programme and get debt-free. </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>`;

	var croBannerText = `<div class="cro-bannerText">
	<div class="cro-bannerText-wrapper">
		<h1 class="cro-bannerText-heading"><span class="cro-bannerText-headingSpan">Reset</span> your debt</h1>
		<p class="cro-bannerText-para">We’ve helped over <span class="cro-bannerText-paraSpan">500,000</span> South Africans get out of debt. It’s time to become debt-free with our <span class="cro-bannerText-paraSpan">debt-free</span> plans.</p>
		<div class="cro-bannerText-point">
			<div class="cro-bannerText-pointSection pointSection-one">
				<div class="cro-bannerText-pointSection-img">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/check-green.png" alt="" class="cro-bannerText-pointSection-imgImage">
				</div>
				<div class="cro-bannerText-pointSection-txt">
					<h2 class="cro-bannerText-pointSection-txtText">Reduce your monthly payments</h2>
				</div>
			</div>
			<div class="cro-bannerText-pointSection pointSection-two">
				<div class="cro-bannerText-pointSection-img">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/check-green.png" alt="" class="cro-bannerText-pointSection-imgImage">
				</div>
				<div class="cro-bannerText-pointSection-txt">
					<h2 class="cro-bannerText-pointSection-txtText">Stop harassment from creditors</h2>
				</div>
			</div>
			<div class="cro-bannerText-pointSection pointSection-three">
				<div class="cro-bannerText-pointSection-img">
					<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/check-green.png" alt="" class="cro-bannerText-pointSection-imgImage">
				</div>
				<div class="cro-bannerText-pointSection-txt">
					<h2 class="cro-bannerText-pointSection-txtText">Rebuild your financial future</h2>
				</div>
			</div>
		</div>
	</div>
</div>`;

	var croLogos = `<div class="cro-logos">
	<div class="cro-logos-wrapper">
		<div class="cro-logos-img">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/4_db_icon.png" alt="" class="cro-logos-imgImage">
			<h3 class="cro-logos-imgImage">An idm group <br>company</h3>
		</div>
		<div class="cro-logos-img">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/3_db_icon.png" alt="" class="cro-logos-imgImage">
			<h3 class="cro-logos-imgImage">member of <br>NDCA</h3>
		</div>
		<div class="cro-logos-img">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/1_db_icon.png" alt="" class="cro-logos-imgImage">
			<h3 class="cro-logos-imgImage">registered debt Counsellor <br>NCRDC1801</h3>
		</div>
		<div class="cro-logos-img">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/2_db_icon.png" alt="" class="cro-logos-imgImage">
			<h3 class="cro-logos-imgImage">voted best debt <br>Counsellor</h3>
		</div>
	</div>
</div>`;

	var croForm = `<section class="cro-form2">
	<div class="cro-form2-wrapper container">
		<div class="cro-form2-left">
			<h2 class="cro-form2-left-head">Your journey to <span class="cro-form2-left-headSpan">financial freedom</span> starts here</h2>
			<p class="cro-form2-left-para">Imagine receiving a personalised, free, and confidential debt-free plan designed especially for you. Our experts will craft a comprehensive plan tailored to your unique circumstances, providing you with a clear path to become debt-free and regain control of your life.</p>
			<div class="cro-form2-left-points">
				<div class="cro-form2-left-pointSection">
					<div class="cro-form2-left-pointSection-img">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/orange%20check.png" alt="" class="cro-form2-left-pointSection-imgImage">
					</div>
					<div class="cro-form2-left-pointSection-text">
						<h2 class="cro-form2-left-pointSection-textTxt">Reduce your monthly payments</h2>
					</div>
				</div>
				<div class="cro-form2-left-pointSection">
					<div class="cro-form2-left-pointSection-img">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/orange%20check.png" alt="" class="cro-form2-left-pointSection-imgImage">
					</div>
					<div class="cro-form2-left-pointSection-text">
						<h2 class="cro-form2-left-pointSection-textTxt">Stop harassment from creditors</h2>
					</div>
				</div>
				<div class="cro-form2-left-pointSection">
					<div class="cro-form2-left-pointSection-img">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/orange%20check.png" alt="" class="cro-form2-left-pointSection-imgImage">
					</div>
					<div class="cro-form2-left-pointSection-text">
						<h2 class="cro-form2-left-pointSection-textTxt">Rebuild your financial future</h2>
					</div>
				</div>
			</div>
		</div>
		<div class="cro-form2-right">
			<h2 class="cro-form-upeerText-header">Take back control and get your <br><span class="cro-form-upeerText-header-span">Debt-Free Plan</span> today</h2>
			<p class="cro-form-upeerText-para">You’ll get a personalised, free, and confidential debt-free <br>plan designed specifically for you. </p>
			<div class="cro-t-thankyou" style="display: none;">Thanks! Please wait while we redirect you.</div>
			<div class="cro-form2-right-form">
				<div class="cro-clonedForm"></div>
				<div class="cro-form-downText-img">
					<div class="cro-form-downText-imgSection imgSection-left">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/thumb-2.png" alt="" class="cro-form-downText-imgImage">
						<h3 class="cro-form-downText-imgText">Top National Debt Counsellor 8-time winner</h3>
					</div>
					<div class="cro-form-downText-imgSection imgSection-right">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/thumb-1.png" alt="" class="cro-form-downText-imgImage">
						<h3 class="cro-form-downText-imgText">Consistently rated highly for helpfulness</h3>
					</div>
				</div>
				<div class="cro-form-downText-lastText">
					<p class="tcs">By continuing you accept our <a href="https://www.debtbusters.co.za/privacy-policy/" rel="noopener" target="_blank">Privacy Notice</a> and <a href="https://www.debtbusters.co.za/terms-and-conditions-turbo/" rel="noopener" target="_blank">Terms &amp; Conditions</a>.</p>
				  </div>
				  
			</div>
		</div>
	</div>
</section>`;

	var croBannerImg = `<div class="cro-banner-img">
	<div class="cro-banner-img-wrapper">
		<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/main-image.png" alt="Happy couple" class="cro-banner-imgImage" loading="eager">
	</div>
</div>`;

	var croUp = `<div class="cro-form-upeerText">
<div class="cro-form-upeerText-wrapper">
	<h2 class="cro-form-upeerText-header">Take back control and get your <br><span class="cro-form-upeerText-header-span">Debt-Free Plan</span> today</h2>
	<p class="cro-form-upeerText-para">You’ll get a personalised, free, and confidential debt-free <br>plan designed specifically for you. </p>
</div>
</div>`;

	var croDown = `<div class="cro-form-downText">
<div class="cro-form-downText-wrapper">
	<div class="cro-form-downText-img">
		<div class="cro-form-downText-imgSection imgSection-left">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/thumb-2.png" alt="" class="cro-form-downText-imgImage">
			<h3 class="cro-form-downText-imgText">Top National Debt Counsellor 8-time winner</h3>
		</div>
		<div class="cro-form-downText-imgSection imgSection-right">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/thumb-1.png" alt="" class="cro-form-downText-imgImage">
			<h3 class="cro-form-downText-imgText">Consistently rated highly for helpfulness</h3>
		</div>
	</div>
	<div class="cro-form-downText-lastText">
		<p class="tcs">By continuing you accept our <a href="https://www.debtbusters.co.za/privacy-policy/" rel="noopener" target="_blank">Privacy Notice</a> and <a href="https://www.debtbusters.co.za/terms-and-conditions-turbo/" rel="noopener" target="_blank">Terms &amp; Conditions</a>.</p>
	</div>
</div>
</div>`;

	var croCLient = `<section class="cro-client">
	<div class="cro-client-wrapper container">
		<div class="cro-client-top">
			<div class="cro-client-left">
				<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/slider-image.png" alt="Happy couple" class="cro-client-left-img" loading="eager">
			</div>
			<div class="cro-client-right">
				<div class="cro-client-right-wrapper">
					<h2 class="cro-client-right-header">What our <span class="cro-client-right-headerSpan">clients</span> say</h2>
				<div class="swiper-container cro-swiperContainer">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper cro-swiperWrapper">
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								I was swimming in an overwhelming sea of debt and thought there was no help for my financial stress. But just one call to DebtBusters changed this feeling of helplessness and hopelessness into one of pure ecstasy. I have placed all my financial burdens on DebtBusters and have found instant relief and also some Ks in my pocket for essential household expenses. DebtBusters are professionals. The whole process of applying for debt relief is seamless. Thank you DebtBusters!
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Muhammad</span> Noordien</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
						<p class="cro-swiper-slide-para">
							For all the time I've been with DebtBusters, all my queries were attended to and even in difficulties, something was done to help me out. I'm thankful for your excellent services on this journey to my financial freedom. Thank you.
						</p>
						<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Amanda</span> Williams</h3>
					</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								My wife and I both had debt when we got married. We thought by combining it, the problem would be solved. Then, I was in a car accident, and everything changed. The hospital costs made everything more difficult, and the financial strain started to burden our relationship. But I came to the right place. Coming to DebtBusters was one of the best learning processes, and I am still smiling.
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">William</span> Baron</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								My sister went on drugs, and a lot of financial responsibility fell on to me. Eventually it got to a point where it went from one debt to the next debt and there was just not enough when I got paid my salary. I got to a point where I felt like this is it. DebtBusters called me and explained everything clearly. From there, I didn’t need to worry so much – they took care of everything, and I could breathe again. That was the most awesome time in my life, the day that DebtBusters came into my life.
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Bulelani</span> Nkosi</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								My experience with your service is indescribable. I have no words. I cannot thank Mr. Qenge enough for walking me through the process of applying for debt consolidation in your company. He was patient, kind and very helpful. My overall experience was magnificent.
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Ian</span> Arendse</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								I just got off a call with a lovely call agent and it honestly felt like my debt was immediately taken away (stress eased). Although I am still on this debt free journey, I believe it to be with the best Team ever.
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Brenda</span> Tladi</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								I knew there was more month than there was money. I knew I needed to find the best people, and then I got onto DebtBusters. At first, I felt like a failure, but I knew I needed to do this. Going to DebtBusters opened a lot of conversations, because it turns out a lot of people are also struggling. The beautiful thing about going under debt review is you learn how to manage your cash better. Completing the process gives you the feeling of achievement and allows you to start from a clean slate.
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Ryan</span> Keeter</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								DebtBusters has such kind, helpful staff. Not one person I spoke to was rude. They know we are stressed, they put you at ease. They understand people's predicaments. Best place ever. We were happy with this wonderful company. Thank you to all the staff. Carry on with your excellent service. <br>Thank you.
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Lynette</span> Mokoena</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								DebtBusters is top notch, in following up telephonically, and in providing the monthly report of creditors paid. Keep it up all the way through!
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Stefan</span> Van Wyk</h3>
						</div>
						<div class="swiper-slide cro-swiper-slide">
							<p class="cro-swiper-slide-para">
								Out of all the debt review companies it was the best experience so far. I can only thank you for everything as this process is never easy. You guys go the extra mile to make things better. Thank you sincerely from my side!
							</p>
							<h3 class="cro-swiper-slide-header">- <span class="cro-swiper-slide-header-span">Thabo</span> Roth</h3>
						</div>
					</div>
			
					<!-- If we need navigation buttons -->
					<div class="swiper-button-prev">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/left-arrow.png">
					</div>
					<div class="swiper-button-next">
						<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/right-arrow.png">
					</div>
				</div>
				</div>
			</div>
		</div>
		<div class="cro-client-bottom">
			<div class="cro-client-bottom-left">
				<h2 class="cro-client-bottom-leftText">Join thousands of happy, <span class="cro-client-bottom-leftText-span">debt-free</span> DebtBusters clients</h2>
			</div>
			<div class="cro-client-bottom-right">
				
				
			<h2 class="cro-client-bottom-right-text">Get my <span class="cro-client-bottom-right-text-span">Debt-free Plan</span></h2>
			</div>
		</div>
	</div>
</section>`;

	var croFooterimg = `<div class="cro-footerimg">
	<div class="cro-footerimg-wrapper">
		<div class="cro-footerimg-top">
			<img src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/footerR.png" alt="" class="cro-footerimg-img">
		</div>
		<div class="cro-footerimg-bottom">
			<span class="cro-footerimg-bottom-text">registered debt Counsellor NCRDC1801</span>
		</div>
	</div>
</div>`;


var croPicture = `<div class="cro-pic">
	<div class="cro-banner-img">
	  <div class="cro-banner-img-wrapper">
		<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/main-image.png" alt="Happy couple" class="cro-banner-imgImage" loading="eager">
	  </div>
	</div>
</div>`;

var storyImgNew =''+ 
'  <div class="cro-new-storyImg">'+ 
'      <div class="cro-new-storyImg-wrapper">'+ 
'          <img src="https://start-new.debtbusters.co.za/img/NEAzK8p99K-1800.webp" alt="" class="cro-new-storyImg-img">'+ 
'      </div>'+ 
'  </div>';


	  /* Variation Init */
	function init() {
		
		addScript();

		addClass("body","cro-test-userStory-t-2")

		addClass('body', 'cro-test-userStory')

		waitForElement(".cro-bannerText-point", function () {
			if (!document.querySelector(".cro-new-storyImg")) {
				insertHtml(".cro-bannerText-point", storyImgNew, "afterend");
			}
		});

		waitForElement(".py-5", function () {
			if (!document.querySelector(".cro-goodBye")) {
				insertHtml(".py-5", croGoodBye, "beforebegin");
			}
		});

		waitForElement(".cro-goodBye", function () {
			if (!document.querySelector(".cro-trusted")) {
				insertHtml(".cro-goodBye", croTrust, "afterend");
			}
		});

		waitForElement(".cro-form2", function () {
			if (!document.querySelector(".cro-question")) {
				insertHtml(".cro-form2", croqtn, "afterend");
			}
		});

		waitForElement(".landing .hubspot-form", function () {
			if (!document.querySelector(".cro-bannerText")) {
				insertHtml(".landing .hubspot-form", croBannerText, "beforebegin");
			}
		});

		waitForElement(".landing .hubspot-form .hbspt-form", function () {
			if (!document.querySelector(".cro-logos")) {
				insertHtml(".landing .hubspot-form .hbspt-form", croLogos, "afterend");
			}
		});

		waitForElement(".cro-trusted", function () {
			if (!document.querySelector(".cro-form2")) {
				insertHtml(".cro-trusted", croForm, "afterend");
			}
		});

		waitForElement(".w-full.h-full", function () {
			if (!document.querySelector(".cro-banner-img")) {
				insertHtml(".w-full.h-full", croBannerImg , "afterbegin");
			}
		});

		waitForElement(".py-8 a", function () {
			if (!document.querySelector(".cro-nav-number")) {
				waitForElement('.py-5 [href*="tel"]', function () {
					var newHref = document.querySelector('.py-5 [href*="tel"]').getAttribute('href')
					var newNbr =  newHref.replace('tel:', '')

					var croNavNum = `<div class="cro-nav-number">
					<div class="cro-nav-number-wrapper">
						<a href="${newHref}" class="cro-nav-number-link" target="_blank" rel="noopener noreferrer">
							<div class="cro-nav-numberImg">
								<img src="https://cdn-3.convertexperiments.com/uf/1004973/10041244/mobile.png" alt="" class="cro-nav-number-img">
							</div>
							<div class="cro-nav-numberNum">
								<span class="cro-nav-numberNum-num">${newNbr}</span>
							</div>
						</a>
					</div>
				   </div>`;
	
					insertHtml(".py-8 a", croNavNum, "afterend");
					
				})
			}
		});

		waitForElement(".landing .hubspot-form .hs-form-private", function () {
			if (!document.querySelector(".cro-form-upeerText")) {
				insertHtml(".landing .hubspot-form .hs-form-private", croUp, "beforebegin");
			}
		});

		waitForElement(".landing .hubspot-form .hs-form-private", function () {
			if (!document.querySelector(".cro-form-downText")) {
				insertHtml(".landing .hubspot-form .hs-form-private", croDown, "afterend");
			}
		});

		waitForElement(".cro-trusted", function () {
			if (!document.querySelector(".cro-client")) {
				insertHtml(".cro-trusted", croCLient, "beforebegin");
			}
		});

		waitForElement(".hubspot-form form .hs-submit input", function () {
			document.querySelector('.hubspot-form form .hs-submit input').value = 'Get my Debt-free Plan'
		});

		waitForSwiper(function(){
			swiperInitiate();
		})

		var url = window.location.pathname;

		if(url.indexOf('/june-2021-new-db-brand-lp-1-image/') != -1){
			document.querySelector('body').classList.add('cro-new-db-brand-lp-1-image')
		}

		if(url.indexOf('/july-2021-admarula-lp1/') != -1 ){
			document.querySelector('body').classList.add('cro-july-2021-admarula-lp1')

		}

		waitForElement(".cro-july-2021-admarula-lp1", function () {
			admarulaPage()
		});
		
		waitForElement('.landing .hubspot-form form.hs-form-private input', function(){
			clonedForm();
		});

		waitForElement('div.hbspt-form', function(){
				var threeSixtyImgContainer = document.querySelector('div.hbspt-form');
					threeSixtyImgContainer.addEventListener("DOMSubtreeModified", debounce(function(e) {   
						// if(document.querySelector('div.hbspt-form input[type="submit"]')){
						// 	document.querySelector('div.hbspt-form input[type="submit"]').value = 'Get my Debt-free Plan';
						// }

						if(!document.querySelector('.landing .hubspot-form form.hs-form-private')){
							threeSixtyImgContainer.classList.add('cro-t-hide')
						}
					   }), false); 
		});

		waitForElement(".cro-removeImg", function () {
			if (!document.querySelector(".cro-footerimg")) {
				insertHtml(".cro-removeImg", croFooterimg, "afterend");
			}
		});

		waitForElement('img[src="/img/neqU5xwpmm-640.jpeg"]', function(){
			var imgElement = document.querySelector('img[src="/img/neqU5xwpmm-640.jpeg"]');
			if (imgElement) {
			imgElement.closest('picture').classList.add('cro-removeImg');
			}
		});
	}

		function toggleSection(event) {
			var parentSection = event.target.closest('.cro-question-sec');
		
			var ansSection = parentSection.querySelector('.cro-question-secQtn-img');
			ansSection.classList.toggle('cro-question-secQtn-img-reverse');
		
			var answerSection = parentSection.querySelector('.cro-question-secTwo');
			answerSection.classList.toggle('cro-display');
		}

		live(".cro-question-secOne","click",function(){
			toggleSection(event);
		});

		live(".cro-client-bottom-right","click",function(){
			var target = document.querySelector('.cro-form-upeerText');
			if (target) {
				window.scrollTo({
					top: target.getBoundingClientRect().top + window.scrollY,
					behavior: 'smooth'
				});
			}
		});

	function admarulaPage(){

		// waitForElement(".cro-july-2021-admarula-lp1 .py-0 > div.relative > div.mb-10 > :nth-child(2)", function () {
		// 	document.querySelector('.cro-july-2021-admarula-lp1 .py-0 > div.relative > div.mb-10 > :nth-child(2)').classList.add('container')
		// });

		waitForElement(".cro-july-2021-admarula-lp1 .py-0 > div.relative > div.mb-10", function () {
			document.querySelector('.cro-july-2021-admarula-lp1 .py-0 > div.relative > div.mb-10').classList.add('container')
		});
	
		waitForElement(".cro-july-2021-admarula-lp1 .py-0 > div.relative > div:not(.mb-10)", function () {
			document.querySelector('.cro-july-2021-admarula-lp1 .py-0 > div.relative > div:not(.mb-10)').classList.add('container')
		});
		
		waitForElement(".cro-july-2021-admarula-lp1 .py-0 > .relative.container > a", function () {
			document.querySelector('.cro-july-2021-admarula-lp1 .py-0 > .relative.container > a').classList.add('container')
		});
		
		waitForElement(".landing .relative.container > .mb-10", function () {
			if (!document.querySelector(".cro-pic")) {
				insertHtml(".landing .relative.container > .mb-10", croPicture, "beforeend");
			}
		});
		
	}

	function clonedForm(){

			const originalForm = document.querySelector(".landing .hubspot-form form.hs-form-private");
			const clonedForm = originalForm.cloneNode(true);

			// Preserve the 'class' attribute
			clonedForm.setAttribute("class", originalForm.getAttribute("class"));

			// Append the cloned form to the target section
			const targetSection = document.querySelector(".cro-clonedForm");

			targetSection.innerHTML = '';
			targetSection.appendChild(clonedForm);

			// Add error messages after each input field
			const inputFields = clonedForm.querySelectorAll('.cro-clonedForm .hs-form-field:not([style="display: none;"]) .input'); // Modify the selector as needed

			inputFields.forEach(function(input) {
				const errorMessage = document.createElement("span");
				errorMessage.className = "cro-error-message"; // Add a CSS class for styling
				errorMessage.textContent = ""; //Please complete this required field.
				errorMessage.style.display = "none"; // Initially hide the error message
				input.parentNode.appendChild(errorMessage);
			});      

			// .cro-clonedForm .hs_submit.hs-submit
			document.querySelector('.cro-clonedForm .hs_submit.hs-submit').insertAdjacentHTML('afterbegin', '<span class="cro-error-message" style="display: none;">Please complete all required fields.</span>')
	}

	function validateAlphabets(input, selector) {
		// Use a regular expression to check if the input contains only alphabets
		var regex = /^[a-zA-Z]+$/;
		var errorMessage = document.querySelector(selector);
		var parent = errorMessage.closest('.hs-form-field')

		if (input.trim() === "") {
			// Input is blank
			errorMessage.textContent = "Please complete this required field.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}
			return "Input is blank. Please enter alphabets.";
		} else if (regex.test(input)) {
			// Input contains only alphabets
			if(parent){
				parent.classList.remove('cro_hs-error')
			}
			errorMessage.style.display = "none";
			return true;
		}else {
			// Input contains numbers or other symbols
			if(parent){
				parent.classList.remove('cro_hs-error')
			}

			errorMessage.style.display = "none";
			
		}
	}

	function validatePhoneNumber(phoneNumber, selector) {
		// Remove any non-digit characters from the input
		var errorMessage = document.querySelector(selector);
		var parent = errorMessage.closest('.hs-form-field')

		phoneNumber = phoneNumber.replace(/\D/g, '');
	
		if (phoneNumber.trim() === "") {
			// Input is blank
			errorMessage.textContent = "Please complete this required field.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}
			return "Phone number is blank. Please enter a valid phone number.";
		} else if (/^\d{9,11}$/.test(phoneNumber)) {
			// Input contains only digits and is in the range of 9 to 11 digits
			if(parent){
				parent.classList.remove('cro_hs-error')
			}
			errorMessage.style.display = "none";
			return true;
		} else {
			// Input is not within the valid range or contains non-digit characters
			errorMessage.textContent = "The number you entered is not in range.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}
			return "Invalid phone number. Please enter a valid phone number with 9 to 11 digits.";
		}
	}

	function validateEmail(email, selector) {
		// Regular expression pattern to validate email addresses
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var errorMessage = document.querySelector(selector);
		var parent = errorMessage.closest('.hs-form-field')

		if (email.trim() === "") {
			// Input is blank
			errorMessage.textContent = "Please complete this required field.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}
			return "Email address is blank. Please enter a valid email address.";
		}else if (emailPattern.test(email)) {
			// Input matches the email pattern
			errorMessage.style.display = "none";
			if(parent){
				parent.classList.remove('cro_hs-error')
			}
			return true;
		} else {
			// Input does not match the email pattern
			errorMessage.textContent = "Please enter a valid email address.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}
			return false;
		}
	}


	live('.cro-clonedForm input[name="firstname"]',"input",function(){
		var userInput = this.value; // Replace with the user's input
	 	validateAlphabets(userInput, '.cro-clonedForm .hs-firstname .cro-error-message');
	})

	live('.cro-clonedForm input[name="lastname"]',"input",function(){
		var userInput = this.value; // Replace with the user's input
	 	validateAlphabets(userInput, '.cro-clonedForm .hs_lastname .cro-error-message');
	})

	live('.cro-clonedForm input[name="phone"]',"input",function(){
		var userPhoneNumber = this.value; // Replace with the user's input
		validatePhoneNumber(userPhoneNumber , '.cro-clonedForm .hs_phone .cro-error-message');
	})

	live('.cro-clonedForm input[name="email"]',"input",function(){
		var userEmail = this.value; // Replace with the user's input
		validateEmail(userEmail , '.cro-clonedForm .hs_email  .cro-error-message');
	})

	live('.cro-clonedForm input[name="id_number"]',"input",function(){
		var userId = this.value; // Replace with the user's input
		var errorMessage = document.querySelector('.cro-clonedForm .hs_id_number .cro-error-message');
		var parent = errorMessage.closest('.hs-form-field')

		if ( userId.trim() === "") {
			errorMessage.textContent = "Please complete this required field.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}

		}else if(window.validateID && window.validateID(userId) == true){
			errorMessage.style.display = "none";
			if(parent){
				parent.classList.remove('cro_hs-error')
			}
		}else{
			errorMessage.textContent = "Please enter a valid ID number.";
			errorMessage.style.display = "block";
			if(parent){
				parent.classList.add('cro_hs-error')
			}
		}
		
	})

	live(".cro-clonedForm .hs_submit.hs-submit input","click",function(e){
		e.preventDefault();

		var fName = document.querySelector('.cro-clonedForm [name="firstname"]').value
		var lName = document.querySelector('.cro-clonedForm [name="lastname"]').value

		var user_phone = document.querySelector('.cro-clonedForm [name="phone"]').value
		var user_email = document.querySelector('.cro-clonedForm [name="email"]').value

		var idNbr = document.querySelector('.cro-clonedForm [name="id_number"]')
		
		var idmUrl = window.location.href
		var gaclientId = document.querySelector('.cro-clonedForm .hs_gaclientid input')
		var gaId = document.querySelector('.cro-clonedForm .hs_gatid input')
		var web_src = document.querySelector('.cro-clonedForm .hs_web_source input')
		var hsecommerceid = document.querySelector('.cro-clonedForm .hs_ecommerceid input')

		if(idNbr){
			idNbr = idNbr.value
		}

		if( gaclientId){
			gaclientId =  gaclientId.value;
		}

		if(gaId){
			gaId =  gaId.value;
		}

		if(web_src){
			web_src =  web_src.value;
		}

		if(hsecommerceid){
			hsecommerceid =  hsecommerceid.value;
		}

		// Define your form data as an object
	  	var formData = {
			firstname: fName,
			lastname: lName,
			phone: user_phone,
			email: user_email,
			id_number: idNbr,
			idm_touchpoints: idmUrl,
			referrer: "DebtBusters",
			gaclientid: gaclientId,
			gatid: gaId,
			web_source: web_src,
			nona_medium: "direct",
			nona_referrer: "none",
			submit_url: idmUrl,
			ecommerceid: hsecommerceid
		};
	  
	  	// sendFormData(formData);
		

		if(!idNbr){
			if(fName.length > 0 && lName.length > 0 && user_phone.length > 0 && user_email.length > 0 && !document.querySelector('.cro_hs-error')){
				document.querySelector('.cro-clonedForm .hs_submit.hs-submit .cro-error-message').style.display = "none";
				console.log('Submit The form')
				idNbr=''
				
				console.log('DATA: ', formData)
				document.querySelector('.cro-clonedForm input[type="submit"]').value = 'Submit';
				sendFormData(formData);

			}else{
				document.querySelector('.cro-clonedForm .hs_submit.hs-submit .cro-error-message').style.display = "block";
				console.log('Please complete all required fields.')
			}
		}else{
			if(fName.length > 0 && lName.length > 0 && user_phone.length > 0 && user_email.length > 0 && idNbr.length > 0 && !document.querySelector('.cro_hs-error')){
				document.querySelector('.cro-clonedForm .hs_submit.hs-submit .cro-error-message').style.display = "none";
				console.log('Submit The form')
				
				console.log('DATA: ', formData)
				document.querySelector('.cro-clonedForm input[type="submit"]').value = 'Submit';
				sendFormData(formData);

			}else{
				document.querySelector('.cro-clonedForm .hs_submit.hs-submit .cro-error-message').style.display = "block";
				console.log('Please complete all required fields.')
			}
		}
	});

	async function sendFormData(formData) {
		const boundary = generateBoundary();
		
		// Build the form data string dynamically from the provided object
		const formDataString = Object.keys(formData)
		  .map(key => `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${formData[key]}`)
		  .join('\r\n');
	  
		// Add the closing boundary
		const finalFormData = `${formDataString}\r\n--${boundary}--`;
	  
		try {
		  const response = await fetch("https://leadbridge.debtbusters.co.za/bridge.php", {
			method: "POST",
			headers: {
			  "Content-Type": `multipart/form-data; boundary=${boundary}`,
			},
			body: finalFormData,
		  });
	  
		  if (response.status === 200) {
			const responseData = await response.json();
			console.log("Status 200: Request was successful.");
			console.log("Response Data:", responseData);

			waitForElement('div:not(.cro-clonedForm) > form [name="ecommerceid"]', function(){
				var inputValue = document.querySelector('div:not(.cro-clonedForm) > form [name="ecommerceid"]').value
				var newredirectURL = "https://www.debtbusters.co.za/thank-you/?leadref="+inputValue+"&referrer=DebtBusters&submit_url="+window.location.href+"";

				if (inputValue.length > 0) {
					
					setTimeout(function(){
						document.querySelector('.cro-form2-right').classList.add('cro-t-hide')
						setTimeout(function(){
							window.location.href = newredirectURL;
						},2000)
					},500)

					
				} 
			});

		  } else {
			console.error("Error: Request failed with status " + response.status);
		  }
		} catch (error) {
		  console.error("Error:", error);
		}
	  }
	  
	  function generateBoundary() {
		return "----WebKitFormBoundary" + Math.random().toString(36).substring(2);
	  }

		/* Initialise variation */
		var currentPageUrl = window.location.href;

		var urlsToMatch = [
			"https://start-new.debtbusters.co.za/landing-pages/2022-07-image-text-above-lp2/",
			"https://start-new.debtbusters.co.za/landing-pages/omni-lp",
			// Add more URLs if needed
		];

		if (urlsToMatch.indexOf(currentPageUrl) !== -1) {
			console.log(currentPageUrl);
		} else if (urlsToMatch.indexOf("https://start-new.debtbusters.co.za/landing-pages/july-2021-admarula-lp1/") !== -1) {
			waitForElement('body', init);
			console.log("Special URL: " + currentPageUrl);
		} else {
			waitForElement('body', init);
		}
	 
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
})();