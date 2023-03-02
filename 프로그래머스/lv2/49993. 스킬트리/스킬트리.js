function solution(skill, skill_trees) {
    var answer = 0;
    let order = [];
    
    for(let i = 0; i < skill.length; i++)
        order.push(skill.slice(0, i + 1))
            
    skill_trees.forEach((sk) => {
        sk = [...sk].filter((val) => skill.includes(val));
        
        if(sk.length === 0) answer++;
        if(order.includes(sk.join(''))) answer++;
    })
    
    return answer;
}