var hello = function () {
    console.log("hello")
};

function bye(funarg)
{    funarg()
     console.log("bye bye")
}

bye(hello)

