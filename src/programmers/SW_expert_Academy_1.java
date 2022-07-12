package programmers;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SW_expert_Academy_1 {
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};

    public static void main(String args[]) throws Exception {
        Scanner sc = new Scanner(System.in);

        int T, N, maxAreaCount;
        T = sc.nextInt();
        int[][] country;
        boolean[][] check;
        String[] str;

        List<Integer> answer = new ArrayList<>();

        for (int test_case = 1; test_case <= T; test_case++) {
            N = sc.nextInt();
            sc.nextLine();
            country = new int[N][N];
            maxAreaCount = 0;

            for (int i = 0; i < N; i++) {
                str = sc.nextLine().split(" ");

                for (int j = 0; j < str.length; j++) {
                    country[i][j] = Integer.parseInt(str[j]);
                }
            }

            int year = 0; // 0년부터 시작 (1년부터 시작했더니 1년일 때 모두 물에 잠기게되는 경우 맨 처음(0년)이 가장 많은 구역이 됨)
            int drownLand = 0;

            // 물에 다 잠겼으면 빠져나오기
            // 년 수 늘리면서 구역 개수 세기
            while (drownLand != N * N) {
                int count = 0;
                check = new boolean[N][N];

                for (int i = 0; i < N; i++) {
                    for (int j = 0; j < N; j++) {
                        if (country[i][j] != 0 && country[i][j] <= year) {
                            country[i][j] = 0; // 물에 잠긴 땅
                            drownLand++;
                        }
                    }
                }

                for (int i = 0; i < N; i++) {
                    for (int j = 0; j < N; j++) {
                        if (country[i][j] != 0 && !check[i][j]) {
                            dfs(country, check, i, j, N);
                            count++;
                        }
                    }

                }

                if (count >= maxAreaCount) // 가장 많은 구역으로 나뉘었을 때의 구역의 개수를 찾아야하므로
                    maxAreaCount = count;

                year++;
            }

            answer.add(maxAreaCount);
        }

        for (int i = 1; i <= answer.size(); i++)
            System.out.println("#" + i + " " + answer.get(i - 1));
    }


    private static void dfs(int[][] arr, boolean[][] check, int x, int y, int N) {
        if (check[x][y]) return;

        check[x][y] = true;

        // 구역 탐색
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
                if (arr[nx][ny] > 0 && !check[nx][ny]) // 물에 잠기지 않은 땅이고, 아직 방문하지 않은 땅이라면
                    dfs(arr, check, nx, ny, N);
            }
        }

    }
}

