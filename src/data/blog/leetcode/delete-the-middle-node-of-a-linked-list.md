---
title: '2095: Delete the Middle Node of a Linked List'
date: 2022-10-14
tags: ['leetcode', 'linked list', 'fast-slow']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> You are given the `head` of a linked list. Delete the middle node, and return the `head` of the modified linked list. The middle node of a linked list of size `n` is the `⌊n / 2⌋` node from the **start** using **0-based indexing**, where `⌊x⌋` denotes the largest integer less than or equal to `x`.

<div class="hidden sm:flex w-full justify-center items-center mt-6 mb-3">
<img style="max-width: 600px" src="https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png" />
</div>

### Initial Thinking

This question requires us to find the node before the **middle** and after it. Thus, we need to use the **fast-slow pointer** approach on the LinkedList to efficiently find the middle node. However, we need a pointer from **behind** the middle node, so we need some sort of `prev` pointer that will keep the previous LinkedList item that `slow` had.

### Fast-Slow Pointer Technique

This technique is also known as the _tortoise and hare_ algorithm.

We use two pointers, one `fast` and one `slow`. For every two steps the `fast` pointer takes, the `slow` pointer takes one. The reason why we do **2:1** ratio is because we want the **middle** node, however, depending on the question we may change this to suit our needs.

### Time & Space Complexity

The **time complexity** of this solution is `O(N + N / 2)` because the fast pointer iterates through the entire LinkedList and then the slow pointer iterates through half (i.e. `N / 2`) of the LinkedList.

The **space complexity** of this solution is `O(1)` because the input does not affect our space.

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        if (head->next == nullptr) {
            return nullptr;
        }

        ListNode* fast = head;
        ListNode* slow = head;
        ListNode* prev = head;

        while (fast->next != nullptr) {
            fast = fast->next;

            if (fast->next != nullptr) {
                fast = fast->next;
            }

            prev = slow;
            slow = slow->next;
        }

        // Slow is at the middle node.
        // So go next for + 1.
        prev->next = slow->next;
        return head;
    }
};
```
