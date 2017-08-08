'use strict';

const Line = require('./Line');


class Gomoku extends Array {

    constructor(order, xLength, yLength) {

        super().winner = this.last = null;

        if (! Number.isSafeInteger(this.order = order))
            throw TypeError('A safe Integer is required');

        this.xLength = xLength || order;

        this.yLength = yLength || this.xLength;

        if (order  >  Math.min(this.xLength, this.yLength))
            throw RangeError('The board is lack of space');

        this.board = [ ];
    }

    addTo(line, x, y) {

        line = (line instanceof Line)  ?  line  :  this[ line ];

        try {
            if (line.addPoint(x, y)  &&  (line.length >= this.order))
                return  this.winner = line.player;

        } catch (error) {  return null;  }
    }

    signUp(player, x, y) {

        if (this.winner != null)
            throw Error(`Player ${this.winner} has won the game`);

        if (player === this.last)
            throw Error("It isn't your turn");

        var index = this.xLength * y + x;

        if (index  >  (this.xLength * this.yLength - 1))
            throw Range('Out of the board scope');

        if (this.board[ index ]  !=  null)
            throw ReferenceError('This space is occupied');

        this.last = this.board[ index ] = player;

        return index;
    }

    setChessOf(player, x, y) {

        this.signUp(player, x, y);

        for (let line of this)
            if ((line.player === player)  &&  (this.addTo(line, x, y) !== null))
                return this.winner;

        return  this.addTo(this.push(new Line( player )) - 1,  x,  y);
    }
}

module.exports = Gomoku;
