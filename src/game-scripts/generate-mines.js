function generateMines(fieldSize, minesAmount) {

    let field = [];
    let mineSpots = [];
    let value = 0;

    //Aknát tartalmazó mezők generálása
    while (mineSpots.length < minesAmount) {
        let mineIndex = Math.floor(Math.random() * fieldSize);
        if (!mineSpots.includes(mineIndex)) {
            mineSpots.push(mineIndex);
        }
    }

    //Aknák "elhelyezése"
    for (let i = 0; i < fieldSize; i++) {
        if (mineSpots.includes(i)) {
            value = 9;
        }
        else
            value = '';
        field.push({
            id: i,
            value: value
        });
    }

    return field;
}

export default generateMines;
