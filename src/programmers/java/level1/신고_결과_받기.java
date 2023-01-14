package programmers.level1;

import java.util.*;

public class 신고_결과_받기 {
    public static void main(String[] args) {
        String[] id_list = {"con", "ryan"};
        String[] report = {"ryan con", "ryan con", "ryan con", "ryan con"};
        int k = 3;


        solution(id_list, report, k);
    }

    public static int[] solution(String[] id_list, String[] report, int k) {
        String[] oneReport;
        Set<String> reports = new HashSet<String>(Arrays.asList(report));
        Map<String, Integer> countMap = new HashMap<>(); // 신고 당한 횟수

        Map<String, Set<String>> map = new HashMap<String, Set<String>>();
        Map<String, Integer> total = new HashMap<>();

        String[] reportUser = new String[report.length];
        String[] faultUser = new String[report.length];

        Iterator<String> iter = reports.iterator();

        //System.out.println(reports);

        while (iter.hasNext()) {
            for (int i = 0; i < reports.size(); i++) { // 신고 리스트 돌아
                oneReport = iter.next().split("\\s"); // 하나의 신고 report 생성
                reportUser[i] = oneReport[0];
                faultUser[i] = oneReport[1];
            }
        }

        // 초기화
        for (int i = 0; i < id_list.length; i++) {
            countMap.put(id_list[i], 0);
            total.put(id_list[i], 0);
        }

        // 신고 당한 횟수 map
        for (String str : faultUser)
            countMap.put(str, countMap.getOrDefault(str, 0) + 1);

        // System.out.println("신고 당한 횟수 : " + countMap);

        for (int i = 0; i < id_list.length; i++) { // 사용자 리스트 돌아
            Set<String> reportedUser = new HashSet<>();

            for (int j = 0; j < reportUser.length; j++) { // 신고한 사람 리스트 돌아
                if (id_list[i].equals(reportUser[j])) { // 사용자랑 신고자랑 같을때
                    reportedUser.add(faultUser[j]); // 신고 당한 리스트에 신고당한사람 add
                    map.put(id_list[i], reportedUser);

                    int count = 0;
                    for (String str : map.get(id_list[i])) {
                        if (countMap.get(str) >= k) {
                            count++;
                        }
                        total.put(id_list[i], count);
                    }
                }
            }
        }

        // System.out.println("신고 목록 : " + map);
        // System.out.println("처리 결과 메일 횟수 : " + total);
        // System.out.println("");

        int[] answer = new int[id_list.length];

        for (int i = 0; i < id_list.length; i++) {
            answer[i] = total.get(id_list[i]);
        }

        System.out.println(Arrays.toString(answer));

        return answer;
    }
}