function solution(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const n = maps.length;
  const m = maps[0].length;

  let visited = Array.from(new Array(n), () => new Array(m).fill(false));

  const rangeCheck = (row, col) => {
    return row >= 0 && row < n && col >= 0 && col < m;
  };

  const BFS = (row, col) => {
    let queue = [[row, col]];
    visited[row][col] = true;

    while (queue.length !== 0) {
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (rangeCheck(nx, ny) && maps[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          maps[nx][ny] = maps[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  };

  BFS(0, 0);

  return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] : -1;
}
