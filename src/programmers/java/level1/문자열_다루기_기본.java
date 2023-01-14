package programmers.level1;

public class 문자열_다루기_기본 {
    public static void main(String[] args) {
        String s = "1234";
        solution(s);
    }

    public static boolean solution(String s) {
        boolean isDigit = true;

        char[] string = s.toCharArray();
        for(char ch : string){
            if(!Character.isDigit(ch)) {
                isDigit = false;
                break;
            }
        }

        return (s.length() == 4 || s.length() == 6) && isDigit;
    }
}
