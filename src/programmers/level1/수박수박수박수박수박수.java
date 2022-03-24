package programmers.level1;

public class 수박수박수박수박수박수 {
    public static void main(String[] args) {
        int n = 4;
        solution(n);
    }

    public static String solution(int n) {
        StringBuilder sb = new StringBuilder();
        String answer = "수박";

        if (n % 2 == 0) {
            sb.append(answer.repeat(n / 2));
        } else {
            sb.append(answer.repeat(n / 2));
            sb.append("수");
        }

        return sb.toString();

        /* 다른 사람 풀이
        1. return new String(new char [n/2+1]).replace("\0", "수박").substring(0,n);
        2. String result = "";
            for (int i = 0; i < n; i++)
                result += i % 2 == 0 ? "수" : "박";
            return result;

        */
    }
}
