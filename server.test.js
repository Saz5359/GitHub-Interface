test("test the github fetch Api", async () => {
  const response = await fetch("https://api.github.com/users/saz5359");
  const data = await response.json();
  expect(data.login).toBe("Saz5359");
});
