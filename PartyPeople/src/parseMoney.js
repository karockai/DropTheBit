function ExpBySymbol(value) {
    let ret = value;
    let length = ret.length;
    let isPlus = true;
    if (ret.charAt() === '-'){
        ret = ret.substring(1,length);
        length -= 1;
        isPlus =false;
    } 
    // let color = isPlus ?  '#e53935' : '#1e88e5';
    let color = 'white';
    let ans = '';
    if (length >= 9) {
        // 199489230 -> 1억 9948만 9230
        ans += ret.substring(0, ret.length - 9 + 1) + '억 '; // 1억
        ret = ret.substring(ret.length - 9 + 1);
        
    }
    if (length >= 5) {
        // value 99489230
        ans += ret.substring(0, ret.length - 5 + 1) + '만 '; // 9948만
        ret = ret.substring(ret.length - 5 + 1);
    }
    ans+=ret;
    let minus = isPlus ? '' : '-';
    ans = minus+ans;
    return (ans);
}

const parseWonToStr = (won) => {
    if (typeof won == 'number') {
        // won = won - 100000000;
        won = won.toString();
    }
    return won;
};

function SplitByThree(value) {
    if (!value) return 'Something wrong.';
    if (value.length <= 3) return value;
    return (
        SplitByThree(value.substring(0, value.length - 3)) +
        ',' +
        value.substring(value.length - 3, value.length)
    );
}

export {ExpBySymbol, parseWonToStr, SplitByThree};