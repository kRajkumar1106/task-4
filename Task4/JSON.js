function compareJSON(obj1, obj2) {
    // Convert JSON objects to strings
    const jsonString1 = JSON.stringify(obj1);
    const jsonString2 = JSON.stringify(obj2);

    // Sort the strings
    const sortedString1 = sortString(jsonString1);
    const sortedString2 = sortString(jsonString2);

    // Compare the sorted stringss
    return sortedString1 === sortedString2;
}

function sortString(string) {
    return string.split("").sort().join("");
}

const obj1 = { name: "person", age: 5 };
const obj2 = { age: 5, name: "person" };

console.log(compareJSON(obj1, obj2));