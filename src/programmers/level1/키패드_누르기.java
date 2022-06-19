package programmers.level1;

public class 키패드_누르기 { // 완전 탐색
    private static final String RIGHT_SYMBOL = "R";
    private static final String LEFT_SYMBOL = "L";
    private static final String LEFT_HAND = "left";
    private static final String RIGHT_HAND = "right";
    static int[][] keypPadIdx = {
            {3, 1}, //0
            {0, 0}, //1
            {0, 1}, //2
            {0, 2}, //3
            {1, 0}, //4
            {1, 1}, //5
            {1, 2}, //6
            {2, 0}, //7
            {2, 1}, //8
            {2, 2}  //9
    };

    // 왼손, 오른손 위치 x, y 좌표 인덱스 저장
    // 왼손 *, 오른손 #에서 시작
    static int[] leftDist = {3, 0};
    static int[] rightDist = {3, 2};

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        String hand = RIGHT_HAND;

        solution(numbers, hand);
    }

    public static String solution(int[] numbers, String hand) {
        String answer = "";

        for (int number : numbers) {
            if (getHand(number, hand).equals(LEFT_SYMBOL))
                leftDist = keypPadIdx[number];

            if (getHand(number, hand).equals(RIGHT_SYMBOL))
                rightDist = keypPadIdx[number];

            answer += getHand(number, hand);
        }

        return answer;
    }

    private static String getHand(int number, String hand) {
        if (number == 1 || number == 4 || number == 7)  // 왼손이 클릭하는 경우
            return LEFT_SYMBOL;

        if (number == 3 || number == 6 || number == 9)  // 오른손이 클릭하는 경우
            return RIGHT_SYMBOL;

        if (number == 2 || number == 5 || number == 8 || number == 0) { // 눌러야 할 숫자가 2, 5, 8, 0인 경우
            int one = getDist(leftDist, number);
            int two = getDist(rightDist, number);

            if (one < two) // 왼손이 더 가까우면
                return LEFT_SYMBOL;

            if (one > two)   // 오른손이 더 가까우면
                return RIGHT_SYMBOL;
        }

        return hand.equals(LEFT_HAND) ? LEFT_SYMBOL : RIGHT_SYMBOL;
    }

    private static int getDist(int[] arr, int num) {
        return Math.abs((arr[0] - keypPadIdx[num][0])) + Math.abs((arr[1] - keypPadIdx[num][1]));
    }
}
