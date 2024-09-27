class User {
  constructor({ id, name, email, phone, username, website, company, address }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.website = website;
    this.company = company;
    this.address = address;
  }

  render() {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
          <h2>${this.name}</h2>
          <p><strong>Username:</strong> ${this.username}</p>
          <p><strong>Email:</strong> ${this.email}</p>
          <p><strong>Phone:</strong> ${this.phone}</p>
          <p><strong>Website:</strong> <a href="http://${this.website}" target="_blank">${this.website}</a></p>
          <p><strong>Company:</strong> ${this.company.name}</p>
          <p><strong>Address:</strong> ${this.address.street}, ${this.address.city}</p>
        `;
    return card;
  }
}

export default User;
