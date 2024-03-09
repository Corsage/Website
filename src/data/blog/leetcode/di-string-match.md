---
title: '942: DI String Match'
date: 2024-03-28
tags: ['leetcode', 'array', 'easy']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> A permutation `perm` of `n + 1` integers of all the integers in the range `[0, n]` can be represented as a string `s` of length `n` where:
>
> `s[i] == 'I'` if `perm[i] < perm[i + 1]`
>
> `s[i] == 'D'` if `perm[i] > perm[i + 1]`
>
> Given a string `s`, reconstruct the permutation `perm` and return it. If there are multiple valid permutations perm, return **any of them**.

### Initial Thinking

At first this question seemed slightly confusing, so I created two basic test cases.

```c
Input: s = "IIII"
Output: [0, 1, 2, 3, 4]

Input: s = "DDDD"
Output: [4, 3, 2, 1, 0]
```

It became clear to see that whenever `s[i] == 'I'` we select the **smallest integer available** and similarly whenever `s[i] == 'D'` we select the **largest integer avaiable**.

### Time & Space Complexity

The **time complexity** of this solution is `O(n)` because we iterate through the `n` size string once.

The **space complexity** of this solution is `O(1)` because the input does not affect our space.

```rust
impl Solution {
    pub fn di_string_match(s: String) -> Vec<i32> {
        // Create a range of integers from [0, n].
        let mut end = s.len() as i32;
        let mut start = 0;

        let mut res: Vec<i32> = Vec::with_capacity((end + 1) as usize);

        for c in s.chars() {
            if c == 'I' {
                res.push(start);
                start += 1;
            } else {
                res.push(end);
                end -= 1;
            }
        }

        // The last one can be either end or start, doesn't matter.
        res.push(start);
        res
    }
}
```
