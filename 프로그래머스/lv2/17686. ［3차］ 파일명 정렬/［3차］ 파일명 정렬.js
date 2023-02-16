function solution(files) {
    var answer = [];
    files = files.map((file) => {
        let headEndIdx = [...file].findIndex((c) => !isNaN(parseInt(c))) - 1;
        let HEAD = file.slice(0, headEndIdx + 1);
        file = file.slice(headEndIdx + 1);
        
        let numEndIdx = [...file].findIndex((c) => isNaN(parseInt(c))) - 1;
        let NUMBER = numEndIdx > 4 ? file.slice(0, 5) : numEndIdx > -1 ? file.slice(0, numEndIdx + 1) : file;
        file = numEndIdx > -1 ? file.slice(numEndIdx + 1) : '';
        
        let TAIL = file;
        
        return [HEAD, NUMBER, TAIL];
    })
    
    files.sort((a, b) => {
        if(a[0].toUpperCase() < b[0].toUpperCase()) return -1; 
        if(a[0].toUpperCase() > b[0].toUpperCase()) return 1;
        if(a[0].toUpperCase() === b[0].toUpperCase()){
            if(Number(a[1]) === Number(b[1])) return 1;
            return Number(a[1]) - Number(b[1]);
        }
    })
    
    
    return files.map((file) => file.join(''));
}