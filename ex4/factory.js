function factory(color , speedMax , currentSpeed) {
    return{
        color,
        speedMax,
        currentSpeed,
    
        up(){
            if (this.currentSpeed < this.speedMax) {
                this.currentSpeed++;
            }
            console.log("this fish" + this.currentSpeed + "km/h");
    
        },
    
        down(){
            if (this.currentSpeed > this.speedMax) {
                this.currentSpeed--;
            }
            console.log("this fish" + this.currentSpeed + "km/h");
        }
    }
    
}



console.clear();

console.log(factory("red" , 20 , 0));
console.log(factory("red" , 20 , 12));



