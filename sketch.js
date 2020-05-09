function setup() {
    createCanvas(windowWidth, windowHeight);
    
	p1 = {x: 0, y:0};
    p2 = {x: windowWidth, y:windowHeight}
    
	p3 = {x: 0, y: windowHeight}
    p4 = {x:windowWidth, y: 0}
    
	p5 = {x:0, y: windowHeight/2}
    p6 = {x:windowWidth, y:windowHeight/2}
    
	p7 = {x:windowWidth/2, y:0}
	p8 = {x:windowWidth/2, y:windowHeight}

}

function draw() {
	linea(p1,p2)
	linea(p3,p4)
	linea(p5,p6)
	linea(p7,p8)
}

function linea(p1, p2){
	var p,xi,yi,k;
	var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;

    
	let y=p1.y,x=p1.x;
	
	if (dx >dy || dy ==0) {
		p = dx;
	}else {
		p=dy;
		
	}
	xi=dx/p;
    yi=dy/p;

	for(k=0;k<p;k++){
		x+=xi;
		y+=yi
		console.log(x+"&"+y)
		point(x, y);
	}
}
