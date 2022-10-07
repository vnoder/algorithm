/**
 * Created by vd on 28/03/18.
 */
'use strict';
//let buff = new Buffer('你好', 'utf-8');
//console.log(buff);
//console.log(buff.length);
//console.log(256 >>> 8);
//console.log(1 << 7);
//console.log(1024 % 128);
//console.log(1024 >>> 7);
//
//let b = new Buffer(1);
//b.writeInt8(6);
//console.log(b);

var LEFT_SHIFT_BITS = 1 << 7;
function fill(buf, data, size) {
    var offset = size - 1, b;
    for(; offset >= 0; offset--) {
        b = data % LEFT_SHIFT_BITS;
        if(offset < size - 1) {
            b |= 0x80;
        }
        buf.writeUInt8(b, offset);
        data >>>= 7;
    }
};

function calLen(length) {
    var res = 0;
    while(length > 0) {
        length >>>= 7;
        res++;
    }

    return res;
}


function test(len) {
    //let buff = new Buffer(len + calLen(len));
    //fill(buff, len, calLen(len));
    //console.log(buff.slice(0,10), calLen(len));
    console.log(calLen(len));
}

//test(1);
//test(2);
//test(126);
//test(127);
test(127);
test(128);
test(129);
test(1024);

console.log(0x1 &  0x80);