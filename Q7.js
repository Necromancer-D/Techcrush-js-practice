function formatName(firstName, lastName) {
  // Remove extra spaces
  firstName = firstName.trim();
  lastName = lastName.trim();

  // Format names
  const formattedFirst =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  const formattedLast = lastName.toUpperCase();

  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatName("  David  ", "  Mobolaji  "));
