function solution(files) {
    // isNaN에서 공백도 숫자로 인식하므로 parseInt를 사용하자.
    files = files.map((file) => {
        let headEndIdx = [...file].findIndex((c) => !isNaN(parseInt(c))) - 1;
        let HEAD = file.slice(0, headEndIdx + 1);
        file = file.slice(headEndIdx + 1);
        
        let numEndIdx = [...file].findIndex((c) => isNaN(parseInt(c))) - 1;
        // NUMBER는 최대 다섯 글자
        let NUMBER = numEndIdx > 4 ? file.slice(0, 5) : numEndIdx > -1 ? file.slice(0, numEndIdx + 1) : file;
        file = numEndIdx > -1 ? file.slice(numEndIdx + 1) : '';
        
        let TAIL = file;
        
        return [HEAD, NUMBER, TAIL];
    })
    
    files.sort((a, b) => {
        // HEAD 사전순 정렬, 대소문자 구분 X
        if(a[0].toUpperCase() < b[0].toUpperCase()) return -1; 
        if(a[0].toUpperCase() > b[0].toUpperCase()) return 1;
        if(a[0].toUpperCase() === b[0].toUpperCase()){
            if(Number(a[1]) === Number(b[1])) return 1; // HEAD와 NUMBER가 같음. 순서 유지
            return Number(a[1]) - Number(b[1]); // HEAD는 같지만, NUMBER는 다름. NUMBER 오름차순 정렬
        }
    })
    
    return files.map((file) => file.join(''));
}