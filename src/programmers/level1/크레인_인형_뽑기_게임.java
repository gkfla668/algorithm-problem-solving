package programmers.level1;

import java.util.ArrayList;
import java.util.List;

public class 크레인_인형_뽑기_게임 {
    public static void main(String[] args) {
        int[][] board = {{0, 0, 0, 0, 0}, {0, 0, 1, 0, 3}, {0, 2, 5, 0, 1}, {4, 2, 4, 4, 2}, {3, 5, 1, 3, 1}};
        int[] moves = {1, 5, 3, 5, 1, 2, 1, 4};
        solution(board, moves);
    }

    public static int solution(int[][] board, int[] moves) {
        int answer = 0; // 터져서 사라진 인형의 개수 변수
        List<Integer> basket = new ArrayList<>(); // 크레인으로 뽑은 인형을 담을 바구니 배열

        for (int location : moves) {
            for (int i = 0; i < board.length; i++) {
                if (board[i][location - 1] != 0) { // board에 인형이 있으면
                    if (basket.isEmpty()) { // 바구니가 비어있는 경우
                        basket.add(board[i][location - 1]); // 바구니에 넣어줌
                        board[i][location - 1] = 0; // board에서 뽑아온 인형 자리는 빈칸으로
                    } else { // 바구니가 비어있지 않은 경우
                        if (basket.get(basket.size() - 1) == board[i][location - 1]) { // 바구니 마지막 요소가 넣으려는 값이랑 일치하는 경우
                            basket.remove(basket.size() - 1); // 바구니 마지막 요소 삭제
                            board[i][location - 1] = 0; // board에서 뽑아온 인형자리 빈칸으로
                            answer += 2;

                        } else { // 바구니 마지막 요소가 넣으려는 값이랑 일치하지 않는 경우
                            basket.add(board[i][location - 1]); // 바구니에 넣어줌
                            board[i][location - 1] = 0; // board에서 뽑아온 인형 자리는 빈칸
                        }
                    }
                    break;
                } else {
                    if (i == board.length - 1) // 0인데 마지막 요소 일때
                        break;
                }
            }
        }

        System.out.println("<바구니> : " + basket);
        System.out.println("터져서 사라진 인형의 개수 : " + answer);
        return answer;
    }
}
