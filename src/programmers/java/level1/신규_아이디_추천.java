package programmers.level1;

public class 신규_아이디_추천 {
    public static void main(String[] args) {
        String new_id = "abcdefghijklmn.p";
        solution(new_id);
    }

    public static String solution(String new_id) {
        new_id = new_id.toLowerCase(); // 1단계
        new_id = new_id.replaceAll("[^a-z0-9_.-]", ""); // 2단계
        new_id = new_id.replaceAll("[.]{2,}", "."); // 3단계
        new_id = new_id.replaceAll("^[.]|[.]$", ""); // 4단계

        // 5단계
        if (new_id.length() == 0)
            new_id = "a";

        // 6단계
        if (new_id.length() >= 16) {
            new_id = new_id.substring(0, 15);
            new_id = new_id.replaceAll("[.]$", "");
        }

        // 7단계
        while (new_id.length() < 3)
            new_id += new_id.charAt(new_id.length() - 1);

        String answer = new_id;
        System.out.println(answer);
        return answer;
    }
}
