function applyForVisa(documents) {
    console.log('Processing rquest...', documents);

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0) {
                resolve({ country: 'Germany' });
            } else {
                reject("Sorry, not this time...");
            }
        }, 500);
    });

    return promise;
}

function getVisa(visa) {
    console.log('Your request approved. ', visa);
    return Promise.resolve(visa);
}

function bookHotel(visa) {
    console.log("visa for booking: ", visa);
    console.info('Trying to book the room in Hotel');
    return Promise.reject({reason:'we havent free rooms'});
}

function buyTicket() {
    console.info('Ticket was bought');
}

applyForVisa({ doc1: 'passport' })
    .then(getVisa)
    .then(bookHotel)
    .then(buyTicket)
    .catch(msg => console.error('Your request rejected. ', msg))
    .then(() => console.log("Your request was finished."));