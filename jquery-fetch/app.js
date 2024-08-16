$(document).ready(function () {
  function fetchPeople() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let people = data.results;
        $("#people-list").empty();
        people.forEach(function (person, index) {
          $("#people-list").append(createPersonElement(person, index));
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  function createPersonElement(person, index) {
    return `
            <li class="person-item" data-index="${index}">
                <img src="${person.picture.thumbnail}" alt="${person.name.first} ${person.name.last}">
                <div>
                    <input type="text" class="edit-name" value="${person.name.first} ${person.name.last}" readonly>
                    <input type="text" class="edit-email" value="${person.email}" readonly>
                </div>
                <button class="edit-person">Edit</button>
                <button class="delete-person">Delete</button>
            </li>
        `;
  }

  $("#fetch-people").on("click", function () {
    fetchPeople();
  });

  $("#people-list").on("click", ".delete-person", function () {
    $(this).closest(".person-item").remove();
  });

  $("#people-list").on("click", ".edit-person", function () {
    let $personItem = $(this).closest(".person-item");
    let $nameInput = $personItem.find(".edit-name");
    let $emailInput = $personItem.find(".edit-email");

    if ($(this).text() === "Edit") {
      $nameInput.removeAttr("readonly").focus();
      $emailInput.removeAttr("readonly");
      $(this).text("Save");
    } else {
      $nameInput.attr("readonly", true);
      $emailInput.attr("readonly", true);
      $(this).text("Edit");
    }
  });
});
