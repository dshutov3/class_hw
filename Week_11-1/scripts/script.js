// functiong to submit name to action page
function submitName() {
    document.getElementById("frm1").submit();
    console.log("frm1.fname");
    console.log("frm1.lname");
}

// function to change the color of background depending on which case is provided by user
function changeColour(value)
{
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "blue";
        break;
        case 'r':
            color = "red";
        break;
        case 'p':
            color = "purple";
        break;
    }
    document.body.style.backgroundColor = color;
}