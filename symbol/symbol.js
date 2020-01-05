let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

console.log(id1.toString());
console.log(id1);

let id3 = Symbol.for("iidd");
let id4 = Symbol.for("iidd");

console.log(id3 === id4);

console.log("KeyFor id4 :", Symbol.keyFor(id4));

let obj = {
    id3: "Hide me 1",
    [id3]: "Hide Me 2"
}

console.log("Obj: ", obj[id3]);

console.log("for...in");
for (key in obj) {
    console.log("KEY :", key);
}

console.log('console.table(obj)');
console.table(obj);

console.log("Reflect.ownKeys(obj)");
console.table(Reflect.ownKeys(obj));

console.log("Object.getOwnPropertySymbols(obj)");
console.table(Object.getOwnPropertySymbols(obj));

let cloneObj = Object.assign({}, obj);

console.log('console.table(cloneObj)');
console.table(cloneObj);

console.log("Reflect.ownKeys(cloneObj)");
console.table(Reflect.ownKeys(cloneObj));

console.log("Object.getOwnPropertySymbols(cloneObj)");
console.table(Object.getOwnPropertySymbols(cloneObj));
