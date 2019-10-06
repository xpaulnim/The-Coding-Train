function setup() {
	createCanvas(700, 400)
}

function draw() {
	background(51)
	
	const hourNum = hour()
	const minNum = minute()
	const secNum = second()

	fill(255)
	noStroke()
	text(hourNum + ":" + minNum + ":" + secNum, 10, 200)

	translate(width/2, height/2)
	rotate(-1.57)

	strokeWeight(8)
	noFill()

	stroke(253, 200, 150)
	const hourAngle = map(hourNum, 0, 23, 0, 6.2)
	arc(0, 0, 300, 300, 0, hourAngle)

	push()		
	rotate(hourAngle)
	line(0, 0, 60, 0)
	pop()

	stroke(254, 100, 250)
	const minAngle = map(minNum, 0, 59, 0, 6.2)
	arc(0, 0, 280, 280, 0, minAngle)

	push()
	rotate(minAngle)
	line(0, 0, 80, 0)
	pop()

	stroke(255, 100, 150)
	const secAngle = map(secNum, 0, 59, 0, 6.2)
	arc(0, 0, 260, 260, 0, secAngle)

	push()
	rotate(secAngle)
	line(0, 0, 100, 0)
	pop()

	stroke(255)
	point(0, 0)
}