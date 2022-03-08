package programmers.level1;

import java.util.Arrays;
import java.util.List;

public class 키패드_누르기 {
    private static final String RIGHT_SYMBOL = "R";
    private static final String LEFT_SYMBOL = "L";
    private static final String LEFT_HAND = "left";
    private static final String RIGHT_HAND = "right";

    public static void main(String[] args) {
        int[] numbers = {7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2};
        String hand = LEFT_HAND;

        solution(numbers, hand);
    }

    public static String solution(int[] numbers, String hand) {
        String usedHand = "";
        String answer = "";

        List<String> two = Arrays.asList("1", "3", "5");
        List<String> five = Arrays.asList("2", "4", "6", "8");
        List<String> eight = Arrays.asList("0", "5", "7", "9");
        List<String> zero = Arrays.asList("8", "#", "*");

        // 왼손, 오른손 거리 변수 생성
        int leftDist = 0;
        int rightDist = 0;

        // 2는 리스트에 포함(거리 1) 안되면 4, 6, 8은 거리 2 / 7,0,9는 거리 3
        // 5는 리스트에 포함(거리 1) 안되면 위치 다 똑같음 (o)
        // 8은 리스트에 포함(거리 1) 안되면 2, 4, 6은 거리 2 / 1, 3은 거리 3
        // 0은 리스트에 포함(거리 1) 안되면 5,7,9는 거리 2 / 2,4,6은 거리 3 / 1,3은 거리4

        // 왼손, 오른손 위치 기억 변수 생성
        String leftHand = "*";
        String rightHand = "#";

        for (int number : numbers) {
            if (number == 1 || number == 4 || number == 7) { // 왼손이 클릭하는 경우
                usedHand = LEFT_SYMBOL;

            } else if (number == 3 || number == 6 || number == 9) { // 오른손이 클릭하는 경우
                usedHand = RIGHT_SYMBOL;

            } else if (number == 2) { // 눌러야 할 숫자가 2인 경우
                if (two.contains(leftHand) && !two.contains(rightHand)) { // 왼손만 포함
                    usedHand = LEFT_SYMBOL;

                } else if (!two.contains(leftHand) && two.contains(rightHand)) { // 오른손만 포함
                    usedHand = RIGHT_SYMBOL;

                } else if (two.contains(leftHand) && two.contains(rightHand)) { // 둘다 포함 (거리 같음)
                    if (hand.equals(RIGHT_HAND)) {
                        usedHand = RIGHT_SYMBOL;
                    } else {
                        usedHand = LEFT_SYMBOL;
                    }
                } else { // 둘다 안 포함
                    if (leftHand.equals("4") || leftHand.equals("6") || leftHand.equals("8")) { // 왼손 위치가 4, 6이라면
                        leftDist = 2;
                    } else {
                        leftDist = 3;
                    }

                    if (rightHand.equals("4") || rightHand.equals("6") || rightHand.equals("8")) { // 오른손 위치가 4, 6이라면
                        rightDist = 2;
                    } else {
                        rightDist = 3;
                    }

                    if (leftDist > rightDist) { // 오른손이 더 가까우면
                        usedHand = RIGHT_SYMBOL;
                    } else { // 왼손이 더 가까우면
                        usedHand = LEFT_SYMBOL;
                    }
                }
            } else if (number == 8) { // 눌러야 할 숫자가 8인 경우
                if (eight.contains(leftHand) && !eight.contains(rightHand)) { // 왼손만 포함
                    usedHand = LEFT_SYMBOL;

                } else if (!eight.contains(leftHand) && eight.contains(rightHand)) { // 오른손만 포함
                    usedHand = RIGHT_SYMBOL;

                } else if (eight.contains(leftHand) && eight.contains(rightHand)) { // 둘다 포함 (거리 같음)
                    if (hand.equals(RIGHT_HAND)) {
                        usedHand = RIGHT_SYMBOL;
                    } else {
                        usedHand = LEFT_SYMBOL;
                    }
                } else { // 둘다 안 포함
                    if (leftHand.equals("2") || leftHand.equals("4") || leftHand.equals("6")) { // 왼손 위치가 2, 4, 6이라면
                        leftDist = 2;
                    } else {
                        leftDist = 3;
                    }

                    if (rightHand.equals("2") || rightHand.equals("4") || rightHand.equals("6")) { // 오른손 위치가 2, 4, 6이라면
                        rightDist = 2;
                    } else {
                        rightDist = 3;
                    }

                    if (leftDist > rightDist) { // 오른손이 더 가까우면
                        usedHand = RIGHT_SYMBOL;
                    } else { // 왼손이 더 가까우면
                        usedHand = LEFT_SYMBOL;
                    }
                }
            } else if (number == 5) { // 눌러야 할 숫자가 5인 경우
                if (five.contains(leftHand) && !five.contains(rightHand)) { // 왼손만 포함
                    usedHand = LEFT_SYMBOL;

                } else if (!five.contains(leftHand) && five.contains(rightHand)) { // 오른손만 포함
                    usedHand = RIGHT_SYMBOL;

                } else { // 왼손 오른손 둘다 리스트에 포함(거리 1)되거나 안되는 경우 (거리 2)
                    if (hand.equals(RIGHT_HAND)) {
                        usedHand = RIGHT_SYMBOL;
                    } else {
                        usedHand = LEFT_SYMBOL;
                    }
                }
            } else if (number == 0) { // 눌러야 할 숫자가 0인 경우
                if (zero.contains(leftHand) && !zero.contains(rightHand)) { // 왼손만 포함
                    usedHand = LEFT_SYMBOL;

                } else if (!zero.contains(leftHand) && zero.contains(rightHand)) { // 오른손만 포함
                    usedHand = RIGHT_SYMBOL;

                } else if (zero.contains(leftHand) && zero.contains(rightHand)) { // 둘다 포함 (거리 같음)
                    if (hand.equals(RIGHT_HAND)) {
                        usedHand = RIGHT_SYMBOL;
                    } else {
                        usedHand = LEFT_SYMBOL;
                    }
                } else { // 둘다 안 포함
                    if (leftHand.equals("5") || leftHand.equals("7") || leftHand.equals("9")) { // 왼손 위치가 5, 7, 9라면
                        leftDist = 2;
                    } else if (leftHand.equals("2") || leftHand.equals("4") || leftHand.equals("6")) { // 왼손 위치가 2, 4, 6이라면
                        leftDist = 3;
                    } else {
                        leftDist = 4;
                    }

                    if (rightHand.equals("5") || rightHand.equals("7") || rightHand.equals("9")) { // 오른손 위치가 5, 7, 9라면
                        rightDist = 2;
                    } else if (rightHand.equals("2") || rightHand.equals("4") || rightHand.equals("6")) { // 오른손 위치가 2, 4, 6이라면
                        rightDist = 3;
                    } else {
                        rightDist = 4;
                    }

                    if (leftDist > rightDist) { // 오른손이 더 가까우면
                        usedHand = RIGHT_SYMBOL;
                    } else { // 왼손이 더 가까우면
                        usedHand = LEFT_SYMBOL;
                    }
                }
            }
            if (usedHand == LEFT_SYMBOL) {
                leftHand = Integer.toString(number);
            } else {
                rightHand = Integer.toString(number);
            }

            answer += usedHand;
            /*System.out.println("왼손위치 : " + leftHand);
            System.out.println("오른손위치 : " + rightHand);
            System.out.println("눌러야 할 숫자 : " + numbers[i]);
            System.out.println("사용한 손: " + usedHand);
            System.out.println("");*/
        }
        System.out.println(answer);
        return answer;
    }
}
