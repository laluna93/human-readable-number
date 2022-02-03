module.exports = toReadable;
function toReadable (number) {
    let result;
    let arr =['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 =['','','twenty', 'thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let str = number.toString();
if (str==0){
    result = 'zero'
    console.log(result)
    return result;
    } else if (number < 20) {
        result = arr[number]
        console.log(result)
    return result
} else if (str>19 && str < 100) {
result = arr2[str[0]]+ ' ' + arr[str[1]];
    return result.trimEnd().replace('  ', ' ')
} else if(str.length ===3 && str[1] < 1){
    result = arr[str[0]]+ ' ' + 'hundred'+  ' ' + arr2[str[1]]+ ' ' +arr[str[2]]
    console.log(result)
    return result.trimEnd().replace('  ', ' ')
} else if(str.length ===3 && str[1] < 2){
result = arr[str[0]]+ ' ' + 'hundred'+  ' ' + arr[str[1]+str[2]]
console.log(result)
    return result.trimEnd().replace('  ', ' ')
} else if(str.length ===3 && str[1] >= 2){
    result = arr[str[0]]+ ' ' + 'hundred'+  ' ' + arr2[str[1]]+ ' ' +arr[str[2]]
    console.log(result)
    return result.trimEnd().replace('  ', ' ')
} 
}
