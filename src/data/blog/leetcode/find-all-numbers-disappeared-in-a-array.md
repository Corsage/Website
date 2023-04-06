---
title: '448: Find All Numbers Disappeared in an Array'
date: 2023-04-05
tags: ['leetcode', 'array', 'easy']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> Given an array nums of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

### Initial Thinking

This question is pretty straight forward. We have an array with integers from `[1, n]` where `n` is the size of the array. We have to find the missing numbers, which means that there are some repeated numbers in the array.

We can go through the array, and have a *seen* array (similar to DP problems) to keep track of already seen numbers. The missing numbers are the ones that are never seen.

### Solution

The **time complexity** of this solution is `O(2n)` because we iterate through the `n` size array once and then again with the `n` size array that we made.

The **space complexity** of this solution is `O(n)` because we allocate space for an additional size `n` array that we use towards our solution.

```rust
impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut vec = vec![0; nums.len()];
        let mut res: Vec<i32> = Vec::new();

        for el in nums.iter() {
            vec[(el - 1) as usize] = 1;
        }

        for (i, el) in vec.iter().enumerate() {
            if *el == 0 {
                res.push((i + 1) as i32);
            }
        }

        return res;
    }
}
```