package programmers.level1;

import java.util.Arrays;

public class _1차_다트게임 {
    public static void main(String[] args) {
        String dartResult = "1D2S3T*";
        solution(dartResult);
    }

    public static int solution(String dartResult) {
        int dart = 0;
        String[][] str = new String[3][2]; // 총 세번의 점수와 숫자와 문자 자리

        for (int i = 0; i < dartResult.length(); i++) {
            if (!Character.isDigit(dartResult.charAt(i))) { // 문자인경우
                if (i != dartResult.length() - 1 && !Character.isDigit(dartResult.charAt(i + 1))) { // 문자 다음 옵션
                    str[dart][1] = dartResult.charAt(i) + String.valueOf(dartResult.charAt(i + 1));
                    i++;
                } else
                    str[dart][1] = String.valueOf(dartResult.charAt(i));

                dart++; // 다음 점수 자리
            } else { // 숫자인경우
                if (dartResult.charAt(i) == '1' && dartResult.charAt(i + 1) == '0') { // 10인 경우
                    str[dart][0] = String.valueOf(10);
                    i++;
                } else
                    str[dart][0] = String.valueOf(dartResult.charAt(i));
            }
        }

        int number;
        int pow;
        int count = 0;
        int[] num = new int[3];

        for (String[] strings : str) { // 0번째, 1번째, 2번째 줄 ...
            pow = strings[1].charAt(0) == 'S' ? 1 : (strings[1].charAt(0) == 'D' ? 2 : 3);
            number = (int) Math.pow(Integer.parseInt(strings[0]), pow);
            num[count] = number;

            if (strings[1].length() == 2) {
                if (strings[1].charAt(1) == '#') // 아차상
                    num[count] *= -1;
                else { // 스타상
                    num[count] *= 2;
                    if (count != 0)
                        num[count - 1] *= 2;
                }
            }
            count++;
        }

        return Arrays.stream(num).sum();
    }
}
