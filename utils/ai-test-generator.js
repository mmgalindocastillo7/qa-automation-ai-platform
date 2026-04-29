function generateTestCases(userStory) {
  return [
    {
      title: "Valid login",
      steps: [
        "Go to login page",
        "Enter valid username",
        "Enter valid password",
        "Click login"
      ],
      expected: "User is redirected to dashboard"
    },
    {
      title: "Invalid login",
      steps: [
        "Go to login page",
        "Enter invalid credentials",
        "Click login"
      ],
      expected: "Error message is displayed"
    },
    {
      title: "Empty fields",
      steps: [
        "Go to login page",
        "Click login without entering data"
      ],
      expected: "Validation messages appear"
    }
  ];
}

module.exports = { generateTestCases };