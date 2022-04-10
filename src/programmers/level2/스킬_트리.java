package programmers.level2;

public class 스킬_트리 {
    public static void main(String[] args) {
        String skill = "CBD";
        String[] skill_trees = {"BACDE", "CBADF", "AECB", "BDA"};
        solution(skill, skill_trees);
    }

    public static int solution(String skill, String[] skill_trees) {
        char[] sk = skill.toCharArray();
        int answer = 0;

        for (String tree : skill_trees) {
            String str = "";
            for (int i = 0; i < tree.length(); i++) {
                for (char ch : sk) {
                    if (ch == tree.charAt(i)) {
                        str += Character.toString(tree.charAt(i));
                    }
                }
            }

            if (str.isEmpty())
                answer++;

            if (skill.contains(str)) {
                if (!str.isEmpty()) {
                    if (sk[0] == str.charAt(0))
                        answer++;
                }
            }
        }

        return answer;

        /* 다른 사람 풀이
        int answer = 0;
        ArrayList<String> skillTrees = new ArrayList<String>(Arrays.asList(skill_trees));
        //ArrayList<String> skillTrees = new ArrayList<String>();
        Iterator<String> it = skillTrees.iterator();

        while (it.hasNext()) {
            if (skill.indexOf(it.next().replaceAll("[^" + skill + "]", "")) != 0) {
                it.remove();
            }
        }

        answer = skillTrees.size();

        return answer;
        */
    }
}
