package programmers.level1;

public class 하샤드_수 {
    public static void main(String[] args) {
        int x = 10;
        solution(x);
    }

    public static boolean solution(int x) {
        int sum = 0;
        String[] str = String.valueOf(x).split("");
        for(String num : str)
            sum += Integer.parseInt(num);

        if(x % sum == 0)
            return true;
        else
            return false;
    }
}
