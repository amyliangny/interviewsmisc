// Implement Linux find command as an API. The API will support finding files that:
// - Files that have a given size requirement.
// - Files with a certain naming pattern.

// Focus on 2 uses cases at first:
// - Find all files over 5 MB somewhere under a directory.
// - Find all PDF files somewhere under a directory.

// Design Unix File Search API to search file with different arguments as 
// "extension", "name", "size" ...
// The design should be maintainable to add new contraints.

//search a file recursively, make sure the extendability, using abstractbase class and DFS

//file system as n-ary tree
//root = starting node. files are leaf nodes and directories are n-ary trees
// perform DFS/BFS from root and visit all files
//if file satisfies find requirement then add to result
class File {
    constructor(name,size){
        this.name = name;
        this.size = size;
        this.children = [];
        this.extension = name.includes('.') ? name.split('.')[1] : ""
    }
}

class Directory {
    constructor(name,size){
        this.name = name;
        this.size = size;
    }
}


let newFile = new File('file1',1);
console.log(newFile);
const f2 = new File('file2',100);
newFile.children.push(f2);