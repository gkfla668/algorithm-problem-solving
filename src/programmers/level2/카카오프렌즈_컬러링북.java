package programmers.level2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class 카카오프렌즈_컬러링북 {
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    static int cnt;

    public static void main(String[] args) {
        int m = 6;
        int n = 4;
        int[][] picture = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
        solution(m, n, picture);
    }

    public static int[] solution(int m, int n, int[][] picture) {
        boolean[][] check = new boolean[m][n];
        List<Integer> list = new ArrayList<>();

        int area = 0;
        for (int x = 0; x < m; x++) {
            for (int y = 0; y < n; y++) {
                if (picture[x][y] != 0 && !check[x][y]) {
                    cnt = 0;
                    area++;
                    dfs(picture, check, x, y);
                    list.add(cnt);
                }
            }
        }

        int[] answer = new int[2];
        Collections.sort(list);
        answer[0] = area;
        answer[1] = list.get(list.size() - 1);

        return answer;
    }

    private static void dfs(int[][] picture, boolean[][] check, int x, int y) {
        if (check[x][y]) return;

        check[x][y] = true;
        cnt++;

        for (int i = 0; i < 4; i++) {
            int nx = x + dr[i];
            int ny = y + dc[i];
            if (nx >= 0 && ny >= 0 && nx < picture.length && ny < picture[x].length) {
                if (picture[nx][ny] == picture[x][y] && !check[nx][ny]) {
                    dfs(picture, check, nx, ny);
                }
            }
        }
    }
}
