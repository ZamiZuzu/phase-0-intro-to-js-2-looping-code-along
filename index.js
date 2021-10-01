let card = [];

function writeCards(names, event){
    for (let i = 0; i < names.length; i++) {
        card.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
return card;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown);
        countDown--;
    }
}