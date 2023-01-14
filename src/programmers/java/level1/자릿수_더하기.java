package programmers.level1;

public class 자릿수_더하기 {
    public static void main(String[] args) {
        int n = 987;
        solution(n);
    }

    public static int solution(int n) {
        /*
        while(true){
            answer += n % 10;
            if(n < 10)
                break;

            n = n / 10;
        }*/

        int answer = 0;
        String str = String.valueOf(n);
        for (int i = 0; i < str.length(); i++)
            answer += Integer.parseInt(str.substring(i, i + 1));

        return answer;
    }
}
