---
title: '38: Count and Say'
date: 2022-10-17
tags: ['leetcode', 'recursive', 'iterative']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:
>
> - `countAndSay(1) = "1"`
> - `countAndSay(n)` is the way you would "say" the digit string from `countAndSay(n-1)`, which is then converted into a different digit string.
>
> To determine how you "say" a digit string, split it into the **minimal** number of substrings such that each substring contains exactly **one** unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

### Initial Thinking

Looking at how the question was stated, it seemed intuitive to approach this using recursion. They have designed the **base case** for us, when `n == 1` then we return `1`. Then we can code the **recursive case**.

The recursive case takes the `previous` string i.e. `countAndSay(n - 1)`, iterates through the characters and counts the occurances of that character until we reach a different character. We append the results to our `resultant` string.

### Recursive Solution

The **time complexity** of this solution is `O(n * m)` because the function is being called recursively `n` times before reaching the base case. Each function call iterates through a `string` size `m`.

Recall that the **space complexity** for recursive algorithms is related to the maximum depth of the recursion tree that is generated. Hence, this is `O(n)`.

```cpp
class Solution {
public:

    string countAndSay(int n) {
        if (n == 1) {
            return "1";
        }

        string prev = countAndSay(n - 1);
        string res = "";

        pair<char, int> p = make_pair(prev[0], 1);

        for (int i = 1; i < prev.size(); i++) {
            if (p.first == prev[i]) {
                p.second++;
            } else {
                res += to_string(p.second) + p.first;
                p = make_pair(prev[i], 1);
            }
        }

        // Need to add last one.
        res += to_string(p.second) + p.first;
        return res;
    }
};
```

### Next Steps - Optimization

We see above our solution is **not** _tail recursive_. By definition, **tail recursion** is a recursive function in which the recursive call is the **last** statement that is executed by the function. However, we still have many things to do after the recursive call in our solution above. We also need to consider the additional overhead when implementing a recursive function.

Thus, it would be best to try to perform an **iterative** solution instead. So how do we transform this recursive solution to an iterative one?

Firstly, we need to differentiate between _top-down_ and _bottom-up_ approaches. We see that our recursive solution follows a **top-down** approach, i.e. starting from `n = 4` it will call `n = 3` --> `n = 2` --> `n = 1`. We also need to see the _depth_ of each recursive function call, meaning, what information does `n = 4` need in order to compute? We see that `n = 4` is reliant on `n = 3` which is reliant on `n = 2` and so on. This is a depth of **one**.

Now that we understand our recursive solution a little better, we can transform it into an iterative one. The depth of recursive function call will tell us exactly how many `previous` variables we need to keep. In this case, it is only one. Next, iterative approaches usually go in the **reverse order** of the recursive function. So, instead of top-down we go **bottom-up**. Thus, we start at `n = 1` --> `n = 2` --> `n = 3` and so on.

### Iterative Solution

The **time complexity** of this solution is `O(n * m)` because we loop through `n` times, and each loop goes through a `string` size `m`. However, we **avoid** the additional recursive function overhead.

The **space complexity** of this solution is `O(n)` because the resultant `string` size is related to the input `n`.

```cpp

class Solution {
public:

    string countAndSay(int n) {
        string res = "1";

        for (int i = 1; i < n; i++) {
            string temp = "";
            pair<char, int> p = make_pair(res[0], 1);

            for (int j = 1; j < res.size(); j++) {
                if (p.first == res[j]) {
                    p.second++;
                } else {
                    temp += to_string(p.second) + p.first;
                    p = make_pair(res[j], 1);
                }
            }

            // Need to add last one.
            temp += to_string(p.second) + p.first;
            res = temp;
        }

        return res;
    }
};

```
