package programmers.level1;

import java.util.Scanner;

public class 직사각형_별_찍기 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        /* IntStream.range(0,a).forEach()
        * 다른 사람 코드
        * StringBuilder sb = new StringBuilder();
          IntStream.range(0, a).forEach(s -> sb.append("*"));
          IntStream.range(0, b).forEach(s -> System.out.println(sb.toString()));
          * */
        for (int j = 0; j < b; j++) {
            for (int i = 0; i < a; i++) {
                System.out.print('*');
            }
            System.out.println("");
        }
    }
}
