module.exports = function check(str, bracketsConfig) {

    const nAr = bracketsConfig.map((el) => el.join(''));


    for (let i = 0; i < nAr.length;) {
        if (str.includes(nAr[i])) {
            str = str.replace(nAr[i], '');
            i = 0;
            continue;
        }
        i++;
    }
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }

};