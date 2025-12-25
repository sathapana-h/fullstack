let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple '];   

// แบบที่1 
const fill = values1_filter = values2.filter(function(item) {
    return values1.includes(item);});                 
console.log(fill); 


// แบบที่2
for (let vsl1 of values1) {
    for (let vsl2 of values2) {
        if (vsl1 === vsl2) {
            console.log(vsl1);
        }
    }   
}
    