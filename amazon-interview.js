Find the most common 3-page user sequence (across all users) present in traffic logs.
- Logs are of the form <user id> <page id>, with each page view on a separate line.
Example log:
A p1
B p2
A p2
C p3
B p3
A p3
B p4
A p4
C p1
D p6
C p2

Ans P2->P3->P4 [p2,p3,p4]
A p1 A (p2 A p3 A p4)
(B p2 B p3 B p4)
C p3 C p1 C p2
D p6

//if everyone less than 3, ignore users. then return empty array

//iterate over data
//obj A: [1, p2, 3, 4......]
    B: [2,3,4]
    c: [3,1,2]

[1,2,3] : 1
[2,3,4] : 2

//

function trafficLog (array){
    //[[A,p1], [B,1]]
    const map = new Map(); // A: [1, p2, 3, 4......]
    const sequence = new Map(); //[1,2,3] : 1
    let currCount = 0;
    let output = [];
    
    //Time: O(n) # el in array
    for (let i = 0; i <array.length; i++){
        const [user,page] = array[i];
        if (!map.get(user)) map.set(user, []);
        map.set(user, map.get(set).push(page)); //O(1)
    }
    
    //populate sequence map
    //Time: O(n) # users () -> O(n^2)
    for (const [user,pageArr] of map){ // pageArr: [1, p2, 3, 4......]
        //Time: O(n)
        for (let i= 0; i < pargeArr.length - 2; i++){
            if (!sequence.get([pageArr[i], pageArr[i+1], pageArr[i+2]]) sequence.set([pageArr[i], pageArr[i+1], pageArr[i+2]], 1);
            else sequence.set([pageArr[i], sequence.get([pageArr[i], pageArr[i+1], pageArr[i+2]]) + 1);
            
            if (sequence.get([pageArr[i], pageArr[i+1], pageArr[i+2]]) > currCount) output = [pageArr[i], pageArr[i+1], pageArr[i+2]];
        }
    }
    
    //Time: O(n) # of sequences
    //maxp heap: O(logn)
    //Time O(1) 
    //iterate over sequence map to find max count
    
    //for (const [seq, count] of sequence){
    //    if (count > currCount) output = seq;
    //}
    
    return output;
    
}