---
title: '645: Set Mismatch'
date: 2022-10-23
tags: ['leetcode', 'math', 'easy?']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one** number and **loss of another** number.
>
> You are given an integer array `nums` representing the data status of this set after the error.
>
> Find the number that occurs twice and the number that is missing and return them in the _form of an array_.

### Remarks

This question can be solved in multiple ways. However, the more optimal solutions are outside the scope of the `easy` tag that this question has.

### Initial Thinking

This question can be divided in **two** ways.

Firstly, we need to find the number that occurs twice. Next, we need to find the number that is missing.

We know that an array size `n` is suppose to have the integers `1` to `n`. We can create a size `n + 1` array and use the given array values as an index in our new array and increase the count.

### First Solution

Using the initial thinking, we simply check which number has `2` and which number has `0` in the count.

The **time complexity** of this solution is `O(2n)` because we iterate through the `n` size array once and then again with the `n` size array that we made.

The **space complexity** of this solution is `O(n)` because we allocate space for an additional size `n` array that we use towards our solution.

```cpp
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        vector<int> res(2);
        vector<int> counts(nums.size() + 1, 0);

        for (int i = 0; i < nums.size(); i++) {
            counts[nums[i]]++;
        }

        for (int i = 1; i < counts.size(); i++) {
            if (counts[i] == 0) {
                res[1] = i;
            }

            if (counts[i] == 2) {
                res[0] = i;
            }
        }

        return res;
    }
};

```

### Next Steps - Optimization

> Is there any way we can do this question without using `O(n)` space and/or can we do this question with `O(n)` time complexity?

Fortunately, we can! However, this solution was definitely not intuitive and took some time to realize. The first thing we have to notice is that the question always relies on an _expected_ input. What this means is that we always want to compare our input to an array size `n` filled with integers `1` to `n`.

We may consider the expected input as a series `1` to `n`. In mathematics, this is known as an **arithmetic sequence**. If we take the summation of the series the formula becomes `(n * (n + 1)) / 2`.

Since the input given has a repeated number, we take the summation of that and subtract it against the _expected sum_. Then, we add the repeated integer (due to _double counting_ in the given sum) to get the **missing** integer. `missing = expected_sum - sum + repeated`.

We can find the repeated number through a clever technique that involves modifying our input array. Recall that the array size `n` may only have integers `1` to `n`. Following a similar strategy with our first solution, we map `nums[i]` as the index to use in `nums`, i.e. `nums[nums[i] - 1]` (we subtract `1` to offset it as an array index). We can mark each index by multiplying it by `-1`. Hence, a repeated number would already have `nums[nums[i] - 1] < 0`.

### Second Solution

The **time complexity** of this solution is `O(n)` because we iterate through the input array once.

The **space complexity** of this solution is `O(1)` because the input does not affect our space.

```cpp
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        vector<int> res(2);
        int n = nums.size();

        // Summation of series 1, 2, 3, ..., n.
        int expect = (n * (n + 1)) / 2;
        int sum = 0;
        for (int num : nums) {
            if (num < 0) {
                num *= -1;
            }

            if (nums[num - 1] < 0) {
                res[0] = num;
            } else {
                nums[num - 1] *= -1;
            }

            sum += num;
        }

        res[1] = expect - sum + res[0];
        return res;
    }
};
```
