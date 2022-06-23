package programmers.level2;

public class JadenCase_문자열_만들기 {
    public static void main(String[] args) {
        String s = "for the last week";
        solution(s);
    }

    public static String solution(String s) {
        StringBuilder answer = new StringBuilder();
        boolean isNextUpper = true;

        for (int i = 0; i < s.length(); i++) {
            if (isNextUpper) {
                answer.append(Character.toUpperCase(s.charAt(i)));
                isNextUpper = false;
            } else
                answer.append(Character.toLowerCase(s.charAt(i)));

            if (s.charAt(i) == ' ')
                isNextUpper = true;
        }

        System.out.println(answer);
        return answer.toString();
//        int start = 0;
//
//        for (int i = 0; i < s.length(); i++) {
//            if (i + 1 < s.length() && s.charAt(i + 1) == ' ') {
//                answer.append(String.valueOf(s.charAt(start)).toUpperCase());
//                answer.append(s.substring(start + 1, i + 1).toLowerCase() + " ");
//
//                i++;
//                while (i + 1 < s.length() && s.charAt(i + 1) == ' ') {
//                    answer.append(" ");
//                    i++;
//                }
//
//                if (i != s.length() - 1) // 마지막 index가 아니면
//                    start = i + 1;
//            } else if (i == s.length() - 1) {
//                answer.append(String.valueOf(s.charAt(start)).toUpperCase());
//                answer.append(s.substring(start + 1).toLowerCase());
//            }
//        }

        // return answer.toString();
    }
}
