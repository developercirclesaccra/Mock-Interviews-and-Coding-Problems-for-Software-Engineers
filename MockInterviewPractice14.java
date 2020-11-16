package com.company;

import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

//QUESTION
//**************************
//Given an array of positive integers k, find the K’th largest element in that array.
//        Arr = [7,4,6,3,9,1]
//        K = 2
//        Output: 7

//Arr = [12,1,3,9,7,4,6,5]
//        K = 4
//        Output: 6


public class Main {

    public static int FindKthLargest(List<Integer> ints, int k)
    {
        // create a max-heap using PriorityQueue class from all
        // elements in the list
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        // or pass Comparator.reverseOrder()
        pq.addAll(ints);

        // pop from max-heap exactly (k-1) times
        while (--k > 0) {
            pq.poll();
        }

        // return the root of max-heap
        return pq.peek();
    }

    public static void main(String[] args)
    {
        List<Integer> ints = Arrays.asList(12,1,3,9,7,4,6,5);
        int k = 4;

        System.out.println("K'th largest element in the array is " +
                FindKthLargest(ints, k));
}
}
