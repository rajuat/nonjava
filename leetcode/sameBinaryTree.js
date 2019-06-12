class TreeNode {
    constructor(val){
        this.val =  val;
        this.left = null;
        this.right = null;
    }
}
var isSameBinaryTree = function(p, q){

    if(p != undefined && q == undefined) return false;
    if(p == undefined && q  != undefined) return false;
    if(p == undefined && q == undefined) return true;
    if(p != undefined && q != undefined){
        isSameBinaryTree(p.left, q.left);
        if(p.val != q.val) return false;
        isSameBinaryTree(p.right, q.right);
    }
    return true;
};

console.log(isSameBinaryTree(new TreeNode("A"), new TreeNode("A")));