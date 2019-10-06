const scl = 20
const w = 1200
const h = 1200

let terrain = []

function setup() {
	createCanvas(600, 600, WEBGL)

	cols = w / scl
	rows = h / scl

	for (var x = 0; x < rows; x++) {
		let zval = []
		for (var y = 0; y < cols; y++) {
			zval[y] = 0
		}
		terrain.push(zval)
	}
}

let flying = 0

function draw() {
	flying -= 0.1

	let yoff = flying
	for (var x = 0; x < rows; x++) {
		let zval = []
		let xoff = 0
		for (var y = 0; y < cols; y++) {
			terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100)
			xoff -= 0.1
		}
		yoff-= 0.1
		terrain[x][y] = zval
	}

	background(0)
	translate((-width/2)-(width/2),-height/3,-200)

	rotateX(PI/3)
	// rotateZ(PI/2);

	for (var y = 0; y < rows; y++) {
		beginShape(TRIANGLE_STRIP)
		for (var x = 0; x < cols; x++) {
			stroke(255)
			noFill()

			vertex(x*scl, y*scl, terrain[x][y])
			vertex(x*scl, (y+1)*scl, terrain[x][y+1])
		}
		endShape()
	}


}