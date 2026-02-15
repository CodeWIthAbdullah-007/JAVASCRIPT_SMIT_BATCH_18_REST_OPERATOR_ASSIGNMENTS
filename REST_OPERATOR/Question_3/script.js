function greetUsers(message, ...names) {
  console.log(`${message}: ${names.join(", ")}`);
}
greetUsers("Hello", "Abdullah", "Anwar", "Sara");
