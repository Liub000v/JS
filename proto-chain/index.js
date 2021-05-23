let { o3 } = require('goss_proto');

let arr = []

let proto = o3

while (Object.getPrototypeOf(proto)) {
    proto = Object.getPrototypeOf(proto);
    arr.push(proto.name)
}

console.log(arr)