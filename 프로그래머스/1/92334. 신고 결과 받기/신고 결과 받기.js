function solution(id_list, report, k) { 
    // 동일한 유저에 대한 신고 횟수는 1회로 처리
    let reports = [...new Set(report)].map((it) => {
        return it.split(' ')
    });
    
    // 각 유저별로 신고 당한 횟수
    let reportedCnts = new Map();
    reports.forEach((report) => {
        reportedCnts.set(report[1], (reportedCnts.get(report[1]) || 0) + 1);
    })
    
    // 각 유저별로 처리 결과 메일을 받은 횟수
    let mailCnts = new Map();
    reports.forEach((report) => {
        if(reportedCnts.get(report[1]) >= k)
            mailCnts.set(report[0], (mailCnts.get(report[0]) || 0) + 1);
    })
    
    return id_list.map((id) => mailCnts.get(id) ? mailCnts.get(id) : 0);
}