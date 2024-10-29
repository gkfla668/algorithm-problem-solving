function solution(s, skip, index) {
    let answer = '';
    
    skip = skip.split('');
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    // skip에 있는 알파벳은 제외하고 건너뜁니다.
    skip.forEach((ch) => {
        alphabet = alphabet.replaceAll(ch, '');
    })

    s = s.split('');
    s.forEach((ch) => {
        let i = alphabet.indexOf(ch);
        let newIndex = (i + index) % alphabet.length;
        answer += alphabet.charAt(newIndex);
    })
    
    return answer;
}