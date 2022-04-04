package programmers.level2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class 오픈채팅방 {
    public static void main(String[] args) {
        String[] record = {"Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"};
        solution(record);
    }

    public static String[] solution(String[] record) {
        Map<String, String> user = new HashMap<>();
        List<String> temp = new ArrayList<>();

        for (String str : record) {
            String[] msg = str.split(" ");
            if (msg[0].equals("Enter"))
                user.put(msg[1], msg[2]);
            else if (msg[0].equals("Change"))
                user.put(msg[1], msg[2]);
        }

        for (String str : record) {
            String[] msg = str.split(" ");

            if (msg[0].equals("Enter"))
                temp.add(user.get(msg[1]) + "님이 들어왔습니다.");
            else if (msg[0].equals("Leave"))
                temp.add(user.get(msg[1]) + "님이 나갔습니다.");
        }

        /* answer에 바로 담으면 런타임 에러 리스트에 담고 return 때 변경 >>> why? */

        String[] answer = new String[temp.size()];
        return temp.toArray(answer);
    }
}
