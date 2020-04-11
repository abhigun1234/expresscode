// abc.txt xyz.txt

var fs=require("fs")

fs.readFile("abc.txt","utf8",readFileCompleted)

function readFileCompleted(error,data)
{

    if(error)
        {

            console.log("error",error)
        }
        else
            {

                console.log("data",data)

                fs.writeFile("xyz.txt",data,writingFileCompleted)
            }
            function writingFileCompleted(error)
            {
                if(error)
                    {
                         console.log("error",error)
                    }
                    else{

                        console.log("writing completed")
                    }

            }

}