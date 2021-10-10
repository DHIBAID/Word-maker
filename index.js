const string = "test"

function tree(leafs) {
  var branches = [];
  if (leafs.length == 1) return leafs;
  for (var k in leafs) {
    var leaf = leafs[k];
    tree(leafs.join("").replace(leaf, "").split("")).concat("").map(function(subtree) {
      branches.push([leaf].concat(subtree));
    });
  }
  return branches;
};

let combos = tree(string.split("")).map(function(str) {
  return str.join("")
})

const fs = require("fs")
let file = fs.writeFileSync("./correct words.txt", combos)


console.log(combos.length + " Words Possible")

