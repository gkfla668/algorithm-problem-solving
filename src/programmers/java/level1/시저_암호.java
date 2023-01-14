package programmers.level1;

public class 시저_암호 {
    public static void main(String[] args) {
        String s = "a B z";
        int n = 4;
        solution(s, n);
    }

    public static String solution(String s, int n) {
        String answer = "";

        for (int i = 0; i < s.length(); i++) {
            if (Character.isUpperCase(s.charAt(i))) { // 대문자
                answer += s.charAt(i) + n > 90 ? (char) (64 + (n - (90 - s.charAt(i)))) : (char) (s.charAt(i) + n);
            } else if (Character.isLowerCase(s.charAt(i))) {
                answer += s.charAt(i) + n > 122 ? (char) (96 + (n - (122 - s.charAt(i)))) : (char) (s.charAt(i) + n);
            } else if (s.charAt(i) == ' ')
                answer += s.charAt(i);
        }

        return answer;
    }


}
