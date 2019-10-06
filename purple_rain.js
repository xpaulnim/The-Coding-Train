// (138, 24,226)
// (230, 230, 250) bg

var drops = []

function setup() {
	createCanvas(700, 400)

	for(var i = 0; i < 500; i++) {
		drops.push(new Drop())
	}
}

function draw() {
	background(230, 230, 250)

	for(var i = 0; i < drops.length; i++) {
		drops[i].fall()
		drops[i].show()
	}
}

function Drop() {
	this.pos = createVector(random(width), random(-500, -100), random(0, 20))
	this.yspeed = map(this.pos.z, 0, 20, 4, 20)
	this.height = random(10, 20)
	this.len = map(this.pos.z, 0, 20, 1, 20)

	this.fall = function () {
		this.pos.y += this.yspeed
		this.yspeed += map(this.pos.z, 0, 20, 0, 0.2)

		if(this.pos.y > height) {
			this.pos.y = random(-200, -200)
			this.yspeed = map(this.pos.z, 0, 20, 4, 20)
		}
	}

	this.show = function() {
		var thick = map(this.pos.z, 0, 20, 1, 2)
		strokeWeight(thick)
		stroke(138, 24,226)
		line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.height)
	}
}