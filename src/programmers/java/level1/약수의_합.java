package programmers.level1;

public class 약수의_합 {
    public static void main(String[] args) {
        int n = 0;
        solution(n);
    }

    public static int solution(int n) {
        /* 숫자 n까지 반복할 필요 없이 약수는 n/2보다 클 수 없으므로 n/2까지 돌리고 return answer + n(자기 자신) */
        int answer = 0;
        for(int i = 1; i <= n; i++){
            if(n % i == 0)
                answer+=i;
        }

        return answer;
    }
}
