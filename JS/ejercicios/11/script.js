const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    if (typeof param === 'numbrer') {
        let totalSum = 0;
        for (let number of param) {
            totalSum += number;
        }
        return totalSum;
    } else {
        let totalLength = 0;
        for (let word of param) {
            if (typeof word === 'string') {
                totalLength += word.length;
            }
        }
        return totalLength / param.length;
    }
}

console.log(averageWord(mixedElements));