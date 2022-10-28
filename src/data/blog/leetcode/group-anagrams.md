---
title: '49: Group Anagrams'
date: 2022-10-27
tags: ['leetcode', 'map', 'sort']
description: This is a custom description for SEO and Open Graph purposes. If it's not provided, it defaults to auto-generated excerpts of the page content.
---

> Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.
>
> An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Initial Thinking

By definition, two words are anagrams if and only if they contain exactly the same letters. So we consider the example, `ate` and `eat`. If we sort the letters in the word, then the resultant is `aet` for both. This is how we group anagrams together.

By using an `unordered_map` we can group up the words in the input array by their anagrams.

### Unordered Map

An `unordered_map` is a container that **stores elements** by a combination of a _key value and a mapped value_. The key value is unique and it identifies the element that is mapped.

Since we want to group anagrams, the **sorted anagram** is the key, and the values can be the array or array index the words go to. In general, the average time complexity of **search, insert, and delete** from this data structure ([hash table](https://en.wikipedia.org/wiki/Hash_table)) is `O(1)`.

### Time & Space Complexity

The **time complexity** of this solution is `O(n * k log k)` because we sort each word in the input array.

The **space complexity** of this solution is `O(n)` because we use a `unordered_map` that is filled with all `n` words.

```cpp
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> res;
        unordered_map<string, int> umap;

        int index = 0;
        for (auto& str : strs) {
            string s = str;
            sort(s.begin(), s.end());

            if (umap.find(s) != umap.end()) {
                // Anagram exists already.
                res[umap[s]].push_back(str);
            } else {
                umap[s] = index;
                res.push_back(vector<string> { str });
                index++;
            }
        }

        return res;
    }
};
```
