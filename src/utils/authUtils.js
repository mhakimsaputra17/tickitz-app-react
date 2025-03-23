export const saveUser = (user) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const findUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
