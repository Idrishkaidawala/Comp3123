

//Write a JavaScript program to capitalize the first letter of each word of a given string.
//Solution1
function formatTitle(sentence) {
  const words = sentence.split(' ');
  const updated = words.map(w => w[0].toUpperCase() + w.slice(1));
  return updated.join(' ');
}

console.log(formatTitle("the quick brown fox"));

//2. Write a JavaScript program to find the largest of three given integers.
//Solution2

function biggest(x, y, z) {
  let largest = x;
  if (y > largest) largest = y;
  if (z > largest) largest = z;
  return largest;
}

console.log(biggest(1, 0, 1));        // 1  
console.log(biggest(0, -10, -20));    // 0  
console.log(biggest(1000, 510, 440)); // 1000  

//3. Write a JavaScript program to move last three character 
// to the start of a given string. 
// The string length must be greater or equal to three.
// Solution 3

function rotateTail(text) {
  if (text.length <= 3) return text;
  const tail = text.slice(-3);
  const head = text.slice(0, -3);
  return tail + head;
}

console.log(rotateTail("Python"));      // honPyt  
console.log(rotateTail("JavaScript"));  // iptJavaScr  
console.log(rotateTail("Hi"));          // Hi  


//4.Write a JavaScript program to find the types of a given angle.
//Types of angles:
//• Acute angle: An angle between 0 and 90 degrees.
//• Right angle: An 90 degree angle.
//• Obtuse angle: An angle between 90 and 180 degrees.
//• Straight angle: A 180 degree angle.

//Solution 4 


function classifyAngle(degree) {
  if (degree === 90) return "Right angle";
  if (degree === 180) return "Straight angle";
  if (degree > 0 && degree < 90) return "Acute angle";
  if (degree > 90 && degree < 180) return "Obtuse angle";
  return "Not a valid angle";
}

console.log(classifyAngle(47));   // Acute angle  
console.log(classifyAngle(90));   // Right angle  
console.log(classifyAngle(145));  // Obtuse angle  
console.log(classifyAngle(180));  // Straight angle  
