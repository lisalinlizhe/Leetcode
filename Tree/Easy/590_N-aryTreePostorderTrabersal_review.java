class Solution {
    List<Integer> list = new ArrayList<Integer>();
    public List<Integer> postorder(Node root) {
        if(root == null) return list;

        for(Node node: root.children) {
            postorder(node);
        }

        list.add(root.val);

        return list;
    }
}