function run_if(){
    var date = document.getElementById("my_input").value;
    switch(Number(date)){
        case 0:
            alert("Sunday");
            break;
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
        default:
            alert("This doesn't look like a day to me");
            break;
    }
};