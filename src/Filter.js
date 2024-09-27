class Filter {
  constructor(onFilterChange) {
    this.onFilterChange = onFilterChange;
  }

  init() {
    const filterInputs = [
      "name-filter",
      "username-filter",
      "email-filter",
      "phone-filter",
      "website-filter",
      "company-filter",
      "address-filter",
    ];

    filterInputs.forEach((id) => {
      const input = document.getElementById(id);
      input.addEventListener("input", () => {
        const filters = {};
        filterInputs.forEach((filterId) => {
          filters[filterId.replace("-filter", "")] = document
            .getElementById(filterId)
            .value.toLowerCase();
        });
        this.onFilterChange(filters);
      });
    });
  }
}

export default Filter;
