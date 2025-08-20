const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let totalSum = 0;
    for (let number of param) {
        totalSum += number;
    }
    return totalSum / param.length;
}

console.log(average(numbers));