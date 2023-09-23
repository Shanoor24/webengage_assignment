function onSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validation for email
    const emailInput = document.getElementsByName('email')[0];
    const error = document.getElementById('error');
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        error.textContent = 'You have entered an invalid email address';
        return;
    } else {
        error.textContent = '';
    }

    // Validation for mobile number
    const mobileInput = document.getElementsByName('mobile_number')[0];
    const mobileNumber = mobileInput.value.trim();
    if (!isValidMobile(mobileNumber)) {
        error.textContent = 'You have entered an invalid Mobile number';
        return;
    } else {
        error.textContent = '';
    }

    // Retrieve form data
    const formData = new FormData(document.getElementById('contact-form'));
    console.log('Form Data:', Object.fromEntries(formData));

    // Store the form data in localStorage
    const formDataObject = Object.fromEntries(formData);
    localStorage.setItem('formData', JSON.stringify(formDataObject));

    // Reset the form
    document.getElementById('contact-form').reset();


    window.location.href = 'thankyou.html';
}

// Custom email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Custom mobile number validation function
function isValidMobile(mobileNumber) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
}


// https://task-1-6oup6lioi-shanoorfb2403-gmailcom.vercel.app/