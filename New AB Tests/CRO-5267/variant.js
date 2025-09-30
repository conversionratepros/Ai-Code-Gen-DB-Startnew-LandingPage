(function() {
    if (!window.location.pathname.includes('/landing-pages/omni-lp')) {
        return;
    }

    // --- DATA ---
    const reviewsData = [
        { initials: 'KVW', name: 'Kate Johanna Van Wyk', date: '17 Sep 2025 at 19:34', title: 'Great service', review: '<em>Great service, friendly and experienced personnel. Their help me alot through did dark time in my life, thank you again, keep on helping people like me.</em>' },
        { initials: 'JS', name: 'Jacqueline S', date: '16 Sep 2025 at 13:57', title: 'Grateful', review: 'I am so pleased I contact Debt Busters to help me with my debt. It will not be long now I will be debt free and that will be a massive load off my shoulders. The staff are pleasant and very helpful. The best choice I have made. Thank you Debt Buster' },
        { initials: 'J', name: 'Jacob', date: '16 Sep 2025 at 12:12', title: 'Great service with Debdbusters.', review: 'They offered realistic and practical solutions to my financial situation. Their debt repayment solutions provide relief to your situation. Assisted by Bongiwe. I recommend them if you\'re highly indebted.' },
        { initials: 'MN', name: 'Michelle N', date: '6 Sep 2025 at 09:42', title: 'Excellent Service from DebtBusters!', review: 'The process was smooth, and I never felt judged or overwhelmed. Instead, I felt empowered to take control of my finances with confidence. I truly appreciate the care and dedication shown by the team. Thank you, DebtBusters, for making a stressful situation manageable—and even hopeful. Highly recommended!' },
        { initials: 'MS', name: 'Mazw S', date: '16 Sep 2025 at 09:37', title: 'Super happy', review: 'When I applied for help I was seriously drowning. Now I can budget and sort my life out and that even before my account is closed for debt review. Thay are transparent and I would recommend debt busters to everyone who needs help' },
        { initials: 'MH', name: 'Mrs. Hiramen', date: '16 Sep 2025 at 09:29', title: 'Debt busters is da way', review: 'Debt Busters really helped me with my monthly expenses by reducing my monthly bill,if it wasn \'t for debt busters I wouldn \'t know how I wid survive every month.' },
        { initials: 'JT', name: 'John T', date: '12 Sep 2025 at 15:05', title: 'Toward Full Debt Repayment with DebtBusters', review: 'Thank you, DebtBusters, for your efficient, effective response in regard to an account that I paid off completely in September 2025, by adding payment onto the monthly payment negotiated by DebtBusters. I am now heading to, hopefully, fully pay off another account by December 2025 using the same method. With DebtBusters, there is clear progress year by year toward financial freedom.' }
    ];

    // --- HTML TEMPLATES ---
    function createReviewHTML(review, index) {
        const isHidden = index >= 3 ? 'hidden' : '';
        return `
            <div class="hp-review-card ${isHidden}" data-index="${index}">
                <div class="hp-review-header">
                    <div class="hp-reviewer-initials">${review.initials}</div>
                    <div class="hp-reviewer-name">${review.name}</div>
                    <div class="hp-review-date">${review.date}</div>
                </div>
                <div class="hp-review-stars">
                    <span class="star filled">★</span><span class="star filled">★</span><span class="star filled">★</span><span class="star filled">★</span><span class="star filled">★</span>
                </div>
                <div class="hp-review-title">${review.title}</div>
                <div class="hp-review-text">${review.review}</div>
            </div>
        `;
    }

    const reviewsSectionHTML = `
        <div class="hp-reviews-section">
            <div class="hp-container">
                <div class="hp-main-heading">Rated <strong>4.04</strong> from <strong>10,000+ Reviews</strong> on Hellopeter</div>
                <div class="hp-logo-and-stars">
                    <img src="https://images.hellopeter.com/images/hellopeter-logo-blue.svg" alt="Hellopeter" class="hp-logo">
                    <div class="hp-stars">
                        <span class="star filled">★</span><span class="star filled">★</span><span class="star filled">★</span><span class="star filled">★</span><span class="star empty">★</span>
                    </div>
                </div>
                <div class="hp-reviews-subtitle">Reviews from Hellopeter</div>
                <div class="hp-reviews-grid">
                    ${reviewsData.map((review, index) => createReviewHTML(review, index)).join('')}
                </div>
                <button class="hp-toggle-reviews-btn">See more reviews</button>
            </div>
        </div>
    `;

    // --- LOGIC ---
    function injectSection() {
        const footer = document.querySelector('footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', reviewsSectionHTML);
        } else {
            document.body.insertAdjacentHTML('beforeend', reviewsSectionHTML);
        }
    }

    function handleToggle() {
        const btn = document.querySelector('.hp-toggle-reviews-btn');
        if (!btn) return;

        let isExpanded = false;

        btn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            const reviews = document.querySelectorAll('.hp-review-card');
            reviews.forEach((review, index) => {
                if (index >= 3) {
                    if (isExpanded) {
                        review.classList.remove('hidden');
                    } else {
                        review.classList.add('hidden');
                    }
                }
            });
            btn.textContent = isExpanded ? 'See fewer reviews' : 'See more reviews';
        });
    }

    function main() {
        injectSection();
        handleToggle();
    }

    // --- INITIALIZATION ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }

})();