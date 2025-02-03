//Things we are going to learn from CallAPI
// fs.writeFile
// fs.appendFile
// fs.copyFile
// fs.rename
// fs.unlink
// These are all the bare minimum to learn and there are others also

// const fs = require('node:fs');
const fs = require('fs');   //we can write this way also.

//How to create a writefile: 
//fs.writeFile(file, data[, options], callback)
// fs.writeFile("hey.txt", "Hey there! How are you ?", function(err) {
//     if(err) console.error(err);
//     else console.log("Done");
// });

//How to create a appendFile:  what ever we write that will be added at the end of existing content is known as append.
// fs.appendFile(path, data[, options], callback)

// fs.appendFile("hey.txt", "Hey! I am fine.", function(err) {
//     if(err) console.error(err);
//     else console.log("Done");
// })

//how to rename a file: fs.rename
//fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)

// fs.rename("hey.txt", "hello.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("Done");
// })

//how to copy a file: fs.copyFile
//fs.copyFile(src, dest[, mode], callback)

// fs.copyFile("hello.txt", "./copy/copy.txt",function(err) {
//     if(err) console.error(err);
//     else console.log("Done");
// })

//To see what is the error message. Then use below lines of code.
// fs.copyFile("hello.txt", "./copy2/copy.txt", function(err) {
//     if(err) console.error(err.message);
//     else console.log("Done");
// })

// fs.unlink (Deleting file)
//fs.unlink(path, callback)

// fs.unlink('./copy/copy.txt', function(err) {
//     if(err) console.error(err);
//     else console.log("Removed");
// })

// fs.rmdir : means remove directory (removing folders, it gives permissions to remove by default blank folders. It the folder has something in it then it doesn't give permission to remove it.)
// fs.rmdir(path[, options], callback)

// fs.rmdir("./emptyFolder", function(err) {
//     if(err) console.error(err);
//     else console.log("Empty Folder Removed");
// })

//If we use recursive: true it will remove empty folder, even it has content in it(folder > file), it will remove it.
// fs.rm("./emptyFolder", {recursive: true}, function(err){
//     if(err) console.error(err);
//     else console.log("Removed empty folder")
// })

//If we use recursive: false it will not remove content folder > file
// fs.rm("./emptyFolder", {recursive: true}, function(err){
//         if(err) console.error(err);
//         else console.log("Removed empty folder")
// })

