//
   Created by lizhelin on 18/8/12.

class Solution {
   public List<Integer> list = new ArrayList<>();
   public List<Integer> preorder(Node root) {
      if(root == null) return list;
      list.add(root.val);
      for(Node node: root.children) {
         preorder(node);
      }
      return list;
   }
}