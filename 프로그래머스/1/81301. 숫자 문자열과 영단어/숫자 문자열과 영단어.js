function solution(s) {
    let number = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    for(let i = 0; i < number.length; i++){
        s = s.replaceAll(number[i], i);
    }
    
    return Number(s);
}

// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i = 0; i < numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }