class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true
        }
		this.x=x;
		this.y=y;
		this.r=10
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
	        stroke("white")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}