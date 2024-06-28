document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email-form input');
    const getStartedBtn = document.querySelector('.get-started-btn');

    getStartedBtn.addEventListener('click', () => {
        if (emailInput.value) {
            alert(`Thank you! We will contact you at ${emailInput.value}`);
        } else {
            alert('Please enter a valid email address');
        }
    });
});
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const plus = button.querySelector('.plus');

        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            plus.textContent = '+';
        } else {
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });
            document.querySelectorAll('.plus').forEach(plus => {
                plus.textContent = '+';
            });

            faqAnswer.style.display = 'block';
            plus.textContent = '-';
        }
    });
});