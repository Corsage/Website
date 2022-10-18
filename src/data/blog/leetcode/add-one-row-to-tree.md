---
title: '623: Add One Row to Tree'
date: 2022-10-05
tags: ['leetcode', 'trees', 'bfs']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> Given the `root` of a binary tree and two integers `val` and `depth`, add a row of nodes with value `val` at the given depth `depth`. Note that the `root` is at depth `1`.
>
> - Given the integer depth, for each not null tree node `cur` at the depth `depth - 1`, create two tree nodes with value `val` as `cur`'s left subtree root and right subtree root.
> - `cur`'s original left subtree should be the left subtree of the new left subtree root.
> - `cur`'s original right subtree should be the right subtree of the new right subtree root.
> - If `depth == 1` that means there is no depth `depth - 1` at all, then create a tree node with value `val` as the new root of the whole original tree, and the original tree is the new root's left subtree.

### Initial Thinking

This question can be easily solved using **Breadth First Search (BFS)**. By going through the nodes level by level, we will know when we reach the depth that we need to be at, and where to add the subsequent nodes to our tree.

### Breadth First Search

This is a tree traversal technique where we go down a tree level-by-level. It uses a `Queue` data structure that follows first in first out (FIFO).

### Time & Space Complexity

The **time complexity** of this solution is `O(n)` because the `Queue` can go through all the nodes worst case.

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

    TreeNode* addOneRow(TreeNode* root, int val, int depth) {
        if (depth == 1) {
            TreeNode* node = new TreeNode(val);
            node->left = root;

            return node;
        }

        int level = 1;
        queue<TreeNode*> q;

        q.push(root);
        while (!q.empty()) {
            int size = q.size();

            while (size-- != 0) {
                TreeNode* node = q.front();
                q.pop();

                if (level == depth - 1) {
                    TreeNode* l = new TreeNode(val);
                    TreeNode* r = new TreeNode(val);

                    l->left = node->left;
                    r->right = node->right;

                    node->left = l;
                    node->right = r;
                } else {
                    if (node->left != nullptr) {
                        q.push(node->left);
                    }

                    if (node->right != nullptr) {
                        q.push(node->right);
                    }
                }
            }

            if (++level >= depth) {
                break;
            }
        }

        return root;
    }
};
```
