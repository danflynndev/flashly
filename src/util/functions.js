// capitalize
export function capitalizeFirst(string) {
    return string.split('').map((e, i) => i===0 ? e.toUpperCase() : e).join('');
}

export function capitalizeEvery(string) {
    return string.split(' ').map(e => capitalizeFirst(e)).join(' ');
}

// Fischer-Yates shuffle algo
export function shuffle(arr) {
    const arrCopy = [...arr]; // do not mutate original
    let currentIndex = arrCopy.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arrCopy[currentIndex], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[currentIndex]];
    }
    return arrCopy;
}