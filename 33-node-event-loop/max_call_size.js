var count = 0;
function foo(){
  console.log(count++);
  return foo();
}
foo(); 

// 20917