package programmers.level1;

public class 서울에서_김서방_찾기 {
    public static void main(String[] args) {
        String[] seoul = {"Jane", "Kim"};
        solution(seoul);
    }

    public static String solution(String[] seoul) {
        int idx = 0;
        for (int i = 0; i < seoul.length; i++) {
            if (seoul[i].equals("Kim")) {
                idx = i;
                break;
            }
        }

        return "김서방은 " + idx + "에 있다";
    }
}
