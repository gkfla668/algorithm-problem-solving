package programmers.level1;

public class 이상한_문자_만들기 {
    public static void main(String[] args) {
        String s = "try hello world";
        solution(s);
    }

    public static String solution(String s) {
        String answer = "";
        String[] strings = s.split("");
        int idx = 0;

        for (String string : strings) {
            idx = string.equals(" ") ? 0 : idx + 1;
            answer += idx % 2 == 0 ? string.toLowerCase() : string.toUpperCase();
        }

        return answer;
    }
}
