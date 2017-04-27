class Minesweeper {
    constructor(rows = 5, columns = 5, mines = 5) {
        this.rows = 3;
        this.columns = 3;
        this.mines = 3;

        this.field = this.generateEmptyField(rows, columns);
        this.addMines(rows, columns, mines, this.field);
        this.fillWithAdjacentMinesCount(this.field);
    }

    fillWithAdjacentMinesCount(field) {
        field.forEach((row, rowIndex) => {
            field.forEach((element, columnIndex) => {
                if(!element.hasMine) {
                    row[columnIndex].adjacentMinesCount = this.getNumberOfAdjacentMines(rowIndex, columnIndex, field);
                }
            })
        })
    }

    getNumberOfAdjacentMines(row, column, field) {
        let sum = 0;
        for(let r = row - 1; r <= row + 1; r++) {
            for(let c = column - 1; c <= column + 1; c++) {
                if(!(r === row && c === column) && !!field[r] && !!field[r][c] && field[r][c].hasMine) {
                    sum++;
                }
            }
        }
        return sum;
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
        return field.hasMine ? "M" : field.adjacentMinesCount;
    }
}

module.exports = Minesweeper;
