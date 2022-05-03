function determinant(n) {
    console.log("started the solve");
    var m = JSON.parse(JSON.stringify(n));
    var final_result = [];
    let globfirstRow = m[0];
    if (m.length == 1) return m[0][0];
    else if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    else {
        m.splice(0, 1);
        let res = 0;
        let minor = JSON.parse(JSON.stringify(m));
        for (let i = 0; i < globfirstRow.length; i++) {
            for (let j = 0; j < minor.length; j++) {
                minor[j].splice(i, 1);
            }
            if (minor.length != 3) {
                let det_res = determinant(minor);
                final_result.push(det_res * globfirstRow[i]);
            } else {
                final_result.push(globfirstRow[i] * Solve3x3(minor));
            }
            minor = JSON.parse(JSON.stringify(m));
        }

        final_result.forEach((det, indx) => {
            if (indx % 2 == 1) {
                res -= det;
            } else {
                res += det;
            }
        });

        return res;
    }
}

function Solve3x3(m) {
    let res = 0;
    let dets = [];
    let firstRow = m[0];
    m.splice(0, 1);
    let minor = JSON.parse(JSON.stringify(m));

    for (let i = 0; i < minor[0].length; i++) {
        for (let j = 0; j < minor.length; j++) {
            minor[j].splice(i, 1);
        }
        let first = 1;
        let second = 1;

        for (let k = 0; k < minor.length; k++) {
            first *= minor[k][k];
        }
        for (let k = minor.length - 1, y = 0; k >= 0; k--, y++) {
            second *= minor[y][k];
        }
        dets.push(firstRow[i] * (first - second));
        minor = JSON.parse(JSON.stringify(m));
    }

    dets.forEach((det, indx) => {
        if (indx % 2 == 1) {
            res += det * -1;
        } else {
            res += det;
        }
    });
    return res;
}

export default determinant;
