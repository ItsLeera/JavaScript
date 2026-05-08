

function atmDispensed(amount){
    const bills = [100,20,9,1];
    const result = [];

    for(let bill of bills){
        const count = Math.fround(amount / bill);

        result.push(count)


        amount %= bill
    }
    return result
}

console.log(atmDispensed(1049))