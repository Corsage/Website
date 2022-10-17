---
title: '1832. Check if the Sentence Is Pangram'
date: 2022-10-16
tags: ['leetcode', 'array', 'easy']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> A **pangram** is a sentence where every letter of the English alphabet appears at least once.
>
> Given a string `sentence` containing only lowercase English letters, return `true` if `sentence` is a **pangram**, or `false` otherwise.

### Initial Thinking

Since we are dealing with the English alphabet, there are only 26 characters to consider. Due to the constraints, it is also known that the input will be all lowercase. We just need to check if every letter exists.

There are many ways to do this. However, with the given constraints I think just using a `char array` size `26` would be sufficient. In this case, we map each letter to the index, i.e. `a` --> `0`, `b` --> `1` and so on.

### Scalability Notes

Our solution works well due to the constraints of the question. But it got me thinking, how would we approach this question for different alphabets, or additional characters? As long as the input remains sanitized, meaning that the input will only contain characters that we are looking for, using an `unordered_set` would also be a good solution. By doing so, we can simply check the size of our set with the total number of unique characters in the given alphabet.

### Time & Space Complexity

The **time complexity** of this solution is `O(N)` because we need to check the entire input `string`, character by character.

The **space complexity** of this solution is `O(1)` because the input does not affect our space.

```cpp
class Solution {
public:
    bool checkIfPangram(string sentence) {
        int alphabet[26] { 0 };

        for (auto& s : sentence) {
            alphabet[s - 'a']++;
        }

        for (int i = 0; i < 26; i++) {
            if (alphabet[i] == 0) {
                return false;
            }
        }

        return true;
    }
};
```
