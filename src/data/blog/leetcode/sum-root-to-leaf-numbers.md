---
title: '129: Sum Root to Leaf Numbers'
date: 2023-03-13
tags: ['leetcode', 'trees', 'dfs']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> You are given the root of a binary tree containing digits from `0` to `9` only.
> Each root-to-leaf path in the tree represents a number.
> - For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.
> Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a **32-bit** integer.
>
> A **leaf** node is a node with no children.

### Initial Thinking

This question can be easily solved using **Depth First Search (DFS)**. We start at the `root` node and then traverse as far as possible along each branch before we backtrack. This means we can just collect our digits to form the number to add at the very end.

### Time & Space Complexity

The **time complexity** of this solution is `O(|V| + |E|)` where `V` is the number of vertices and `E` is the number of edges of the tree. This is because we explore all the branches of the tree.

The **space complexity** of this solution is `O(1)` because the input does not affect our space.

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int sumNumbers(TreeNode* root, int res = 0) {
        int left = 0;
        int right = 0;

        if (!root) {
            return 0;
        }

        res = (res * 10) + root->val;

        // Leaf node.
        if (!root->left && !root->right) {
            return res;
        }

        if (root->left) {
            left = sumNumbers(root->left, res);
        }

        if (root->right) {
            right = sumNumbers(root->right, res); 
        }

        return left + right;
    }
};
```

### Remarks

I am currently learning Rust in my free time and thought I would attempt to create a solution for this question. Not sure how good it is, but it works at least!

```rust
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    fn dfs(root: Rc<RefCell<TreeNode>>, mut res: i32) -> i32 {
        let root = root.borrow();
        res = res * 10 + root.val;

        match (&root.left, &root.right) {
            (None, None) => res,
            _ => {
                let mut left = 0;
                let mut right = 0;

                if (&root.left).is_some() {
                    left = Solution::dfs(root.left.as_ref().unwrap().clone(), res);
                }

                if (&root.right).is_some() {
                    right = Solution::dfs(root.right.as_ref().unwrap().clone(), res);
                }

                return left + right;
            }
        }
    }

    pub fn sum_numbers(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        match root {
            Some(root) => Solution::dfs(root, 0),
            None => 0,
        }
    }
}
```
