function Constructor(color , speedMax , currentSpeed) {
    this.color = color,
    this.speedMax= speedMax,
    this.currentSpeed = currentSpeed

    this.up = () => {
        if (this.currentSpeed < speedMax) {
            this.currentSpeed++;
        }

        console.log(`this is speen fish ${this.currentSpeed} km/h`);
    }

    this.down = () => {
        if (this.currentSpeed > speedMax) {
            this.currentSpeed--;
        }

        console.log(`this is speen fish ${this.currentSpeed} km/h`);
    }
}

console.clear();

const fish1 = new Constructor("red" , 0 , 20);
const fish2 = new Constructor("black" , 0 , 18);

console.log(fish1 , fish2);
