package programmers.level1;

public class 문자열_내_p와_y의_개수 {
    public static void main(String[] args) {
        String s = "pPoooyY";
        solution(s);
    }

    static boolean solution(String s) {
        int count = 0;

        String[] string = s.split("");

        for(String ch : string) {
            if (ch.equalsIgnoreCase("p"))
                count++;
            else if (ch.equalsIgnoreCase("y"))
                count--;
        }

        return count == 0;
    }
}
