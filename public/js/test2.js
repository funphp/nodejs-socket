var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function(index) {
        return function() {
            console.log("My value: " + index);
        };
    }(i));
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
