package programmers.level2;

import java.util.LinkedList;
import java.util.Queue;

public class 게임_맵_최단거리 {
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};
    static int n, m;
    static int[][] dist;

    public static void main(String[] args) {
        int[][] maps = {{1, 0, 1, 1, 1}, {1, 0, 1, 0, 1}, {1, 0, 1, 1, 1}, {1, 1, 1, 0, 1}, {0, 0, 0, 0, 1}};
        solution(maps);
    }

    public static int solution(int[][] maps) {
        int answer;
        n = maps.length;
        m = maps[0].length;

        dist = new int[n][m];

        bfs(maps, dist, 0, 0);
        answer = dist[n - 1][m - 1];

        if (dist[n - 1][m - 1] == 0)
            answer = -1;

        return answer;
    }

    private static void bfs(int[][] maps, int[][] dist, int x, int y) {
        dist[x][y] = 1;
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{x, y});

        while (!queue.isEmpty()) {
            int[] current = queue.remove();
            int cx = current[0];
            int cy = current[1];

            for (int i = 0; i < 4; i++) {
                int nx = cx + dx[i];
                int ny = cy + dy[i];

                if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                    if (dist[nx][ny] == 0 && maps[nx][ny] == 1) {
                        dist[nx][ny] = dist[cx][cy] + 1;
                        queue.add(new int[]{nx, ny});
                    }
                }
            }
        }
    }
}