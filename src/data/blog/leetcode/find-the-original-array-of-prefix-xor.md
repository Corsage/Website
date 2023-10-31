---
title: '2433: Find The Original Array of Prefix Xor'
date: 2023-10-30
tags: ['leetcode', 'xor', 'medium']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> You are given an **integer** array `pref` of size `n`. Find and return the array `arr` of size `n` that satisfies:
>
> `pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]`
>
> Note that `^` denotes the **bitwise-xor** operation. It can be proven that the answer is **unique**.

### Initial Thinking

Why does this question have a `medium` tag? It's pretty straight forward. Lets take a moment to review what `xor` is and how it works.

`XOR` is a binary operation which stands for "eXclusive OR". It is called that because it will **only** return a `1` **if and only if** exactly *one* of the bits is also `1`.

| a | b | a ^ b |
|---|---|-------|
| 0 | 0 | 0     |
| 1 | 0 | 1     |
| 0 | 1 | 1     |
| 1 | 1 | 0     |

From this table, we see that the operation is **commutative**, **associative** and **self-inverse**.

Now that we reviewed how `xor` works, we can rewrite `pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]` to the following.

1. Base Case

```
pref[0] = arr[0]
arr[0] = pref[0]

```

2. Next, see our **substitution** and **self-inverse**.
```
pref[1] = arr[0] ^ arr[1]
pref[1] = pref[0] ^ arr[1]
arr[1] = pref[0] ^ pref[1]
```

3. Lastly, since we know that `xor` is **commutative** and **associative**.
```
pref[2] = arr[0] ^ arr[1] ^ arr[2]
pref[2] = pref[0] ^ (pref[0] ^ pref[1]) ^ arr[2]
pref[2] = pref[1] ^ arr[2]
arr[2] = pref[1] ^ pref[2]
```


### Time & Space Complexity

The **time complexity** of this solution is `O(n)` because we iterate through the `n` size array once.

The **space complexity** of this solution is `O(n)` because we allocate space for an additional size `n` array.

```rust
impl Solution {
    pub fn find_array(pref: Vec<i32>) -> Vec<i32> {
        let size = pref.len();

        // Guaranteed that `pref` will have size > 0.
        let mut res = Vec::with_capacity(size);
        res.push(pref[0]);

        for i in 0..size - 1 {
            res.push(pref[i] ^ pref[i + 1]);
        }

        res
    }
}
```
