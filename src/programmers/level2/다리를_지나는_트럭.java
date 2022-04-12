package programmers.level2;

import java.util.LinkedList;
import java.util.Queue;

public class 다리를_지나는_트럭 {
    public static void main(String[] args) {
        int bridge_length = 2;
        int weight = 10;
        int[] truck_weights = {7, 4, 5, 6};
        solution(bridge_length, weight, truck_weights);
    }

    public static int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        int sum = 0;

        Queue<Integer> bridge = new LinkedList<>();
        for (int truck : truck_weights) {
            while (true) {
                if (bridge.isEmpty()) {
                    bridge.add(truck);
                    sum += truck;
                    answer++;
                    break;
                } else if (bridge.size() < bridge_length) {
                    if (sum + truck > weight) { // 다리에 들어온게 sum 초과하면
                        bridge.add(0);
                        answer++;
                    } else { // 초과 안함
                        bridge.add(truck);
                        sum += truck;
                        answer++;
                        break;
                    }
                } else
                    sum -= bridge.poll();

            }

        }
        System.out.println(answer + bridge_length); // 마지막 트럭 다리에 탑승하고 다리의 길이만큼 지나가야 하기 때문에
        return answer + bridge_length;
    }
}

