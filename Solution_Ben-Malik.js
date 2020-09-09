/**
 * @author Ben-Malik TCHAMALAM
 * https://benmalik.com
 * 
 */

//A helper function to compare two given objects
function compare(objectA, objectB) {
    if (parseInt(objectA.rank) < parseInt(objectB.rank)) {
        return -1;
    }
    if (parseInt(objectA.rank) > parseInt(objectB.rank)) {
        return 1;
    }
    return 0;
}

/**
 * The main function to return an array composed of unique and sorted values limited to four.
 * @param {*} arrayA An array of objects to be concatenated.
 * @param {*} arrayB An array of objects to be concatenated.
 */
function getUniqueObjectsSortedByRank(arrayA, arrayB) {
    var allArrays = arrayA.concat(arrayB);
    uniqueArray = [...new Map(allArrays.map(object => [object.id, object])).values()];
    var sortedArray = uniqueArray.sort(compare);
    
    return sortedArray.slice(0, 4);
}

//Test

var arrayA = [{id: 1, rank: 2}, {id: 2, rank: 23}, {id: 3, rank: 3}, {id: 4, rank: 29},{id: 5, rank: 12}];
var arrayB = [{id: 1, rank: 52}, {id: 2, rank: 22}, {id: 3, rank: 9}, {id: 4, rank: 21},{id: 5, rank: 45}];

console.log(getUniqueObjectsSortedByRank(arrayA, arrayB));