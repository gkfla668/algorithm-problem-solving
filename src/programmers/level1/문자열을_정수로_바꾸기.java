package programmers.level1;

public class 문자열을_정수로_바꾸기 {
    public static void main(String[] args) {
        String s = "-1234";
        solution(s);
    }

    public static int solution(String s) {
        /*
        int answer = 0;

        if (s.charAt(0) == '-') {
            s = s.substring(1);
            answer = Integer.parseInt(s) * (-1);
        } else
            answer = Integer.parseInt(s);

         return answer;
         */

        return Integer.parseInt(s);
    }
}
