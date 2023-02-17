function solution(id_list, report, k) {
    report = new Set(report); // 동일한 유저에 대한 신고 횟수는 1회로 처리

    let reporter = new Map();
    let reportedCnt = new Map();
    report.forEach((it) => {
        let [ reporter_id, reported_id ] = it.split(' ');
        
        reporter.set(reporter_id, (reporter.get(reporter_id) || '') + ' ' + reported_id);
        reportedCnt.set(reported_id, (reportedCnt.get(reported_id) || 0) + 1); // 신고된 횟수
    })
    
    // k번 이상 신고된 유저는 게시판 이용이 정지
    let stop_id = [];
    reportedCnt.forEach((val, key) => {
        if(val >= k) stop_id.push(key);
    })
    
    reporter.forEach((val, key) => {
        let ids = val.split(' ');
        
        let mailCnt = 0; //
        ids.forEach((id) => {
          if(stop_id.includes(id)) mailCnt++; // 신고한 유저가 정지되었다면  
        })
        
        reporter.set(key, mailCnt);
    })
    
    return id_list.map((id) => reporter.get(id) ? reporter.get(id) : 0);
}