class Minesweeper {
    constructor(rows = 5, columns = 5, mines = 5) {
        this.rows = 3;
        this.columns = 3;
        this.mines = 3;

        this.field = this.generateEmptyField(rows, columns);
        this.addMines(rows, columns, mines, this.field);
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

    addMines(rows, columns, numberOfMines, field) {
        while(numberOfMines > 0) {
            let row = Math.floor(Math.random() * rows);
            let column = Math.floor(Math.random() * columns);
            if(!field[row][column].hasMine) {
                field[row][column].hasMine = true;
                numberOfMines--;
            }

        }
    }

    toString() {
        return this.field.reduce(
            (b,r) => b + r.reduce((a,b) => a + this.getStringRepresentationForPosition(b),"") + "\n", ""
        );
    }

    getStringRepresentationForPosition(field) {
        return field.hasMine ? "M" : "-";
    }
}

module.exports = Minesweeper;
