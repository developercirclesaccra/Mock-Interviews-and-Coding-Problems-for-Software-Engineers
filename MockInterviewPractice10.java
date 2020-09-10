//QUESTION
/*You are given a phone book that consists of people's names and their phone number. After that you will be given some person's name as a query. For each query, print the phone number of that person.
Input Format
The first line will have an integer  denoting the number of entries in the phone book. Each entry consists of two lines: a name and the corresponding phone number.
After these, there will be some queries. Each query will contain a person's name. Read the queries until end-of-file.
Constraints:
A person's name consists of only lower-case English letters and it may be in the format 'first-name last-name' or in the format 'first-name'. Each phone number has exactly 8 digits without any leading zeros.
1 <= n <= 100000
1 <= Query <= 100000
Output Format
For each case, print "Not found" if the person has no entry in the phone book. Otherwise, print the person's name and phone number. See sample output for the exact format.
To make the problem easier, we provided a portion of the code in the editor. You can either complete that code or write completely on your own.
 
 
Sample Input
3
uncle sam
99912222
tom
11122222
harry
12299933
uncle sam
uncle tom
harry
 
 
Sample output
uncle sam=99912222
Not found
harry=12299933
 
 
 //starter code
import java.util.*;
import java.io.*;
 
class Solution{
    public static void main(String []argh)
    {
        Scanner in = new Scanner(System.in);
        int n=in.nextInt();
        in.nextLine();
        for(int i=0;i<n;i++)
        {
            String name=in.nextLine();
            int phone=in.nextInt();
            in.nextLine();
        }
        while(in.hasNext())
        {
            String s=in.nextLine();
        }
    }
}*/


//TO RUN:
create a java project in your favourite ide.
create a new class with name Solution.java.
copy Solution class copy in this file your newly created Solution.java
run the program file and copy the path to the input.txt file and paste in the console and press enter.

//OR 
copy Solution class code in this file.
paste it https://www.hackerrank.com/challenges/phone-book/problem and run


import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        try {
            int no_of_entries = 0;
            int i = 0;
            String name = null;
            int number = 0;
            String query = null;
            HashMap<String, Integer> phoneBook = new HashMap<String, Integer>();
            BufferedReader b = new BufferedReader(new InputStreamReader(
                    System.in));
            no_of_entries = Integer.parseInt(b.readLine());
            while (i < no_of_entries) {
                name = b.readLine();
                number = Integer.parseInt(b.readLine());
                phoneBook.put(name, number);
                i++;
            }
            while (!(query = b.readLine().trim()).isEmpty()) {
                if (phoneBook.containsKey(query))
                    System.out.println(query + "=" + phoneBook.get(query));
                else
                    System.out.println("Not found");
            }
        } catch (Exception e) {
System.out.println(e);
        }
    }
}
