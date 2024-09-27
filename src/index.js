import UserList from "./UserList";
import Filter from "./Filter";

let users = [];
let userList;

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await response.json();
    userList = new UserList(users);
    userList.render();
  } catch (error) {
    console.error("data loading error", error);
  }
}

function filterUsers(filters) {
  userList.render(filters);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();

  const filter = new Filter(filterUsers);
  filter.init();
});
