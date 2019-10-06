let r1 = 100
let r2 = 100
let m1 = 20
let m2 = 20
let a1 = 0
let a2 = 0

let a1_v = 0
let a2_v = 0

let a1_a = 0
let a2_a = 0

let g = 1

let pg

function setup() {
	createCanvas(600, 600)
	a1 = PI/4
	// a2 = PI/2

	pg = createGraphics(width*2, height*2)
}

function draw() {

	let num1 = -g * (2 * m1 + m2) * sin(a1)
	let num2 = -m2 * g * sin(a1 - 2 * a2)
	let num3 = -2 * sin(a1 - a2) * m2
	let num4 = a2_v*a2_v * r2 + a1_v *a1_v * r1 * cos(a1-a2)
	let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1-2 * a2))

	a1_a = (num1 + num2 + num3 * num4) / den

	background(51)

	strokeWeight(2)
	stroke(255)
	fill(255)

	push()

	translate(width/2, height/2)

	let pos1 = createVector(r1 * sin(a1), r1 * cos(a1))
	line(0, 0, pos1.x, pos1.y)
	ellipse(pos1.x, pos1.y, m1, m1)

	let pos2 = createVector(pos1.x + r2 * sin(a2), pos1.y + r2 * cos(a2))
	line(pos1.x, pos1.y, pos2.x, pos2.y)
	ellipse(pos2.x, pos2.y, m2, m2)

	a1 += a1_v
	a2 -= a2_v

	a1_v += a1_a
	a2_v += a2_a
	
	pop()

	pg.strokeWeight(4)
	pg.stroke(255)

	pg.point(pos1.x + (width/2), pos1.y+height/2)
	pg.point(pos2.x + (width/2), pos2.y+height/2)

	image(pg, 0, 0)
}