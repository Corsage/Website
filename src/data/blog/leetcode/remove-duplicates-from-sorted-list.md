---
title: '83: Remove Duplicates from Sorted List'
date: 2023-04-07
tags: ['leetcode', 'linked list', 'easy']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list **sorted** as well.

### Initial Thinking

We are dealing with a Linked List that is already sorted. Meaning, if any duplicates existed, they would have to be beside each other. Due to this, we can simply follow a **two-pointer** approach and compare the previous value with the next.

### Remarks

This questions is straight-forward to do in a language like C/C++. However, for Rust and the whole concept of *strict borrow checking*, it becomes a bit tricky to do. This was a fun challenge for myself as I continue to learn Rust more and more.

### Solution

The **time complexity** of this solution is `O(n)` because we iterate through the `n` size linked list.

The **space complexity** of this solution is `O(1)` because the input does not affect our space.

```rust
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return None;
        }

        let mut node = head;
        let mut p = node.as_mut().unwrap();

        while let Some(q) = p.next.as_mut() {
            if p.val == q.val {
                p.next = q.next.take();
            } else {
                p = p.next.as_mut().unwrap();
            }
        }

        return node;
    }
}
```