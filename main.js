//N1///////////

const arr=["Help", "me", "SOS"]

const r=replaced(arr)

function replaced(array){
    array.splice(1, 1, "SOS")
    return array
}

console.log(r)


//N2/////////////////

let text1="my name is mako"
let u=text2(text1)

function text2(_toUpperCase){
    return text1.toUpperCase()
}

console.log(u)

//N3/////////////////

const users=[{name: "Lasha", age: 30}, {name: "Saba", age:20}]

const n=newsort(users)

function newsort(arr){
   return arr.sort(function(a,b){
    return a.age -b.age
   })
}

console.log(n)

