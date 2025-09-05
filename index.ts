function greet(name: string): string {
  return `Hello, ${name}!`;
}

// SECURITY ISSUE: Using eval with user input
const userInput = "console.log('This is unsafe!')";
eval(userInput); // SonarQube will flag this as a security risk

console.log(greet("World ABC"));