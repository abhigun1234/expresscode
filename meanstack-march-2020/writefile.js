var fs=require("fs")
var content="1 :ravi 2:ramesh  3:raj"
fs.writeFileSync("student.txt",content)
function writeFileCompleted(error)
{

    if(error)
        {

            console.log("error",error)
        }
        else
            {
                console.log("File writting completed")
            }

}

