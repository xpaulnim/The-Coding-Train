var snake;
var scl = 20

var food

function setup() {
	createCanvas(600, 600)

	snake = new Snake()
	pickLocation()

	frameRate(10)
}

function draw() {
	background(51)
	keyPressed()

	snake.update()
	snake.show()
	if(snake.eat(food)) {
		pickLocation()
	}
	snake.death()
	
	fill(255, 0, 100)
	ellipse(food.x, food.y, scl, scl);
}

function pickLocation() {
	var cols = floor(width / scl)
	var rows = floor(height / scl)

	food = createVector(floor(random(cols)), floor(random(rows)))
	food.mult(scl)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		snake.dir(0, -1)
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1)
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0)
	} else if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0)
	}
}

function Snake() {
	this.pos = createVector(0, 0)
	this.speed = createVector(1, 0)
	this.total = 1
	this.tail = []

	this.dir = function (x, y) {
		this.speed.x = x
		this.speed.y = y
	}

	this.eat = function (other) {
		if (dist(this.pos.x, this.pos.y, other.x, other.y) < 1) {
			this.total++
			// this.tail.push()
			return true
		} else {
			return false
		}
	}

	this.death = function () {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i]
			var d = dist(this.pos.x, this.pos.y, pos.x, pos.y)

			if(d < 1) {
				this.total = 1;
				this.tail = []
			}
		}
	}

	this.update = function () {
		if(this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length - 1; i++) {
				this.tail[i] = this.tail[i + 1]
			}
		}

		this.tail[this.total-1] = createVector(this.pos.x, this.pos.y)

		this.pos.x += this.speed.x * scl
		this.pos.y += this.speed.y * scl

		this.pos.x = constrain(this.pos.x, 0, width-scl)
		this.pos.y = constrain(this.pos.y, 0, height-scl)
	}

	this.show = function () {
		fill(255)
		for (var i = 0; i < this.tail.length - 1; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl)
		}
		rect(this.pos.x, this.pos.y, scl, scl)
	}
}