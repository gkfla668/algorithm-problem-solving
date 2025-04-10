var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var N = parseInt(input[0]);
var pair = parseInt(input[1]);

let computers = [...new Array(N + 1)].map(() => []);
let visited = new Array(N + 1).fill(false);

for(let i = 2; i < pair + 2; i++){
    let start = Number(input[i].split(" ")[0]);
    let end = Number(input[i].split(" ")[1]);
    
    computers[start].push(end);
    computers[end].push(start);
}

const DFS = (N, start) => {    
    visited[start] = true;
    let stack = [];
    let cnt = 0;
    
    stack.push(start);
    
    while(stack.length !== 0){
        let node = stack.shift();
        for(let i = 1; i <= N; i++){
            if(computers[node].includes(i) && !visited[i]){
                stack.push(i);
                cnt++;
                visited[i] = true;
            }
        }
    }
    
    return cnt;
}

console.log(DFS(N, 1));