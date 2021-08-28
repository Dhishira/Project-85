canvas = document.getElementById("myCanvas") ;
ctx = canvas.getContext("2d") ;

background_image = "https://lh3.googleusercontent.com/hf5boC4j7WQJrkDMs_doeao99BCpEvTTzVNPtgJqex-_TIKETjriYzs_W4iqdvFliDcAnA=s128";
greencar_image = "https://lh3.googleusercontent.com/VKx3Vlu3WfLiD1HSIjPquV6cWpL8TD_M5U9SWzcuv3YbKxRw7G6p7JB20JBqTNSvbqFj=s85";

greencar_width = 80;
greencar_height = 120;

greencar_x = 5;
greencar_y = 435;

function add() 
{
	background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = upload_greencar;
    greencar_imgTag.src = greencar_image;
}

function upload_background() 
{
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function upload_greencar() 
{
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencar_y >=0)
    {
        greencar_y = greencar_y - 10;
        console.log("when up arrow is pressed,"+"x = "+greencar_x+" y = "+greencar_y);
        upload_background();
        upload_greencar();
    }
}
function down()
{
    if(greencar_y <=500)
    {
        greencar_y = greencar_y + 10;
        console.log("when down arrow is pressed,"+"x = "+greencar_x+" y = "+greencar_y);
        upload_background();
        upload_greencar();
    }
}
function left()
{
    if(greencar_x >=0)
    {
        greencar_x = greencar_x - 10;
        console.log("when up arrow is pressed,"+"x = "+greencar_x+" y = "+greencar_y);
        upload_background();
        upload_greencar();
    }
}
function right()
{
    if(greencar_x <=800)
    {
        greencar_x = greencar_x + 10;
        console.log("when up arrow is pressed,"+"x = "+greencar_x+" y = "+greencar_y);
        upload_background();
        upload_greencar();
    }
}