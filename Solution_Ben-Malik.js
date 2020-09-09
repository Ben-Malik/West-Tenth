//A helper function to compare two given objects
function compare(a, b) {
    if (parseInt(a.rank) < parseInt(b.rank)) {
        return -1;
    }
    if (parseInt(a.rank) > parseInt(b.rank)) {
        return 1;
    }
    return 0;
}

//The main function to return an array composed of unique and sorted values limited to four.
function getUniqueObjects(arrayA, arrayB) {
    var allArrays = arrayA.concat(arrayB);
    uniqueArray = [...new Map(allArrays.map(object => [object.id, object])).values()]
    var sortedArray = uniqueArray.sort(compare)
    
    return sortedArray.slice(0, 4);
}

//Test

var arrayA = [{id: 43, rank: 2},{id: 23, rank: 2}, {id: 2, rank: 23}, {id: 3, rank: 3}, {id: 4, rank: 29},{id: 5, rank: 12}];
var arrayB = [{id: 1, rank: 52}, {id: 2, rank: 22}, {id: 3, rank: 9}, {id: 4, rank: 21},{id: 5, rank: 45}];

console.log(getUniqueObjects(arrayA, arrayB));