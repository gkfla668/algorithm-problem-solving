function solution(id_list, report, k) {
    var answer = [];
    
    report = new Set(report); // 동일한 유저에 대한 신고 횟수는 1회로 처리
    
    let reporter = new Map();
    report.forEach((val) => {
        let users = val.split(' ');
        reporter.set(users[0], (reporter.get(users[0]) || '') + ' ' + users[1]);
    })
    
    let reported = new Map();
    report.forEach((val) => {
        let users = val.split(' ');
        reported.set(users[1], (reported.get(users[1]) || 0) + 1);
    })
    
    let stop_id = [];
    reported.forEach((value, key) => {
        if(value >= k)
            stop_id.push(key);
    })

    
    reporter.forEach((val, key) => {
        let arr = val.split(' ');
        
        let cnt = 0;
        arr.forEach((it) => {
          if(stop_id.includes(it))
              cnt++;
        })
        
        reporter.set(key, cnt);
    })

    
    id_list.forEach((it) => {
      if(reporter.get(it))
          answer.push(reporter.get(it))
     else
         answer.push(0)
    })
    return answer;
}