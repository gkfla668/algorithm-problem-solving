package programmers.level1;

public class 가운데_글자_가져오기 {
    public static void main(String[] args) {
        String s = "qwer";
        solution(s);
    }

    public static String solution(String s) {
        String answer = "";
        int size = s.length();

        if (size % 2 == 0) {
            answer = s.substring(size / 2 - 1, size / 2 + 1);
        } else
            answer = s.substring(size / 2, size / 2 + 1);

        return answer;
    }
}
