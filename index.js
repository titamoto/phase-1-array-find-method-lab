// code your solution here
function superbowlWin(array) {
    const result = array.find(({result}) => result === "W");
    if (array.find(({result}) => result === "W")) {
        return result.year;
    } else { return undefined }
    
}