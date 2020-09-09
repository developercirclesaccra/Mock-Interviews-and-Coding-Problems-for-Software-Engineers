import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;


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
999122222
tom
12299933
harry
12299933
james
4556454
 
 
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




class MockInterviewPractice10 {
    public static void main(String [] args) throws Exception {
        /* Read input and save as entries in a HashMap */
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.valueOf(br.readLine());
        HashMap<String, Integer> map = new HashMap<>();
        while (n-- > 0) {
            String name = br.readLine();
            int phone   = Integer.valueOf(br.readLine());
            map.put(name, phone);
        }

        /* Read each query and check if its in our HashMap */
        String s;
        while((s = br.readLine()) != null) {
            if (map.containsKey(s)) {
                System.out.println(s + "=" + map.get(s));
            } else {
                System.out.println("Not found");
            }
        }

        br.close();
    }
}