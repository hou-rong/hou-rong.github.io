var start = '1';
var end = '100';
var not_mod = '7'.split(',');
var not_in = '7'.split(',');


function any(iter) {
    for (var index = 0; index < iter.length; ++index) {
        if (iter[index]) return true;
    }
    return false;
}

function test_num(start, end, not_mod, not_in) {
    var list = [];
    for (var i = parseInt(start); i < parseInt(end); i++) {
        if (any(not_mod.map(function (x) {
                return i % parseInt(x) === 0;
            })) || any(not_in.map(function (x) {
                return i.toString().indexOf(x.toString()) > -1;
            }))) {
            list.push('拍手');
        }
        else {
            list.push(i.toString());
        }
    }
    return list;
}

console.log(test_num(start, end, not_mod, not_in));
