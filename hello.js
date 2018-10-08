const acorn = require("acorn");

acorn.parse(`\
function hello() {
  // some comment
  console.log("hello, world!");
}
hello();
`, {
  onToken(input) {
    console.log(input.value || input.type.label);
  },
  onComment(input) {
    console.log(input)
  }
});
