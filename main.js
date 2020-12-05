var mouseEvent = "empty";
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var radius = 30;
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
color=document.getElementById("color").value;
radius=document.getElementById("radius").value;

    mouseEvent = "mousedown";


}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_x,current_y,radius,0,360);
        ctx.stroke();



    }
    last_x = current_x;
    last_y = current_y;

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}