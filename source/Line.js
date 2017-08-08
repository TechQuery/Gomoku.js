'use strict';


class Line extends Array {

    constructor(player) {

        super().player = player;

        this.min = {x: 0,  y: 0};    this.value = {x: 0,  y: 0};

        this.slope = null;
    }

    getSlope(x, y) {

        return  (y - this[0][1])  /  (x - this[0][0]);
    }

    setValueOf(key, value) {

        if (this.min[ key ]  <  value)
            this.value[ key ]  |=  1  <<  (value - this.min[ key ]);
        else
            this.value[ key ]  =  1  |  (
                this.value[ key ]  <<  (this.min[ key ] - value)
            );

        this.min[ key ]  =  Math.min(this.min[ key ],  value);
    }

    isContinuous() {

        if (this.length > 1)
            for (var key in this.value)
                if (this.value[ key ]  ===  (Math.pow(2, this.length)  -  1))
                    return true;

        return false;
    }

    addPoint(x, y) {

        switch ( this.length ) {
            case 0:
                this.min.x = x,  this.min.y = y;    break;
            case 1:
                this.slope = this.getSlope(x, y);    break;
            default:
                if (this.getSlope(x, y)  !==  this.slope)
                    throw RangeError("The slope isn't match");
        }

        this.setValueOf('x', x);    this.setValueOf('y', y);

        this.push( [x, y] );

        return this.isContinuous();
    }
}

module.exports = Line;
