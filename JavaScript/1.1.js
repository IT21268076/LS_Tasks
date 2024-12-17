/*
* Complete day calculator method return absolute day count
* param @secondDate
*/
Date.prototype.daysTo = function (secondDate) {
    if (!(secondDate instanceof Date)) {
        throw new Error("Argument must be a Date object");
    }
    // Days into ms
    const dayInMs = 24 * 60 * 60 * 1000; 
    const firstDateStart = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());
    const secondDateStart = Date.UTC(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());
    
    return Math.abs((secondDateStart - firstDateStart) / dayInMs); 
};

const d1 = new Date("2024-12-16");
const d2 = new Date("2024-12-31");

console.log(d1.daysTo(d2));
