var canvasBody = document.getElementById("canvas");
	canvas = canvasBody.getContext("2d"),
	
	w = canvasBody.width= window.innerWidth,
	h = canvasBody.height = 430,
	centerCubeX= -1,
	centerCubeY= -1,
	edgeCubeX=-1,
	edgeCubeY=-1,
	wightCube = -1,
	heightCube = -1,
	
	
canvasBody.addEventListener("mousedown", function(e)
{
	console.log("MouseDown")
	centerCubeX = e.offsetX,
	centerCubeY = e.offsetY;
});

canvasBody.addEventListener("mouseup", function(e)
{
	console.log("MouseUp")
	edgeCubeX = e.offsetX,
	edgeCubeY = e.offsetY,
	
	wightCube = 2*Math.abs(edgeCubeX-centerCubeX);
	heightCube = 2*Math.abs(edgeCubeY-centerCubeY);
	if((centerCubeX<edgeCubeX)&&(centerCubeY>edgeCubeY)) {
		canvas.fillRect(edgeCubeX-wightCube,edgeCubeY,wightCube,heightCube);
		console.log("draw1")
	} else {
		if((centerCubeX<edgeCubeX)&&(centerCubeY<edgeCubeY)) {
			canvas.fillRect(edgeCubeX-wightCube,edgeCubeY+heightCube,wightCube,heightCube);
			console.log("draw2")
		} else {
			if((centerCubeX>edgeCubeX)&&(centerCubeY<edgeCubeY)) {
				canvas.fillRect(edgeCubeX,edgeCubeY+heightCube,wightCube,heightCube);
				console.log("draw3")
			} else {
				if((centerCubeX>edgeCubeX)&&(centerCubeY>edgeCubeY)) {
					canvas.fillRect(edgeCubeX,edgeCubeY,wightCube,heightCube);
					console.log("draw4")
				} 
			}
		}
	}
});

canvasBody.add