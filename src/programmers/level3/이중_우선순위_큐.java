package programmers.level3;

import java.util.TreeMap;

public class 이중_우선순위_큐 {
    public static void main(String[] args) {
        String[] operataions = {"I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"};
        solution(operataions);
    }

    public static int[] solution(String[] operations) {
        // 1. TreeMap
        TreeMap<Integer, Integer> treeMap = new TreeMap<>();

        for (String operation : operations) {
            String[] str = operation.split(" ");

            if (str[0].equals("I")) {
                int num = Integer.parseInt(str[1]);
                ;
                treeMap.put(num, treeMap.getOrDefault(num, 0) + 1);
            } else {
                int num;
                if (treeMap.size() == 0) continue;
                if (str[1].equals("1"))
                    num = treeMap.lastKey();
                else
                    num = treeMap.firstKey();

                if (treeMap.get(num) - 1 == 0) {
                    treeMap.put(num, treeMap.get(num) - 1);
                    treeMap.remove(num);
                }
            }
        }

        int[] answer = new int[2];
        if (treeMap.size() != 0) {
            answer[0] = treeMap.firstKey();
            answer[1] = treeMap.lastKey();
        }

        return answer;

//        // 2. PriorityQueue//
//        PriorityQueue<Integer> min = new PriorityQueue<>();
//        PriorityQueue<Integer> max = new PriorityQueue<>(Comparator.reverseOrder());
//
//        for (String operation : operations) {
//            String[] str = operation.split(" ");
//
//            if (str[0].equals("I")) {
//                int num = Integer.parseInt(str[1]);
//                min.add(num);
//                max.add(num);
//            } else {
//                if (min.size() == 0 || max.size() == 0) continue;
//                if (str[1].equals("1")) {
//                    int maxValue = max.poll();
//                    min.remove(maxValue);
//                } else {
//                    int minValue = min.poll();
//                    max.remove(minValue);
//                }
//            }
//        }
//
//        int[] answer = new int[2];
//        if (min.size() > 0 && max.size() > 0) {
//            answer[0] = min.poll();
//            answer[1] = max.poll();
//        }
//
//        return answer;
    }
}