package programmers.level2;

import java.util.Arrays;

public class _3차_파일명_정렬 {
    public static void main(String[] args) {
        String[] files = {"img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"};
        solution(files);
    }

    public static String[] solution(String[] files) {
        int N = files.length;
        String[] answer = new String[N];
        String[][] arr = new String[N][3];
        int start, end;

        for (int i = 0; i < N; i++) {
            start = 0;
            end = 0;

            end = getHEADEndIdx(files, i, end);
            arr[i][0] = getString(files, i, start, end);

            start = end;
            end = getNUMBEREndIdx(files, i, end);

            int numberLength = end - start;
            if (numberLength > 5) { // number의 최대 길이는 5이므로
                end -= numberLength - 5;
                start += numberLength - 5;
            }

            arr[i][1] = getString(files, i, start, end);
            arr[i][2] = getString(files, i, end, files[i].length());
        }

        Arrays.sort(arr, (o1, o2) -> {
            if (o1[0].equalsIgnoreCase(o2[0])) // HEAD 같음
                return Integer.parseInt(o1[1]) - Integer.parseInt(o2[1]); // NUMBER가 같은 경우나 안같은 경우 둘다 NUMBER 기준으로 정렬
            else
                return o1[0].compareToIgnoreCase(o2[0]);
        });

        for (int i = 0; i < arr.length; i++) {
            StringBuilder str = new StringBuilder();
            for (int j = 0; j < arr[i].length; j++)
                str.append(arr[i][j]);
            answer[i] = str.toString();
        }

        return answer;
    }

    private static int getHEADEndIdx(String[] files, int idx, int end) {
        while (end != files[idx].length() - 1 && !Character.isDigit(files[idx].charAt(end)))
            end++;

        return end;
    }

    private static int getNUMBEREndIdx(String[] files, int idx, int end) {
        while (end <= files[idx].length() - 1 && Character.isDigit(files[idx].charAt(end))) // 파일명이 숫자로 끝나는 경우가 있기에 마지막 index 포함
            end++;

        return end;
    }

    private static String getString(String[] files, int idx, int start, int end) {
        return files[idx].substring(start, end);
    }
}
