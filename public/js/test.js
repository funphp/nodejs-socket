var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
var square = function (x) { return x * x; };


function makeSquareFns(arr, square) {
    var fns = [];
    for (var i = 0; i < arr.length; i++) {
        fns.push((function() {
            console.log(i);
            return square(arr[i]);
        })(i));
    }
    return fns;
}

var funcs = makeSquareFns(arr, square);
//console.log(funcs[0]());

isEqual = true;
for (var i = 0; i < arr.length; i++) {
    if (funcs[i] !== square(arr[i])) {
        isEqual = false;
        console.log('wrong answer');
        break;
    }
}
if (isEqual) console.log('correct answer');
