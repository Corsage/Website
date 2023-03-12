---
title: '23: Merge k Sorted Lists'
date: 2023-03-12
tags: ['leetcode', 'hard', 'linked list', 'priority queue', 'map']
---

> You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
> Merge all the linked-lists into one sorted linked-list and return it.

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

### Initial Thinking

The first idea (and the naive approach) that comes to mind is that since the lists are already sorted in **ascending order**, we can compare the `head` of each linked list, find the min value, add it to our resultant linked list, and then move the selected linked list `head` forward. We simply just repeat this process until every `head` is a `nullptr`.

An example is shown below.
```
Input: lists = [[1,4],[1,3],[2,6]]
Output: [1,1,2,3,4,6]
Process:
[1, 4], head = 1
[1, 3], head = 1
[2, 6], head = 2

the min value is 1, so we move the head up 1->4.

[4], head = 4
[1, 3], head = 1
[2, 6], head = 1

the min value is 1, so we move the head up 1->3.

[4], head = 4
[3], head = 3
[2, 6], head = 2
...
```

### Time & Space Complexity

The **time complexity** of this solution is `O(n^k)` because we look at other head values multiple times before we traverse. Where `k` is the number of lists.

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

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* head = nullptr;
        ListNode* tail = nullptr;

        ListNode* temp = nullptr;
        int index = 0;

        if (lists.size() <= 0) {
            return head;
        }

        while (index >= 0) {
            for (int i = 0; i < lists.size(); i++) {
                if (lists[i]) {
                    if (!temp || temp->val > lists[i]->val) {
                        index = i;
                        temp = lists[i];
                    }
                }
            }

            if (temp) {
                if (!head) {
                    head = temp;
                    tail = head;
                } else {
                    tail->next = temp;
                    tail = tail->next;
                }

                lists[index] = lists[index]->next;
                temp = lists[index];
            } else {
                index = -1;
                if (tail) {
                    tail->next = nullptr;
                }
            }
        }

        return head;
    }
};
```

### Next Steps - Optimization

We see above in our example run through and code, that there is a lot of reptition. Specifically, we see that if a linked list `head` is not the **min value**, it will be looked at again in the next iteration. This is not a desired behaviour as we are **re-doing the same work**. This adds up and causes our solution to be slow for larger inputs.

Thus, it would be best to try a different approach. Two approaches came into my mind and are explained below.

### Priority Queue Solution

the **first** solution is we use a **priority queue** to solve this. Simply by creating a *custom comparator operator* for `ListNode`, the `priority queue` would do the rest of the work as we push the `ListNode` objects into it.

A priority queue is a data structure that provides `O(1)` lookup for a certain value based on the provided *comparison function*. By default, the implementation provides constant lookup for the largest value. However, the drawback is that it has `O(n log n)` insertions and extractions.

This is a good solution using just a data structure. The **next solution** also uses a data structure more suitable for the question, but this way also gives you more *flexibility* with how you can use the values later on.

The **time complexity** of this solution is `O(n * (n log n) + n)` because we iterate through the input array once, but the priority queue insertions are `O(n log n)` each. Then finally we empty the priority queue which had all `n` values.

The **space complexity** of this solution is `O(n)` because our priority queue is filled with all the values from the input.

```cpp
class Solution {
public:

    /**
     * Custom comparator impl for ListNode pointers.
     */
    struct CmpListNodePtrs
    {
        bool operator()(const ListNode* p, const ListNode* q) const
        {
            return p->val > q->val;
        }
    };

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* head = nullptr;
        ListNode* tail = nullptr;

        priority_queue<ListNode*, vector<ListNode*>, CmpListNodePtrs> pq;
        bool run = true;

        while (run) {
            run = false;

            // Push all the linked list nodes from list
            // until they are all empty.
            for (int i = 0; i < lists.size(); i++) {
                if (lists[i] != nullptr) {
                    run = true;

                    pq.push(lists[i]);
                    lists[i] = lists[i]->next;
                }
            }
        }

        // Create a merged sorted linked list
        // from the priotity queue.
        while (!pq.empty()) {
            if (!head) {
                head = pq.top();
                tail = head;
            } else {
                tail->next = pq.top();
                tail = tail->next;
            }

            pq.pop();
        }

        if (tail) {
            tail->next = nullptr;
        }

        return head;
    }
};
```

### Ordered Map Solution

the **second** solution is we use an **ordered map** to solve this.

An ordered map is a data structure that provides `O(1)` lookup to a `value` based on a `key`. We use an ordered map instead of a traditional unordered map because internally, the elements in a map are always sorted by its key. The insertion and search is `O(log n)` because of the rebalancing.

The idea is simple. We just keep a count of all the values, the ordered map will keep the keys sorted, so our `<key, value>` pair can be the `ListNode` value and the count of that value.

The **time complexity** of this solution is `O(n * log n + n)` because we iterate through the input array once, but the map insertions are `O(log n)` each. Then finally we iterate through the map which has all `n` values.

The **space complexity** of this solution is `O(n)` because our map is filled with all the values from the input.

```cpp
class Solution {
public:

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        map<int, int> m;

        // Keep count of all the values.
        for (auto& node: lists) {
            while (node) {
                m[node->val]++;
                node = node->next;
            }
        }

        if (m.size() <= 0) {
            return nullptr;
        }

        ListNode* head = nullptr;
        ListNode* tail = nullptr;

        // An ordered map is required as we
        // iterate through the map and create
        // our merged sorted linked list.
        for (auto& it : m) {
            for (int i = 0; i < it.second; i++) {
                if (!head) {
                    head = new ListNode(it.first);
                    tail = head;
                } else {
                    tail->next = new ListNode(it.first);
                    tail = tail->next;
                }
            }
        }

        return head;
    }
};
```



