
/*
 * 
 * @param {*} key 
 * @param {*} v 
 * @param {*} nv 
 */
exports.propReplace = function (obj, key, f) {
    console.log("prop replace");
    return replace(obj, key, f);
}

function replace(obj, key, f) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        const rs = [];
        const vs = obj
        for (let i = 0; i < vs.length; i++) {
            //     const r = obj[k][i];
            //     replace(r, key, f);
            // console.log(obj[k][i]);
            const it = replace(vs[i], key, f);
            rs.push(it);
        }
        console.log(rs);
        return rs;
    } else {
        if (typeof obj === 'object' && obj !== null) {
            const r = {};
            Object.keys(obj).forEach(k => {
                //         // console.log(k);
                //         // console.log(obj[k]);
                const v = obj[k];
                if (k == key) {
                    r[k] = f(v);
                    // console.log(f(v));
                } else {
                    r[k] = replace(v, key, f);
                }
            });
            console.log(r);
            return r;
        } else {
            console.log(obj);
            return obj;
        }
    }
    
}