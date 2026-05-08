

function isPalindon(str = ""){
    let input= str.toLowerCase()
    let result = "";
    for(let i = str.length-1; i >= 0; i--){
        result +=input[i];
    }
    return (input == result)
}

console.log(isPalindon('Racecar'))