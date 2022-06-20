package programmers.level2;

public class 조이_스틱 {
    public static void main(String[] args) {
        String name = "JAN";
        solution(name);
    }

    public static int solution(String name) {
        int answer = 0;
        int move = name.length() - 1;

        for (int i = 0; i < name.length(); i++) {
            answer += Math.min(name.charAt(i) - 65, 91 - name.charAt(i));

            int countA = i + 1;

            while (countA < name.length() && name.charAt(countA) == 'A') // 마지막 인덱스가 아니면서 A인 경우
                countA++;

            move = Math.min(move, (i * 2) + (name.length() - countA)); // 오른쪽으로 갔다가 왼쪽
            move = Math.min(move, i + (name.length() - countA) * 2); // 왼쪽으로 갔다가 오른쪽
        }

        answer += move;
        return answer;
    }
}
