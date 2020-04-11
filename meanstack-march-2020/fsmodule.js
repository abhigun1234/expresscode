

var fs=require("fs")

//read file

//fs.readFile("dample.txt","utf8",reciveFileContent)
// var data=fs.readFileSync("sample.txt","utf8")
// console.log(data)
// function reciveFileContent(error,data)
// {

//     if(error)
//         {
//             console.log(error)
//         }
//     else
//         {
//             fs.writeFile("new.txt",data,"utf8",writeFileContent)
//         }
    
// }

// write file  
// var content="hi all how are you"
// fs.writeFile("new.txt",content,"utf8",writeFileContent)

// function writeFileContent(error)
// {
//     if(error)
//         {
//             console.log(error)
//         }
//         else
//             {
//                 console.log("File writting complete")
//             }
// }

// rename


// fs.rename("sample.txt","dample.txt",renameCompleted)
// function renameCompleted(error)
// {
//     if(error)
//         {

//         }
//         else
//             {
//                 console.log("renamed")
//             }

// }

//rename means delete 
// fs.unlink("new.txt",unLinkCompleted)

// function unLinkCompleted(error)
// {
//     if(error)
//         {
//          console.log("error",error)
//         }
//       else
//         {
//             console.log("File writing completed")
//         }

// }
//stat
fs.stat("dample.txt",statReadingCompleted)
function statReadingCompleted(error,stats)
{
    if(error)
        {
         console.log("error",error)
        }
        else{
            console.log("stats",stats)
        }
}