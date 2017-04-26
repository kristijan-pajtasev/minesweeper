class Minesweeper {
    constructor(rows = 5, columns = 5, mines = 3) {
        this.rows = 3;
        this.columns = 3;
        this.mines = 3;

        this.field = this.generateEmptyField(rows, columns);
    }

    generateEmptyField(rows, columns) {
        let field = []
        for(let row = 0; row < rows; row++) {
            field[row] = [];
            for(let column = 0; column < columns; column++) {
                field[row][column] = {
                    clicked: false,
                    hasMine: false,
                    adjacentMinesCount: 0
                }
            }
        }
        return field;
    }

    toString() {
        return this.field.reduce(
            (b,r) => b + r.reduce((a,b) => a + this.getStringRepresentationForPosition(b),"") + "\n", ""
        );
    }

    getStringRepresentationForPosition(field) {
        return "-";
    }
}

module.exports = Minesweeper;
