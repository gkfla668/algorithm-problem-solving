package programmers.level1;

public class 내적 {
    public static void main(String[] args) {
        int[] a = {-1,0,1};
        int[] b = {1,0,-1};
        solution(a, b);
    }

    public static int solution(int[] a, int[] b) {
        int answer = 0;
        for (int i = 0; i < a.length; i++)
            answer += a[i]*b[i];

        return answer;
    }
}
