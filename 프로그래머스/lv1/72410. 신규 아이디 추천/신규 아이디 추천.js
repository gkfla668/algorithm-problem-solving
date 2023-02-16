function solution(new_id) {
    var answer = '';
    
    new_id = new_id.toLowerCase(); // 1단계
    new_id = new_id.replace(/[^\w-_.]/g, '') // 2단계
    new_id = new_id.replace(/\.+/g, '.'); // 3단계
    new_id = new_id.replace(/^\.|\.$/g, '') // 4단계
    if(new_id.length === 0) new_id = 'a';  // 5단계 
    
    // 6단계
    if(new_id.length >= 16) new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/g, '') 
    
    // 7단계
    let len = new_id.length;
    if(len <= 2) {
        let cnt = 3 - new_id.length;
        new_id += new_id.charAt(len - 1).repeat(cnt)
    }
    
    return new_id;
}