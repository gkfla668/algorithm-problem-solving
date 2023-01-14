package programmers.level1;

public class 핸드폰_번호_가리기 {
    public static void main(String[] args) {
        String phone_number = "027778888";
        solution(phone_number);
    }

    public static String solution(String phone_number) {
        String secret = "";
        String str = phone_number.substring(phone_number.length() - 4);

        for (int i = 0; i < phone_number.length() - 4; i++)
            secret += "*";

        return secret + str;

        /* 다른 사람 풀이
        *
        char[] ch = phone_number.toCharArray();
        for(int i = 0; i < ch.length - 4; i ++){
            ch[i] = '*';
        }
        return String.valueOf(ch);*/
    }
}
