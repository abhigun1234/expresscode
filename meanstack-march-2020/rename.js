var fs=require("fs")
fs.rename("country.txt","mycountry.txt",renameCompleted)
function renameCompleted(error)
{

    if(error)
        {
            console.log("error",error)
        }
        else
            {
                console.log("rename completed")
            }
}