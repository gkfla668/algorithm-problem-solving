function solution(triangle) {
    for(let i = 1; i < triangle.length; i++){ // 삼각형의 두번째 줄부터 시작
        for(let j = 0; j < triangle[i].length; j++){
            // 현재 위치가 맨 왼쪽인 경우: 위에서 하나만 선택 가능
            if(j === 0) triangle[i][j] += triangle[i - 1][j]; 
            // 현재 위치가 맨 오른쪽인 경우: 위에서 하나만 선택 가능
            else if(j === triangle[i].length - 1) triangle[i][j] += triangle[i - 1][j - 1]; 
            // 현재 위치가 가운데인 경우: 위의 두 위치 중 최대 값 선택
            else {
                triangle[i][j] += Math.max(triangle[i - 1][j], triangle[i - 1][j - 1]);
            }
        }
    }
    
      // 마지막 줄에서 최댓값 찾기
    let maxVal = triangle[triangle.length - 1][0];
    for (let num of triangle[triangle.length - 1]) {
        if (num > maxVal) maxVal = num;
    }
    
    return maxVal;
}