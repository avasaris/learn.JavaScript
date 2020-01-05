let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);


let id3 = Symbol.for("iidd");
let id4 = Symbol.for("iidd");

console.log(id2 === id3);
console.log(id3 === id4);

console.log(id1.toString());
console.log(id1);

let obj = {
    id3: "Hide me 1",
    [id3]: "Hide Me 2"
}

console.log(obj[id3]);

for(key in obj){
    console.log("KEY:", key);
}

console.table(obj);

console.table(Reflect.ownKeys(obj));

console.log("KeyFor id4 :", Symbol.keyFor(id4));
