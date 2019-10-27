const user = {
    firstName: 'John', // string
    lastName: 'Doe', // string
    rate: 0.86, // number in range 0..1
    address: { // not empty object or null
        line1: '15 Macon St', // string
        line2: '', // string
        city: 'Gotham' // string
    },
    phoneNumbers: [ // array containing at least 1 element
        {
            type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP
            number: '(555) 555-1234' // string in specific format
        },
        {
            type: 'LINE',
            number: '(555) 555-5678'
        }
    ]
};

function validate(user) {
    if (!user.firstName || typeof user.firstName !== 'string') {
        return false;
    }
    if (!user.lastName || typeof user.lastName !== 'string') {
        return false;
    }
    if (!user.rate || typeof user.rate !== 'number') {
        return false;
    }
    if (Object.entries(user.address).length === 0 && user.address.constructor === Object) {
        return false;
    } else {
        if (!user.address.line1 || typeof user.address.line1 !== 'string') {
            return false;
        }
        if (typeof user.address.line2 !== 'string') {
            return false;
        }
        if (!user.address.city || typeof user.address.city !== 'string') {
            return false;
        }
    }
    if (user.phoneNumbers.length === 0) {
        return false;
    } else {
        let isPhonesValid = true;
        user.phoneNumbers.forEach((number) => {
            if (number.type.toUpperCase() !== 'MOBILE' && number.type.toUpperCase() !== 'LINE' && number.type.toUpperCase() !== 'VOIP') {
                isPhonesValid = false;
            }
            let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!regExp.test(number.number)){
                isPhonesValid = false;
            }
        });
        if (!isPhonesValid){
            return false;
        }
    }
    return true;
}


console.log(1, validate(user));
