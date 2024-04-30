//        '  #  '      -->    00,01,02,03,04    -> 0 row, 1 * #
//        ' ### '      -->    10,11,12,13,14    -> 1 row, 3 * #
//        '#####'      -->    20,21,22,23,24    -> 3 row, 5 * #

const pyramid = (n)=>{
    const midpoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row++) {
        let out = '';
        for (let col = 0; col < n + (n - 1); col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                out += "#"
            } else {
                out += ' '
            }
        }
        console.log(out)
    }
}
pyramid(3)
