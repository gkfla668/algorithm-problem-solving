function solution(arr)
{

//     let answer = [];
    
//     for(let i = 0; i < arr.length; i++){
//         if(i < arr.length && arr[i] !== arr[i + 1])
//             answer.push(arr[i]);
//     }
    
    
//     return answer;
    
    return arr.filter((num, idx) => num !== arr[idx + 1]);
}