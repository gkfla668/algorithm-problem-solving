function solution(name, yearning, photo) {
    let answer = [];
    
    photo.forEach((picture) => {
        let score = 0;
        picture.forEach((friend) => {
            let s = name.indexOf(friend);
            score += s !== -1 ? yearning[name.indexOf(friend)] : 0;
        })
        answer.push(score)
    })
    
    return answer;
}