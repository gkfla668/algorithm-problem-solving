function solution(numbers) {
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for(let word of words){
        numbers = numbers.replaceAll(word, words.indexOf(word));  
    }
    
    return Number(numbers);
}