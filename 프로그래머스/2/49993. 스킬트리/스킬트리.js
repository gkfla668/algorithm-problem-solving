function solution(skill, skill_trees) {
    var answer = 0;
    // skill에 포함되지 않은 모든 문자 제거
    var regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        // skill.indexOf(x) === 0는 x가 skill의 시작 부분과 일치하는지를 확인
        // x === ""는 skill에서 필요한 기술이 하나도 없다는 것을 의미
        })
        .length;
}
