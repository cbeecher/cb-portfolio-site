/*Form Validation*/

/*
function formatPhoneNum(phoneNumber) {
    const telNumRegex = /^(\d{3})(\d{3})(\d{4})$/;
    return phoneNumber.replace(telNumRegex, "$1-$2-$3");
}

*/

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let formattedNumber = e.target.value.replace(/\D/g, '');

    if (formattedNumber.length > 3) {
        formattedNumber = formattedNumber.slice(0, 3) + '-' + formattedNumber.slice(3);
    }

    if (formattedNumber.length > 7) {
        formattedNumber = formattedNumber.slice(0, 7) + '-' + formattedNumber.slice(7);
    }

    e.target.value = formattedNumber;
});