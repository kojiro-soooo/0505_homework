var arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)

// filter
Array.prototype.myFilter = function(cb){
    var res = [];
    for (let i=0; i<this.length; i++){
        if (cb(this[i])){
            res.push(this[i]);
        }
    }
    return res;
}
console.log("Filter for odd numbers: ", arr.myFilter(ele=> ele%2 !=0)); // gets odd numbers

// find
Array.prototype.myFind = function(cb){
    for (let i=0; i<this.length; i++){
        if(cb(this[i])){
            return this[i]
        }
    }
    return null;
}
console.log("Find first number greater than '5': ",arr.myFind(ele => ele > 5)); // first element that is greater than 5 is 6

// concat
Array.prototype.myConcat = function(arr){
    var res = []

    for (let i=0; i<this.length; i++){
        res.push(this[i])
    }

    for (let i=0; i<arr.length; i++){
        res.push(arr[i])
    }

    return res;
}
var arr2 = [10,11,12,13,14,15]
console.log("Concat arr and arr2: ", arr.concat(arr2))

// push
Array.prototype.myPush = function(val){
    var len = this.length;
    this[len] = val;
    len++;
    this.length = len;
    return this;
}
console.log("Push 100 into arr: ",arr.myPush(100));

// pop
Array.prototype.myPop = function(){
    var len = this.length-1;
    var val = this[len];
    this.length = len
    delete this[len]
    return val;
}
console.log("Pop 100 from array: ", arr.myPop());

// slice
Array.prototype.mySlice = function(start, end){
    var res = []
    for (let i=start; i<end; i++){
        res.push(this[i])
    }
    return res;
}
console.log("Slice first 4 elements of arr: ", arr.mySlice(0, 4))