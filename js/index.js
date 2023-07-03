document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("title"); 
    let count = 0;
    let t = setInterval(() => {
        if (count%2 === 1) 
        {
            title.style.backgroundColor = "#F88379";
            title.style.color = "#097969";
        }
        else
        {
            title.style.backgroundColor = "#097969";
            title.style.color = "#F88379";
        }
        count++;
    }, 100)

    let k = setTimeout(function() {
        clearInterval(t)
        document.getElementById("exp").style.visibility = "visible";
        setTimeout(function () {
            document.getElementById("exp").style.visibility = "hidden";
        }, 1000)
    }, 3000)
})
