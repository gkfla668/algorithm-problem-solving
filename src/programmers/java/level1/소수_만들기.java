package programmers.level1;

public class 소수_만들기 {
    public static void main(String[] args) {
        int[] nums = {1, 2, 7, 6, 4};
        solution(nums);
    }

    public static int solution(int[] nums) {
        int answer = 0;

        for (int i = 0; i < nums.length - 2; i++) {
            for (int j = i + 1; j < nums.length - 1; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    int sum = nums[i] + nums[j] + nums[k];
                    if (prime(sum))
                        answer++;
                }
            }
        }

        return answer;
    }

    private static boolean prime(int num) {
        boolean isPrime = true;

        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }
}
