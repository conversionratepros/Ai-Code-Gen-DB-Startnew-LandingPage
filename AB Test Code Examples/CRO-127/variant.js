(function () {
  try {
    var debug = 0;
    var variation_name = "cro-debt-3-reviewsTestimonials";

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
      addEvent(context || document, event, function (e) {
        var found,
          el = e.target || e.srcElement;
        while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
        if (found) callback.call(el, e);
      });
    }

    function insertHtml(selector, content, position) {
      var el = document.querySelector(selector);
      if (!position) position = "afterend";
      if (el && content) {
        el.insertAdjacentHTML(position, content);
      }
    }

    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) el.classList.add(cls);
    }

    function removeClass(el, cls) {
      var el = document.querySelector(el);
      if (el && el.classList.contains(cls)) el.classList.remove(cls);
    }

    function addScript() {
      if (!document.getElementById('youtube-api')) {
        var tag = document.createElement("script");
        tag.id = "youtube-api";
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }

    var croReviews = `<section class="cro-debt-3-reviews bg-dark-green-new">
      <div class="cro-debt-3-reviews-wrapper">
          <div class="cro-debt-3-reviews-inner">
              <h2 class="text-center">Hear what our clients have to say about their journey.</h2>
              <div class="cro-debt-3-bg-dark-green-new">
                  <div class="container grid lg:grid-cols-3 items-stretch gap-x-10 gap-y-8 lg:gap-y-16">
                    <div class="flex flex-col pt-16 cro-debt-3-bg-card-1">
                      <div class="grow flex flex-col mb-5 bg-white rounded-xl">
                        <picture><source type="image/webp" srcset="/uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_240.webp 240w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_320.webp 320w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_480.webp 480w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_560.webp 560w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_640.webp 640w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_768.webp 768w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_1024.webp 1024w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_1366.webp 1366w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_1600.webp 1600w, /uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0__ecio_1920.webp 1920w" sizes="(min-width: 1536px) 12.5vw, (min-width: 1280px) 15vw, (min-width: 1024px) 18.75vw, (min-width: 768px) 16.67vw, (min-width: 640px) 20vw, 40vw">
                          <img src="/uploads/60e12a23-dc66-4710-9c73-6cdf7e77baa0.jpg" alt="Mawande" class="relative rounded-full mx-auto object-cover w-32 lg:w-48 -mb-16 -translate-y-16" loading="lazy" decoding="async">
                        </picture>
                        <div class="grow flex flex-col">
                          <div class="cro-debt-3-bg-card-main">
                            <div class="cro-debt-3-bg-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                    <path d="M13.5466 2.67596C12.6999 2.89896 11.7404 3.34495 10.6679 4.01394C9.65193 4.62718 8.69238 5.37979 7.78927 6.27178C6.88617 7.10801 6.1524 8.02787 5.58796 9.03136C5.02352 10.0348 4.79774 11.0383 4.91063 12.0418C5.02352 12.4321 5.33396 12.6551 5.84196 12.7108C6.34995 12.7666 6.82973 12.7944 7.28128 12.7944C8.69238 12.7944 9.90593 13.2683 10.9219 14.216C11.9944 15.108 12.5306 16.3902 12.5306 18.0627C12.5306 19.6794 11.9379 21.0732 10.7526 22.2439C9.6237 23.4146 8.32549 24 6.85795 24C4.60019 24 2.87865 23.1916 1.69332 21.5749C0.56444 19.9582 0 17.9791 0 15.6376C0 13.7979 0.366886 12.0418 1.10066 10.3693C1.89087 8.64111 2.90687 7.08014 4.14864 5.68641C5.3904 4.29268 6.82973 3.09408 8.4666 2.09059C10.1035 1.08711 11.7968 0.390242 13.5466 0V2.67596ZM30 2.67596C29.1533 2.89896 28.1938 3.34495 27.1214 4.01394C26.1054 4.62718 25.1458 5.37979 24.2427 6.27178C23.3396 7.10801 22.6058 8.02787 22.0414 9.03136C21.4769 10.0348 21.2512 11.0383 21.3641 12.0418C21.4769 12.4321 21.7874 12.6551 22.2954 12.7108C22.8034 12.7666 23.2832 12.7944 23.7347 12.7944C25.1458 12.7944 26.3594 13.2683 27.3753 14.216C28.4478 15.108 28.984 16.3902 28.984 18.0627C28.984 19.6794 28.3913 21.0732 27.206 22.2439C26.0771 23.4146 24.7789 24 23.3114 24C21.0536 24 19.3321 23.1916 18.1468 21.5749C17.0179 19.9582 16.4534 17.9791 16.4534 15.6376C16.4534 13.7979 16.8203 12.0418 17.5541 10.3693C18.3443 8.64111 19.3603 7.08014 20.6021 5.68641C21.8438 4.29268 23.2832 3.09408 24.92 2.09059C26.5569 1.08711 28.2502 0.390242 30 0V2.67596Z" fill="black"></path>
                                </svg>
                                <p class="text-lg font-semibold mb-2">
                                  How I turned my life around.
                                </p>
                            </div>
                          </div>
                          <p class="text-sm mb-4">
                            When I found DebtBusters online, I got to trust them because of their online presence and there was no judgement. They helped me to plan my budget.
                          </p>
                          <div class="flex items-center mt-auto cro-debt-3-bg-card-rating">
                            <p class="text-sm mb-0 mr-5">
                              <strong>Mawande</strong><b>|</b>Cape Town
                            </p>
                            <div class="flex items-center ml-auto">
                              <span class="text-dark-green-new">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <a href="#" data-video-id="AYtAtHZpAj0" class="btn quaternary md inline-flex items-center" data-video-id="dQw4w9WgXcQ">
                          <span class="icon material-symbols-rounded !text-4xl mr-2" style="opacity: 1; width: auto;">play_circle</span>
                          Watch Mawande’s story
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col pt-16 cro-debt-3-bg-card-2">
                      <div class="grow flex flex-col mb-5 bg-white rounded-xl">
                        <picture><source type="image/webp" srcset="/uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_240.webp 240w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_320.webp 320w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_480.webp 480w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_560.webp 560w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_640.webp 640w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_768.webp 768w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_1024.webp 1024w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_1366.webp 1366w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_1600.webp 1600w, /uploads/69486d82-d5b2-4195-8d10-071eaca0a14a__ecio_1920.webp 1920w" sizes="(min-width: 1536px) 12.5vw, (min-width: 1280px) 15vw, (min-width: 1024px) 18.75vw, (min-width: 768px) 16.67vw, (min-width: 640px) 20vw, 40vw">
                          <img src="/uploads/69486d82-d5b2-4195-8d10-071eaca0a14a.jpg" alt="Chantal" class="relative rounded-full mx-auto object-cover w-32 lg:w-48 -mb-16 -translate-y-16" loading="lazy" decoding="async">
                        </picture>
                        <div class="grow flex flex-col ">
                          <div class="cro-debt-3-bg-card-main">
                              <div class="cro-debt-3-bg-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                    <path d="M13.5466 2.67596C12.6999 2.89896 11.7404 3.34495 10.6679 4.01394C9.65193 4.62718 8.69238 5.37979 7.78927 6.27178C6.88617 7.10801 6.1524 8.02787 5.58796 9.03136C5.02352 10.0348 4.79774 11.0383 4.91063 12.0418C5.02352 12.4321 5.33396 12.6551 5.84196 12.7108C6.34995 12.7666 6.82973 12.7944 7.28128 12.7944C8.69238 12.7944 9.90593 13.2683 10.9219 14.216C11.9944 15.108 12.5306 16.3902 12.5306 18.0627C12.5306 19.6794 11.9379 21.0732 10.7526 22.2439C9.6237 23.4146 8.32549 24 6.85795 24C4.60019 24 2.87865 23.1916 1.69332 21.5749C0.56444 19.9582 0 17.9791 0 15.6376C0 13.7979 0.366886 12.0418 1.10066 10.3693C1.89087 8.64111 2.90687 7.08014 4.14864 5.68641C5.3904 4.29268 6.82973 3.09408 8.4666 2.09059C10.1035 1.08711 11.7968 0.390242 13.5466 0V2.67596ZM30 2.67596C29.1533 2.89896 28.1938 3.34495 27.1214 4.01394C26.1054 4.62718 25.1458 5.37979 24.2427 6.27178C23.3396 7.10801 22.6058 8.02787 22.0414 9.03136C21.4769 10.0348 21.2512 11.0383 21.3641 12.0418C21.4769 12.4321 21.7874 12.6551 22.2954 12.7108C22.8034 12.7666 23.2832 12.7944 23.7347 12.7944C25.1458 12.7944 26.3594 13.2683 27.3753 14.216C28.4478 15.108 28.984 16.3902 28.984 18.0627C28.984 19.6794 28.3913 21.0732 27.206 22.2439C26.0771 23.4146 24.7789 24 23.3114 24C21.0536 24 19.3321 23.1916 18.1468 21.5749C17.0179 19.9582 16.4534 17.9791 16.4534 15.6376C16.4534 13.7979 16.8203 12.0418 17.5541 10.3693C18.3443 8.64111 19.3603 7.08014 20.6021 5.68641C21.8438 4.29268 23.2832 3.09408 24.92 2.09059C26.5569 1.08711 28.2502 0.390242 30 0V2.67596Z" fill="black"></path>
                                </svg>
                                <p class="text-lg font-semibold mb-2">
                                  We got the solution through DebtBusters.
                                </p>
                            </div>
                        </div>
                          <p class="text-sm mb-4">
                            When we had to decide between paying our debt or buying food, it was just the final straw. Luckily we got the solution through DebtBusters. The phone calls stopped.
                          </p>
                          <div class="flex items-center mt-auto cro-debt-3-bg-card-rating">
                            <p class="text-sm mb-0 mr-5">
                              <strong>Chantal</strong><b>|</b>Cape Town
                            </p>
                            <div class="flex items-center ml-auto">
                              <span class="text-dark-green-new">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <a href="#" data-video-id="a7L-9PIVgXA" class="btn quaternary md inline-flex items-center">
                          <span class="icon material-symbols-rounded !text-4xl mr-2" style="opacity: 1; width: auto;">play_circle</span>
                          Watch Chantal's story
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col pt-16 cro-debt-3-bg-card-3">
                      <div class="grow flex flex-col mb-5 bg-white rounded-xl">
                        <picture><source type="image/webp" srcset="/uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_240.webp 240w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_320.webp 320w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_480.webp 480w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_560.webp 560w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_640.webp 640w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_768.webp 768w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_1024.webp 1024w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_1366.webp 1366w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_1600.webp 1600w, /uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0__ecio_1920.webp 1920w" sizes="(min-width: 1536px) 12.5vw, (min-width: 1280px) 15vw, (min-width: 1024px) 18.75vw, (min-width: 768px) 16.67vw, (min-width: 640px) 20vw, 40vw">
                          <img src="/uploads/d6e6f575-a0b1-479f-9ee7-5cf3d1201bb0.png" alt="Dorianne" class="relative rounded-full mx-auto object-cover w-32 lg:w-48 -mb-16 -translate-y-16" loading="lazy" decoding="async">
                        </picture>
                        <div class="grow flex flex-col ">
                          <div class="cro-debt-3-bg-card-main">
                            <div class="cro-debt-3-bg-card">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                  <path d="M13.5466 2.67596C12.6999 2.89896 11.7404 3.34495 10.6679 4.01394C9.65193 4.62718 8.69238 5.37979 7.78927 6.27178C6.88617 7.10801 6.1524 8.02787 5.58796 9.03136C5.02352 10.0348 4.79774 11.0383 4.91063 12.0418C5.02352 12.4321 5.33396 12.6551 5.84196 12.7108C6.34995 12.7666 6.82973 12.7944 7.28128 12.7944C8.69238 12.7944 9.90593 13.2683 10.9219 14.216C11.9944 15.108 12.5306 16.3902 12.5306 18.0627C12.5306 19.6794 11.9379 21.0732 10.7526 22.2439C9.6237 23.4146 8.32549 24 6.85795 24C4.60019 24 2.87865 23.1916 1.69332 21.5749C0.56444 19.9582 0 17.9791 0 15.6376C0 13.7979 0.366886 12.0418 1.10066 10.3693C1.89087 8.64111 2.90687 7.08014 4.14864 5.68641C5.3904 4.29268 6.82973 3.09408 8.4666 2.09059C10.1035 1.08711 11.7968 0.390242 13.5466 0V2.67596ZM30 2.67596C29.1533 2.89896 28.1938 3.34495 27.1214 4.01394C26.1054 4.62718 25.1458 5.37979 24.2427 6.27178C23.3396 7.10801 22.6058 8.02787 22.0414 9.03136C21.4769 10.0348 21.2512 11.0383 21.3641 12.0418C21.4769 12.4321 21.7874 12.6551 22.2954 12.7108C22.8034 12.7666 23.2832 12.7944 23.7347 12.7944C25.1458 12.7944 26.3594 13.2683 27.3753 14.216C28.4478 15.108 28.984 16.3902 28.984 18.0627C28.984 19.6794 28.3913 21.0732 27.206 22.2439C26.0771 23.4146 24.7789 24 23.3114 24C21.0536 24 19.3321 23.1916 18.1468 21.5749C17.0179 19.9582 16.4534 17.9791 16.4534 15.6376C16.4534 13.7979 16.8203 12.0418 17.5541 10.3693C18.3443 8.64111 19.3603 7.08014 20.6021 5.68641C21.8438 4.29268 23.2832 3.09408 24.92 2.09059C26.5569 1.08711 28.2502 0.390242 30 0V2.67596Z" fill="black"></path>
                              </svg>
                              <p class="text-lg font-semibold mb-2">
                                DebtBusters halved my monthly debt repayments.
                              </p>
                            </div>
                          </div>
                          <p class="text-sm mb-4">
                            DebtBusters gave me the most amazing explanation of what debt review is. They were very friendly and kind, and helped calm me down. I look back now at what a blessing this was.
                          </p>
                          <div class="flex items-center mt-auto cro-debt-3-bg-card-rating">
                            <p class="text-sm mb-0 mr-5">
                              <strong>Dorianne</strong><b>|</b>Gauteng
                            </p>
                            <div class="flex items-center ml-auto">
                              <span class="text-dark-green-new">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <a href="#" data-video-id="9_7hV7Wa4Xs" class="btn quaternary md inline-flex items-center">
                          <span class="icon material-symbols-rounded !text-4xl mr-2" style="opacity: 1; width: auto;">play_circle</span>
                          Watch Dorianne's story
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col pt-16 cro-debt-3-bg-card-4">
                      <div class="grow flex flex-col mb-5 bg-white rounded-xl">
                        <picture><source type="image/webp" srcset="/uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_240.webp 240w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_320.webp 320w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_480.webp 480w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_560.webp 560w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_640.webp 640w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_768.webp 768w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_1024.webp 1024w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_1366.webp 1366w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_1600.webp 1600w, /uploads/00780da8-2c80-490c-8e02-74c17579e842__ecio_1920.webp 1920w" sizes="(min-width: 1536px) 12.5vw, (min-width: 1280px) 15vw, (min-width: 1024px) 18.75vw, (min-width: 768px) 16.67vw, (min-width: 640px) 20vw, 40vw">
                          <img src="/uploads/00780da8-2c80-490c-8e02-74c17579e842.png" alt="Yando" class="relative rounded-full mx-auto object-cover w-32 lg:w-48 -mb-16 -translate-y-16" loading="lazy" decoding="async">
                        </picture>
                        <div class="grow flex flex-col ">
                          <div class="cro-debt-3-bg-card-main">
                            <div class="cro-debt-3-bg-card">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                  <path d="M13.5466 2.67596C12.6999 2.89896 11.7404 3.34495 10.6679 4.01394C9.65193 4.62718 8.69238 5.37979 7.78927 6.27178C6.88617 7.10801 6.1524 8.02787 5.58796 9.03136C5.02352 10.0348 4.79774 11.0383 4.91063 12.0418C5.02352 12.4321 5.33396 12.6551 5.84196 12.7108C6.34995 12.7666 6.82973 12.7944 7.28128 12.7944C8.69238 12.7944 9.90593 13.2683 10.9219 14.216C11.9944 15.108 12.5306 16.3902 12.5306 18.0627C12.5306 19.6794 11.9379 21.0732 10.7526 22.2439C9.6237 23.4146 8.32549 24 6.85795 24C4.60019 24 2.87865 23.1916 1.69332 21.5749C0.56444 19.9582 0 17.9791 0 15.6376C0 13.7979 0.366886 12.0418 1.10066 10.3693C1.89087 8.64111 2.90687 7.08014 4.14864 5.68641C5.3904 4.29268 6.82973 3.09408 8.4666 2.09059C10.1035 1.08711 11.7968 0.390242 13.5466 0V2.67596ZM30 2.67596C29.1533 2.89896 28.1938 3.34495 27.1214 4.01394C26.1054 4.62718 25.1458 5.37979 24.2427 6.27178C23.3396 7.10801 22.6058 8.02787 22.0414 9.03136C21.4769 10.0348 21.2512 11.0383 21.3641 12.0418C21.4769 12.4321 21.7874 12.6551 22.2954 12.7108C22.8034 12.7666 23.2832 12.7944 23.7347 12.7944C25.1458 12.7944 26.3594 13.2683 27.3753 14.216C28.4478 15.108 28.984 16.3902 28.984 18.0627C28.984 19.6794 28.3913 21.0732 27.206 22.2439C26.0771 23.4146 24.7789 24 23.3114 24C21.0536 24 19.3321 23.1916 18.1468 21.5749C17.0179 19.9582 16.4534 17.9791 16.4534 15.6376C16.4534 13.7979 16.8203 12.0418 17.5541 10.3693C18.3443 8.64111 19.3603 7.08014 20.6021 5.68641C21.8438 4.29268 23.2832 3.09408 24.92 2.09059C26.5569 1.08711 28.2502 0.390242 30 0V2.67596Z" fill="black"/>
                              </svg>
                              <p class="text-lg font-semibold mb-2">
                                  DebtBusters reduced my debt from R16k to R7k a month.
                              </p>
                            </div>
                          </div>
                          <p class="text-sm mb-4">
                              That initial phone call with DebtBusters was heartwarming, I finally felt like there was somebody who understands. I felt like I was getting a little bit of myself back that I lost along the way.
                          </p>
                          <div class="flex items-center mt-auto cro-debt-3-bg-card-rating">
                            <p class="text-sm mb-0 mr-5">
                              <strong>Yando</strong><b>|</b>Cape Town
                            </p>
                            <div class="flex items-center ml-auto">
                              <span class="text-dark-green-new">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <a href="#" data-video-id="kbmmo9djZus" class="btn quaternary md inline-flex items-center">
                          <span class="icon material-symbols-rounded !text-4xl mr-2" style="opacity: 1; width: auto;">play_circle</span>
                          Watch Yando's story
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col pt-16 cro-debt-3-bg-card-5">
                      <div class="grow flex flex-col mb-5 bg-white rounded-xl">
                        <picture><source type="image/webp" srcset="/uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_240.webp 240w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_320.webp 320w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_480.webp 480w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_560.webp 560w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_640.webp 640w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_768.webp 768w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_1024.webp 1024w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_1366.webp 1366w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_1600.webp 1600w, /uploads/53625ebd-4b86-4861-878d-11d973f54a1e__ecio_1920.webp 1920w" sizes="(min-width: 1536px) 12.5vw, (min-width: 1280px) 15vw, (min-width: 1024px) 18.75vw, (min-width: 768px) 16.67vw, (min-width: 640px) 20vw, 40vw">
                          <img src="/uploads/53625ebd-4b86-4861-878d-11d973f54a1e.png" alt="Nicole" class="relative rounded-full mx-auto object-cover w-32 lg:w-48 -mb-16 -translate-y-16" loading="lazy" decoding="async">
                        </picture>
                        <div class="grow flex flex-col">
                          <div class="cro-debt-3-bg-card-main">
                            <div class="cro-debt-3-bg-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                    <path d="M13.5466 2.67596C12.6999 2.89896 11.7404 3.34495 10.6679 4.01394C9.65193 4.62718 8.69238 5.37979 7.78927 6.27178C6.88617 7.10801 6.1524 8.02787 5.58796 9.03136C5.02352 10.0348 4.79774 11.0383 4.91063 12.0418C5.02352 12.4321 5.33396 12.6551 5.84196 12.7108C6.34995 12.7666 6.82973 12.7944 7.28128 12.7944C8.69238 12.7944 9.90593 13.2683 10.9219 14.216C11.9944 15.108 12.5306 16.3902 12.5306 18.0627C12.5306 19.6794 11.9379 21.0732 10.7526 22.2439C9.6237 23.4146 8.32549 24 6.85795 24C4.60019 24 2.87865 23.1916 1.69332 21.5749C0.56444 19.9582 0 17.9791 0 15.6376C0 13.7979 0.366886 12.0418 1.10066 10.3693C1.89087 8.64111 2.90687 7.08014 4.14864 5.68641C5.3904 4.29268 6.82973 3.09408 8.4666 2.09059C10.1035 1.08711 11.7968 0.390242 13.5466 0V2.67596ZM30 2.67596C29.1533 2.89896 28.1938 3.34495 27.1214 4.01394C26.1054 4.62718 25.1458 5.37979 24.2427 6.27178C23.3396 7.10801 22.6058 8.02787 22.0414 9.03136C21.4769 10.0348 21.2512 11.0383 21.3641 12.0418C21.4769 12.4321 21.7874 12.6551 22.2954 12.7108C22.8034 12.7666 23.2832 12.7944 23.7347 12.7944C25.1458 12.7944 26.3594 13.2683 27.3753 14.216C28.4478 15.108 28.984 16.3902 28.984 18.0627C28.984 19.6794 28.3913 21.0732 27.206 22.2439C26.0771 23.4146 24.7789 24 23.3114 24C21.0536 24 19.3321 23.1916 18.1468 21.5749C17.0179 19.9582 16.4534 17.9791 16.4534 15.6376C16.4534 13.7979 16.8203 12.0418 17.5541 10.3693C18.3443 8.64111 19.3603 7.08014 20.6021 5.68641C21.8438 4.29268 23.2832 3.09408 24.92 2.09059C26.5569 1.08711 28.2502 0.390242 30 0V2.67596Z" fill="black"></path>
                                </svg>
                                <p class="text-lg font-semibold mb-2">
                                  The DebtBusters agents were on top of things.
                                </p>
                            </div>
                        </div>
                          <p class="text-sm mb-4">
                            The moment I realised I needed to do something, was when my debt was more than my income. My best guy friend works for DebtBusters and told me about them. Whenever I needed something or had a question, the DebtBusters agents were on top of things.
                          </p>
                          <div class="flex items-center mt-auto cro-debt-3-bg-card-rating">
                            <p class="text-sm mb-0 mr-5">
                              <strong>Nicole</strong><b>|</b>Cape Town
                            </p>
                            <div class="flex items-center ml-auto">
                              <span class="text-dark-green-new">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <a href="#" data-video-id="0RczVGjDhvo" class="btn quaternary md inline-flex items-center">
                          <span class="icon material-symbols-rounded !text-4xl mr-2" style="opacity: 1; width: auto;">play_circle</span>
                          Watch Nicole’s story
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col pt-16 cro-debt-3-bg-card-6">
                      <div class="grow flex flex-col mb-5 bg-white rounded-xl">
                        <picture><source type="image/webp" srcset="/uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_240.webp 240w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_320.webp 320w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_480.webp 480w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_560.webp 560w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_640.webp 640w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_768.webp 768w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_1024.webp 1024w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_1366.webp 1366w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_1600.webp 1600w, /uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05__ecio_1920.webp 1920w" sizes="(min-width: 1536px) 12.5vw, (min-width: 1280px) 15vw, (min-width: 1024px) 18.75vw, (min-width: 768px) 16.67vw, (min-width: 640px) 20vw, 40vw">
                          <img src="/uploads/0309a4e6-9e93-4acc-8a41-91ae00c16a05.png" alt="Yvonne" class="relative rounded-full mx-auto object-cover w-32 lg:w-48 -mb-16 -translate-y-16" loading="lazy" decoding="async">
                        </picture>
                        <div class="grow flex flex-col ">
                          <div class="cro-debt-3-bg-card-main">
                            <div class="cro-debt-3-bg-card">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                  <path d="M13.5466 2.67596C12.6999 2.89896 11.7404 3.34495 10.6679 4.01394C9.65193 4.62718 8.69238 5.37979 7.78927 6.27178C6.88617 7.10801 6.1524 8.02787 5.58796 9.03136C5.02352 10.0348 4.79774 11.0383 4.91063 12.0418C5.02352 12.4321 5.33396 12.6551 5.84196 12.7108C6.34995 12.7666 6.82973 12.7944 7.28128 12.7944C8.69238 12.7944 9.90593 13.2683 10.9219 14.216C11.9944 15.108 12.5306 16.3902 12.5306 18.0627C12.5306 19.6794 11.9379 21.0732 10.7526 22.2439C9.6237 23.4146 8.32549 24 6.85795 24C4.60019 24 2.87865 23.1916 1.69332 21.5749C0.56444 19.9582 0 17.9791 0 15.6376C0 13.7979 0.366886 12.0418 1.10066 10.3693C1.89087 8.64111 2.90687 7.08014 4.14864 5.68641C5.3904 4.29268 6.82973 3.09408 8.4666 2.09059C10.1035 1.08711 11.7968 0.390242 13.5466 0V2.67596ZM30 2.67596C29.1533 2.89896 28.1938 3.34495 27.1214 4.01394C26.1054 4.62718 25.1458 5.37979 24.2427 6.27178C23.3396 7.10801 22.6058 8.02787 22.0414 9.03136C21.4769 10.0348 21.2512 11.0383 21.3641 12.0418C21.4769 12.4321 21.7874 12.6551 22.2954 12.7108C22.8034 12.7666 23.2832 12.7944 23.7347 12.7944C25.1458 12.7944 26.3594 13.2683 27.3753 14.216C28.4478 15.108 28.984 16.3902 28.984 18.0627C28.984 19.6794 28.3913 21.0732 27.206 22.2439C26.0771 23.4146 24.7789 24 23.3114 24C21.0536 24 19.3321 23.1916 18.1468 21.5749C17.0179 19.9582 16.4534 17.9791 16.4534 15.6376C16.4534 13.7979 16.8203 12.0418 17.5541 10.3693C18.3443 8.64111 19.3603 7.08014 20.6021 5.68641C21.8438 4.29268 23.2832 3.09408 24.92 2.09059C26.5569 1.08711 28.2502 0.390242 30 0V2.67596Z" fill="black"></path>
                              </svg>
                              <p class="text-lg font-semibold mb-2">
                                It gave me financial freedom.
                              </p>
                            </div>
                          </div>
                          <p class="text-sm mb-4">
                            When I went into debt review, I owed R500,000. DebtBusters were very good at explaining how everything worked. Going with them halved my instalments, it gave me financial freedom as well.
                          </p>
                          <div class="flex items-center mt-auto cro-debt-3-bg-card-rating">
                            <p class="text-sm mb-0 mr-5">
                              <strong>Yvonne</strong><b>|</b>Cape Town
                            </p>
                            <div class="flex items-center ml-auto">
                              <span class="text-dark-green-new">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <a href="#" data-video-id="fGqGHafp86M" class="btn quaternary md inline-flex items-center">
                          <span class="icon material-symbols-rounded !text-4xl mr-2" style="opacity: 1; width: auto;">play_circle</span>
                          Watch Yvonne's story
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>`;

    var croModalVideo = `
      <section class="cro-debt-3-video">
        <div id="cro-debt-3-videoModal" class="cro-debt-3-modal" style="display: none;">
          <div class="cro-debt-3-modal-content">
            <div class="cro-debt-3-close">
              <span class="icon material-symbols-rounded" style="opacity: 1; width: auto;">close</span>
            </div>
            <div class="cro-debt-3-video-container lg:p-20">
              <div id="cVideo" class="mediaHero__videoHolder z-0"></div>
            </div>
          </div>
        </div>
      </section>`;

    // Global player ref
    var ytPlayer;

    function loadYouTubeIframe(videoId) {
      const container = document.querySelector("#cVideo");
      if (!container) return;

      container.innerHTML = '<div id="croYouTubePlayerContainer"></div>';

      // Wait for YT API
      if (typeof YT !== "undefined" && YT.Player) {
        ytPlayer = new YT.Player("croYouTubePlayerContainer", {
          height: "390",
          width: "640",
          videoId: videoId,
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 0,
            rel: 0,
            controls: 1,
            modestbranding: 1,
            playsinline: 1,
            origin: location.origin
          },
          // events: {
          //   onReady: function (event) {
          //     event.target.playVideo();
          //   }
          // }
        });
      } else {
        setTimeout(function () {
          loadYouTubeIframe(videoId);
        }, 200);
      }
    }

    function init() {
      addClass("body", variation_name);

      waitForElement(".py-5", function () {
        if (!document.querySelector(".cro-debt-3-reviews")) {
          // Replace this with your full `croReviews` HTML string if needed
          insertHtml(".py-5", croReviews, "beforebegin");
        }
      });

      waitForElement(".cro-debt-3-reviews", function () {
        if (!document.querySelector(".cro-debt-3-video")) {
          insertHtml(".cro-debt-3-reviews", croModalVideo, "beforebegin");
        }
      });
    }

    function croEventHandler() {
      live('.cro-debt-3-bg-dark-green-new a.btn.quaternary', 'click', function (e) {
        e.preventDefault();
        addClass(".cro-debt-3-modal", "cro-debt-3-modalOpen");
        const videoId = this.getAttribute("data-video-id");
        loadYouTubeIframe(videoId);
      });

      live(".cro-debt-3-close .icon.material-symbols-rounded", "click", function () {
        removeClass(".cro-debt-3-modal", "cro-debt-3-modalOpen");
        const iframeWrapper = document.querySelector("#cVideo");
        if (iframeWrapper) iframeWrapper.innerHTML = "";
      });
    }

    if (!window.cro_t_debt_3) {
      addScript();
      waitForElement("body", init);
      croEventHandler();
      window.cro_t_debt_3 = true;
    }

  } catch (e) {
    if (debug) console.log(e, "error in Test: " + variation_name);
  }
})();