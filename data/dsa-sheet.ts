import { DSASheetType } from "@/utils/dsa-sheet-type";
import { ARRAY_AND_HASHING } from "./dsa-problems/array-and-hashing";
import { TWO_POINTER } from "./dsa-problems/two-pointers";
import { SLIDING_WINDOW } from "./dsa-problems/sliding-window";
import { STACK } from "./dsa-problems/stack";
import { BINARY_SEARCH } from "./dsa-problems/binary-search";
import { HEAP_AND_PRIORITY_QUEUE } from "./dsa-problems/heap-and-priority-queue";
import { LINKED_LIST } from "./dsa-problems/linked-list";
import { GRAPHS } from "./dsa-problems/graphs";
import { DYNAMIC_PROGRAMMING } from "./dsa-problems/dynamic-programming";
import { GREEDY } from "./dsa-problems/greedy";
import { INTERVALS } from "./dsa-problems/intervals";
import { MATH_AND_GEOMETRY } from "./dsa-problems/math-and-geometry";
import { BIT_MANIPULATION } from "./dsa-problems/bit-manipulation";

export const DSA_SHEET: DSASheetType[] = [
  {
    topicId: "array-and-hashing-101",
    topicName: "Array and Hashing",
    description: "Array and Hashing problems",
    problems: ARRAY_AND_HASHING,
  },
  {
    topicId: "two-pointers-102",
    topicName: "Two Pointers",
    description: "Two pointers problems",
    problems: TWO_POINTER,
  },
  {
    topicId: "sliding-window-103",
    topicName: "Sliding Window",
    description: "Sliding window problems",
    problems: SLIDING_WINDOW,
  },
  {
    topicId: "binary-search-104",
    topicName: "Binary Search",
    description: "Binary Search problems",
    problems: BINARY_SEARCH,
  },
  {
    topicId: "stack-105",
    topicName: "Stack",
    description: "Stack problems",
    problems: STACK,
  },
  {
    topicId: "heap-and-priority-queue-106",
    topicName: "Heap and Priority Queue",
    description: "Heap and Priority Queue problems",
    problems: HEAP_AND_PRIORITY_QUEUE,
  },
  {
    topicId: "linked-list-107",
    topicName: "Linked List",
    description: "Linked List problems",
    problems: LINKED_LIST,
  },
  {
    topicId: "graphs-108",
    topicName: "Graphs",
    description: "Graphs problems",
    problems: GRAPHS,
  },
  {
    topicId: "dynamic-programming-109",
    topicName: "Dynamic Programming",
    description: "Dynamic Programming problems",
    problems: DYNAMIC_PROGRAMMING,
  },
  {
    topicId: "greedy-110",
    topicName: "Greedy",
    description: "Greedy problems",
    problems: GREEDY,
  },
  {
    topicId: "intervals-111",
    topicName: "Intervals",
    description: "Intervals problems",
    problems: INTERVALS,
  },
  {
    topicId: "bit-manipulation-112",
    topicName: "Bit Manipulation",
    description: "Bit Manipulation problems",
    problems: BIT_MANIPULATION,
  },
  {
    topicId: "math-and-geometry-113",
    topicName: "Math and Geometry",
    description: "Math and Geometry problems",
    problems: MATH_AND_GEOMETRY,
  },
];
