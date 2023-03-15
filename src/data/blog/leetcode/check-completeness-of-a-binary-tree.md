---
title: '958: Check Completeness of a Binary Tree'
date: 2023-03-14
tags: ['leetcode', 'trees', 'bfs']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> Given the `root` of a binary tree, determine if it is a **complete binary tree**.
>
> In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1` and `2^h` nodes inclusive at the last level `h`.

### Initial Thinking

This question can be easily solved using **Breadth First Search (BFS)**. By going through the nodes from left to right, level by level, we will easily know if there is a discrepancy in our tree preventing it from being complete.

### Breadth First Search

This is a tree traversal technique where we go down a tree level-by-level. It uses a `Queue` data structure that follows first in first out (FIFO).

### Time & Space Complexity

The **time complexity** of this solution is `O(n)` because the `Queue` goes through all the nodes worst case (a complete binary tree).

The **space complexity** of this solution is `O(n)` because we use a `Queue` and worst case push all the nodes into it.

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
    bool isCompleteTree(TreeNode* root) {
        if (!root) {
            return false;
        }

        queue<TreeNode*> q;
        int i = 0;
        int j = -1;

        q.push(root);
        while (!q.empty()) {
            auto node = q.front();
            q.pop();

            if (node) {
                // Discrepancy found.
                if (j > 0 && i - 1 == j) {
                    return false;
                }

                q.push(node->left);
                q.push(node->right);
            } else {
                // Found a NULL node.
                j = i;
            }

            i++;
        }

        return true;
    }
};
```
