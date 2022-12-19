import generateMines from "./generate-mines";

function generateField(fieldSize, minesAmount) {
    let mineField = generateMines(fieldSize, minesAmount);
    const tmp = Math.sqrt(fieldSize);
    const firstColumn = [-1, tmp, -tmp, tmp - 1, -(tmp + 1)];
    const lastColumn = [1, tmp, -tmp, tmp + 1, -(tmp - 1)];
    const tilesAround = [1, tmp - 1, tmp, tmp + 1, -1, -(tmp - 1), -tmp, -(tmp + 1)];

    console.log(tilesAround);
    console.log(firstColumn);
    console.log(lastColumn);

    for (let i = 0; i < fieldSize; i++) {
        //let i = mineField[i].id;
        let currentTileVal = mineField[i].value;
        if (currentTileVal !== 9) {
            let minesAround = 0;
            if (i % tmp === 0) {
                //első oszlop elemei
                for (let j = 0; j < firstColumn.length; j++) {
                    let aroundTile = mineField[i - firstColumn[j]];
                    if (typeof aroundTile !== 'undefined') {
                        if (aroundTile.value === 9)
                            minesAround += 1;
                    }
                }
                if (minesAround !== 0)
                    mineField[i].value = minesAround;
            }

            else if (i % tmp === tmp - 1) {
                //utolsó oszlop elemei
                for (let j = 0; j < lastColumn.length; j++) {
                    let aroundTile = mineField[i - lastColumn[j]];
                    if (typeof aroundTile !== 'undefined') {
                        if (aroundTile.value === 9)
                            minesAround += 1;
                    }
                }
                if (minesAround !== 0)
                    mineField[i].value = minesAround;
            }
            else {
                for (let j = 0; j < tilesAround.length; j++) {
                    //középső oszlopok
                    let aroundTile = mineField[i - tilesAround[j]];
                    if (typeof aroundTile !== 'undefined') {
                        if (aroundTile.value === 9)
                            minesAround += 1;
                    }
                }
                if (minesAround !== 0)
                    mineField[i].value = minesAround;
            }
        }
    }
    console.log(mineField);

    return mineField;
}

export default generateField;