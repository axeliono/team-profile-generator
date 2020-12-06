class Employee {
  constructor(name = "", email) {
    this.name = name;
    this.id = 0;
    this.email = email;
    this.role = this.constructor.name;
  }

  getName() {
    return this.name;
  }

  getId() {
    return "ID: " + this.id;
  }

  getEmail() {
    return "Email: " + this.email;
  }

  getRole() {
    return this.constructor.name;
  }

  getEmployeeItem() {
    if (this.getSchool()) {
      return this.getSchool();
    } else if (this.getGithub()) {
      return this.getGithub();
    } else if (this.getOfficeNumber()) {
      return this.getOfficeNumber();
    }
  }

  getEmployeeIcon() {
    if (this.getSchool()) {
      return `<svg width="1.5em" height="1.em" viewBox="0 0 16 16" class="bi bi-clipboard" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>`;
    } else if (this.getGithub()) {
      return `<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
    </svg> `;
    } else if (this.getOfficeNumber()) {
      return `<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-vector-pen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908l-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
      <path fill-rule="evenodd" d="M2.832 13.228L8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
    </svg>`;
    }
  }
}

module.exports = Employee;
