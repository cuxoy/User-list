import User from "./User";

class UserList {
  constructor(users) {
    this.users = users.map((user) => new User(user));
  }

  render(filter = {}) {
    const listElement = document.getElementById("app");
    listElement.innerHTML = "";

    const filteredUsers = this.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(filter.name || "") &&
        user.username.toLowerCase().includes(filter.username || "") &&
        user.email.toLowerCase().includes(filter.email || "") &&
        user.phone.toLowerCase().includes(filter.phone || "") &&
        user.website.toLowerCase().includes(filter.website || "") &&
        user.company.name.toLowerCase().includes(filter.company || "") &&
        (user.address.street.toLowerCase().includes(filter.address || "") ||
          user.address.city.toLowerCase().includes(filter.address || ""))
      );
    });

    filteredUsers.forEach((user) => {
      listElement.appendChild(user.render());
    });
  }
}

export default UserList;
