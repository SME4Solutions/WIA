/*
     Name: Dustin Stephens
     Date: 03/04/2015
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/


if(Modernizr.canvas){
	//canvas is supported
	var canvasOne = document.getElementById("Canvas1");
		var ctx = canvasOne.getContext("2d");
			
			//Drawing style
			ctx.strokeStyle = "black";
			ctx.fillStyle = "blue";
			ctx.lineWidth = 5;
			
			//Draw Rectangle here
			ctx.strokeRect(0,0,50,100)
			ctx.fillRect(0,0,50,100)
	
		
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");
/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here


if(Modernizr.canvas){
	//canvas is supported
	var canvasTwo = document.getElementById("Canvas2");
		var ctx = canvasTwo.getContext("2d");
			
			//Drawing style
			ctx.strokeStyle = "black";
			ctx.fillStyle = "rgba(97, 0, 0, 0.5)";
			ctx.lineWidth = 5;
			
			//Draw Circle here
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
						//(360/180)*Math.PI == 2*Math.PI

			//Draw a circle starting at point (50 ,50)
			//That has a radius of 20 px 
			//Set the color of the circle to a shade of red and set the alpha to .5
			ctx.beginPath();
			ctx.arc(50,50,20,0, radians);
			ctx.fill();
			
			//Set the stroke color to black and use a radius of 30px for this circle.
			ctx.beginPath();
			ctx.arc(50,50,30,0, radians);
			ctx.stroke();
			
			
			
	
		
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var canvasThree = document.getElementById("Canvas3");
		var ctx = canvasThree.getContext("2d");
			
			//Drawing style
			ctx.strokeStyle = "black";
			ctx.fillStyle = "blue";
			ctx.lineWidth = 5;
			
			//Draw Star here
			
			ctx.beginPath(); 
			ctx.moveTo(100,100);
			ctx.lineTo(100,130);
			ctx.lineTo(77,144); 
			ctx.lineTo(100,157);
			ctx.lineTo(100,184);  
			ctx.lineTo(116,164);
			ctx.lineTo(143,170);
			ctx.lineTo(126,144);
			ctx.lineTo(144,116);
			ctx.lineTo(116,126);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();	
		
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
if(Modernizr.canvas){
	//canvas is supported
	var canvasFour = document.getElementById("Canvas4");
		var ctx = canvasFour.getContext("2d");
			
			//Drawing style
			ctx.strokeStyle = "black";
			ctx.fillStyle = "blue";
			ctx.lineWidth = 1;

			//Draw Umbrella top here
			ctx.beginPath();
			ctx.arc(100,100,50,0, 1*Math.PI, true);
			ctx.stroke();
			ctx.moveTo(50,100);
			ctx.bezierCurveTo(60,90,65,90,75,100);
			ctx.bezierCurveTo(85,90,90,90,100,100);
			ctx.bezierCurveTo(110,90,115,90,125,100)
			ctx.bezierCurveTo(135,90,140,90,150,100)

			ctx.fill();
			ctx.stroke();
			
	
		
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/
if(Modernizr.canvas){
	//canvas is supported
	var canvasFive = document.getElementById("Canvas5");
		var ctx = canvasFive.getContext("2d");
			
			//Draw Text here
			var textString= "Yay, I'm not horrible at this!";
			ctx.font = "25pt Verdana";
			ctx.fillStyle = "green";
			ctx.fillText(textString, 5,195);
	
		
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var canvasSix = document.getElementById("Canvas6");
		var ctx = canvasSix.getContext("2d");
			
			
			//Draw Image here
			var srcImg = document.getElementById("imgC6");
			
			ctx.drawImage(srcImg, 0, 500);
			
			//scaled
			ctx.drawImage(srcImg, 0, 0, 1650, 540);
			
			//spliced and reduced
			//(x,y starting point for cut, x,y dimensions of cut, x,y start drawing, x,y resizing dimensions )
			ctx.drawImage(srcImg, 304, 581, 626, 431, 1650, 0, 152, 290);
	
		
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var canvasSeven = document.getElementById("Canvas7");
		var ctx = canvasSeven.getContext("2d");
			
			//Drawing style
			ctx.strokeStyle = "black";
			ctx.fillStyle = "blue";
			ctx.lineWidth = 10;
			
			//Draw Scene here
			//(x,y starting point for cut, x,y dimensions of cut, x,y start drawing, x,y resizing dimensions )
			ctx.drawImage(srcImg, 304, 581, 326, 431, 20, 20, 152, 290);
	
			var textString= "It's not even raining!";
			ctx.font = "50pt Georgia";
			ctx.fillStyle = "blue";
			ctx.fillText(textString, 175,300);
			
			ctx.beginPath();
			ctx.arc(225,100,50,0, 1*Math.PI, true);
			ctx.stroke();
			ctx.moveTo(175,100);
			ctx.bezierCurveTo(185,90,190,90,200,100);
			ctx.bezierCurveTo(210,90,215,90,225,100);
			ctx.bezierCurveTo(235,90,240,90,250,100);
			ctx.bezierCurveTo(260,90,265,90,275,100);
			ctx.fill();
			//handle
			ctx.moveTo(225,100);
			ctx.bezierCurveTo(225,200, 215,200, 200,200);
			ctx.stroke();
			
}else{
	//canvas is not supported
	//Pollyfill goes here
	
	}
	console.log("modernizr");

