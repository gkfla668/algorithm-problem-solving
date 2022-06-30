package programmers.level3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class 여행_경로 {
    static boolean[] check;
    static List<String> allRoute;

    public static void main(String[] args) {
        String[][] tickets = {{"ICN", "SFO"}, {"ICN", "ATL"}, {"SFO", "ATL"}, {"ATL", "ICN"}, {"ATL", "SFO"}};
        solution(tickets);
    }

    public static String[] solution(String[][] tickets) {
        String[] answer = {};

        int cnt = 0;
        check = new boolean[tickets.length];
        allRoute = new ArrayList<>();

        dfs(tickets, "ICN", "ICN", 0);

        Collections.sort(allRoute); // 어떻게 정렬되는거지
        answer = allRoute.get(0).split(",");
        System.out.println(Arrays.toString(answer));
        return answer;
    }


    private static void dfs(String[][] tickets, String start, String route, int cnt) {
        if (cnt == tickets.length) { // 모든 노드 방문
            allRoute.add(route);
            return;
        }

        for (int i = 0; i < tickets.length; i++) {
            if (tickets[i][0].equals(start) && !check[i]) { // check 배열 동작 방식 ?
                check[i] = true;
                dfs(tickets, tickets[i][1], (route + "," + tickets[i][1]), cnt + 1);
                check[i] = false; // 백트래킹
            }
        }
    }
}
