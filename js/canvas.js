/*
 * Created On: 09/11/2020
 * Created By: Ryan Purse
 */

class DvD {
    constructor() {
        this.dvdLogoSrc = new Image();
        this.dvdLogoSrc.src = "../images/dvd.png";
        this.size = [315, 160];
        this.pos = [Math.random() * (window.innerWidth - this.size[0]), Math.random() * (window.innerHeight - this.size[1])];
        this.vel = [2, 2];
    }

    collide(otherPos, otherSize) {
        if (this.pos[0] < otherPos[0] + otherSize[0] && this.pos[0] + this.size[0] > otherPos[0]) {
            if (this.pos[1] < otherPos[1] + otherSize[1] && this.pos[1] + this.size[1] > otherPos[1]) {
                let pos = [this.pos[0] - otherPos[0], this.pos[1] - otherPos[1]];
                if (pos[0] > 0) {
                    this.vel[0] = 2;
                }
                else {
                    this.vel[0] = -2;
                }
                if (pos[1] > 0) {
                    this.vel[1] = 2;
                }
                else {
                    this.vel[1] = -2;
                }
            }
        }
    }

    update() {
        if (this.pos[0] + this.size[0] > canvas.width || this.pos[0] < 0) {
            this.vel[0] *= -1;
        }
        if (this.pos[1] + this.size[1] > canvas.height || this.pos[1] < 0) {
            this.vel[1] *= -1;
        }
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    draw(ctx) {
        ctx.drawImage(this.dvdLogoSrc, this.pos[0], this.pos[1]);
    }
}

window.onresize = event => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

let canvas = document.getElementById("canvas");
// Set the width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let dvds = [new DvD()];
for (let i = 0; i < 2; i++){
    dvds.push(new DvD());
}

function main() {
    // Get a reference to our canvas by the specified ID


    // update
    for (let dvd of dvds) {
        for (let otherDvd of dvds) {
            if (dvd !== otherDvd) {
                dvd.collide(otherDvd.pos, otherDvd.size);
            }
        }
        dvd.update();
    }


    // draw
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // main draw
    for (let dvd of dvds) {
       dvd.draw(ctx);
    }


    requestAnimationFrame(main);
}

window.onload = main;
