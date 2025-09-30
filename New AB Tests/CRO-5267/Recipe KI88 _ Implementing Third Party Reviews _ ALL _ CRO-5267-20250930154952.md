# Recipe KI88 | Implementing Third Party Reviews | ALL | CRO-5267

| Recipe Link | Private ([https://app.clickup.com/t/20651070/CRO-5267](https://app.clickup.com/t/20651070/CRO-5267)) |
| ---| --- |
| Figma Link | [https://www.figma.com/proto/RZclzYQ8H6cyderQiiJwST/Recipe-KI88-%7C-Implementing-Third-Party-Reviews-%7C-ALL-%7C-CRO-5267?node-id=1-110&t=mfZ1EkmfWI2iTSR5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1](https://www.figma.com/proto/RZclzYQ8H6cyderQiiJwST/Recipe-KI88-%7C-Implementing-Third-Party-Reviews-%7C-ALL-%7C-CRO-5267?node-id=1-110&t=mfZ1EkmfWI2iTSR5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1) |
| Figma Dev Link | [https://www.figma.com/design/RZclzYQ8H6cyderQiiJwST/Recipe-KI88-%7C-Implementing-Third-Party-Reviews-%7C-ALL-%7C-CRO-5267?node-id=1-110&t=V03Fh469B4w4f1q8-1](https://www.figma.com/design/RZclzYQ8H6cyderQiiJwST/Recipe-KI88-%7C-Implementing-Third-Party-Reviews-%7C-ALL-%7C-CRO-5267?node-id=1-110&t=V03Fh469B4w4f1q8-1) |
| Build Page On | [https://start-new.debtbusters.co.za/landing-pages/omni-lp](https://start-new.debtbusters.co.za/landing-pages/omni-lp) |
| Alternative Templates |  |
| Variant Name | Third party reviews |
| Primary Conversion Action |  |
| Deploys | [https://app.convert.com/accounts/1004973/projects/10041244/experiences/1004155859/summary](https://app.convert.com/accounts/1004973/projects/10041244/experiences/1004155859/summary) |

### Background
* * *

By replacing the current star reviews with third party reviews, we anticipate more consumer trust and robust credibility, motivating an increased user engagement and thereby increase the Form Submit Call Me Back (GA4) rate.

### Summary of Changes
* * *

1. A new section will be added to display third-party reviews from Hello peter
###   

### UX/Ui
* * *

1. A new section should display above the fooer.
    1. Within this section, the following should display
        1. Heading: Rated **4.04** from **10,000+ Reviews** on Hellopeter
        2. A logo should display below the heading: Hellopeter logo
        3. Next to the logo 5 stars shoudl display
            1. The first 4 star's colour should be #25B888
            2. The last star colour shoudl be #B8B8B8
        4. Subt title:
            1. This should display just above the reviews
                1. The text shoudl be "Reviews from Hellopeter
        5. Reviews
            1. See below for reviews
            2. All reviews should have 5 stars
    2. Three reviews should display by default
        1. Each review should have the following:
            1. Row one:
                1. A ciricle with the reviewers intials in it
                2. The reviers name
                3. The date
            2. Row Two
                1. 5 starts with the colour #25B888
            3. Row three
                1. Review title
            4. Row four
                1. The reiview
    3. A "See more reviews" button should display
        1. When the section is clicked, it should expand
        2. The expanded section should contain 8 reviews
        3. The text should be updated to "See fewer reviews"
            1. When clicked again:
                1. The section should collapse to its default state

Reviews:

**Kate Johanna Van Wyk**
 17 Sep 2025 at 19:34
Heading: Great service
_Great service, friendly and experienced personnel. Their help me alot through did dark time in my life, thank you again, keep on helping people like me._

**Jacqueline S**
16 Sep 2025 at 13:57
Heading: **Grateful**
_I am so pleased I contact Debt Busters to help me with my debt. It will not be long now I will be debt free and that will be a massive load off my shoulders. The staff are pleasant and very helpful. The best choice I have made. Thank you Debt Buster_

**Jacob**
16 Sep 2025 at 12:12
**Great service with Debdbusters.**
They offered realistic and practical solutions to my financial situation. Their debt repayment solutions provide relief to your situation. Assisted by Bongiwe. I recommend them if you're highly indebted.

Michelle N
6 Sep 2025 at 09:42
**Excellent Service from DebtBusters!**
The process was smooth, and I never felt judged or overwhelmed. Instead, I felt empowered to take control of my finances with confidence. I truly appreciate the care and dedication shown by the team. Thank you, DebtBusters, for making a stressful situation manageable—and even hopeful. Highly recommended!

Mazw S
16 Sep 2025 at 09:37
**Super happy**
When I applied for help I was seriously drowning. Now I can budget and sort my life out and that even before my account is closed for debt review. Thay are transparent and I would recommend debt busters to everyone who needs help

Mrs. Hiramen
**Debt busters is da way**
16 Sep 2025 at 09:29
Debt Busters really helped me with my monthly expenses by reducing my monthly bill,if it wasn't for debt busters I wouldn't know how I wid survive every month.

John T
12 Sep 2025 at 15:05
**Toward Full Debt Repayment with DebtBusters**
Thank you, DebtBusters, for your efficient, effective response in regard to an account that I paid off completely in September 2025, by adding payment onto the monthly payment negotiated by DebtBusters. I am now heading to, hopefully, fully pay off another account by December 2025 using the same method. With DebtBusters, there is clear progress year by year toward financial freedom.

**Donavan to supply 3 more reviews**

### Change Checklist
* * *

1. What sections need to be updated
    1. Only the new hello peter review section will be added
2. Does the remainder of the page need to be updated?
    1. No,
3. Do font sizes, colours, and families need to be updated?
    1. No
4. What device widths need to be used
    1. Mobile and desktop
5. Do the developers need more designs to clearly illustrate what needs to be done?
    1. No

### Test Analysis
* * *
🧪 **Test Page:**`landing-pages/omni-lp`
🎯 **Targeting Type:** Global JS
🌐 **Global JS Required:** ✅ Yes
🔧 **Implementation Details:**
*   The test will run **only** on `landing-pages/omni-lp`.
*   A **new section** will be added dynamically using **HTML, CSS, and JS**.
*   The section will include:
    *   **Header** (main title)
    *   **Sub-header** (supporting text)
    *   **Logo** (brand or partner logo)
    *   **Reviews** (star ratings or review text)
    *   **Button** (CTA with proper styling and action)
✅ **Functionality to Ensure:**
*   Section renders correctly on **desktop and mobile**.
*   Layout and design are consistent with existing branding.
*   Button works as intended (redirects or triggers modal, depending on requirement).
*   Reviews display properly without breaking responsiveness.
*   Section does not interfere with other page elements.
*   No console errors or duplication issues when navigating between LP states.

### Logic & Rules
* * *

1. Mobile and desktop

### Test Case
* * *

[

crp.testmo.net

https://crp.testmo.net/repositories/3?group\_id=346

](https://crp.testmo.net/repositories/3?group_id=346)

[QA Master Document](https://docs.google.com/document/d/1NkAZKcWJ9skz0ccwZmCrKwFY-4afxSUwEEAGm0WG3qM/edit)