/**
 * TypeScript’s type system is structural, not nominal: We can use obj as a Pointlike because it has x and y properties that are both numbers. The relationships between types are determined by the properties they contain, not whether they were declared with some particular relationship.

TypeScript’s type system is also not reified: There’s nothing at runtime that will tell us that obj is Pointlike. In fact, the Pointlike type is not present in any form at runtime.

Going back to the idea of types as sets, we can think of obj as being a member of both the Pointlike set of values and the Named set of values.
 */
interface Pointlike {
    x: number;
    y: number;
  }
  interface Named {
    name: string;
  }
   
  function logPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
  }
   
  function logName(x: Named) {
    console.log("Hello, " + x.name);
  }
   
  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };
   
  logPoint(obj);
  logName(obj);

  class Empty {}
 
function fn(arg: Empty) {
  // do something?
  console.log({arg});
  
}
 
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });