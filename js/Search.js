const trucks = [
  {
    id: 1,
    type: "Sedan",
    year: 2020,
    make: "Toyota",
    price: 20000,
    location: "California",
  },
  {
    id: 2,
    type: "SUV",
    year: 2019,
    make: "Honda",
    price: 25000,
    location: "Texas",
  },
  {
    id: 3,
    type: "Truck",
    year: 2021,
    make: "Ford",
    price: 30000,
    location: "Nevada",
  },
  {
    id: 4,
    type: "Sedan",
    year: 2022,
    make: "Nissan",
    price: 18000,
    location: "California",
  },
  {
    id: 5,
    type: "SUV",
    year: 2020,
    make: "Chevrolet",
    price: 27000,
    location: "Arizona",
  },
  {
    id: 6,
    type: "Truck",
    year: 2018,
    make: "Ram",
    price: 32000,
    location: "Florida",
  },
  {
    id: 7,
    type: "Sedan",
    year: 2017,
    make: "Hyundai",
    price: 16000,
    location: "Nevada",
  },
  {
    id: 8,
    type: "SUV",
    year: 2018,
    make: "Kia",
    price: 22000,
    location: "New York",
  },
  {
    id: 9,
    type: "Truck",
    year: 2022,
    make: "GMC",
    price: 35000,
    location: "Ohio",
  },
  {
    id: 10,
    type: "Sedan",
    year: 2021,
    make: "Mazda",
    price: 21000,
    location: "Texas",
  },
  {
    id: 11,
    type: "Truck",
    year: 2020,
    make: "Toyota",
    price: 33000,
    location: "Colorado",
  },
  {
    id: 12,
    type: "SUV",
    year: 2019,
    make: "Subaru",
    price: 26000,
    location: "Washington",
  },
  {
    id: 13,
    type: "Sedan",
    year: 2021,
    make: "Tesla",
    price: 40000,
    location: "California",
  },
  {
    id: 14,
    type: "Truck",
    year: 2020,
    make: "Chevrolet",
    price: 31000,
    location: "Nevada",
  },
  {
    id: 15,
    type: "SUV",
    year: 2022,
    make: "Jeep",
    price: 28000,
    location: "Texas",
  },
  {
    id: 16,
    type: "Truck",
    year: 2021,
    make: "Ford",
    price: 36000,
    location: "Illinois",
  },
  {
    id: 17,
    type: "Sedan",
    year: 2018,
    make: "Volkswagen",
    price: 19000,
    location: "Florida",
  },
  {
    id: 18,
    type: "SUV",
    year: 2020,
    make: "Audi",
    price: 42000,
    location: "New Jersey",
  },
  {
    id: 19,
    type: "Truck",
    year: 2019,
    make: "Nissan",
    price: 34000,
    location: "Alabama",
  },
  {
    id: 20,
    type: "SUV",
    year: 2017,
    make: "BMW",
    price: 38000,
    location: "New York",
  },
];

function populateFilters() {
  // Get unique years, makes, and locations from the truck data
  const years = [...new Set(trucks.map((truck) => truck.year))];
  const makes = [...new Set(trucks.map((truck) => truck.make))];
  const locations = [...new Set(trucks.map((truck) => truck.location))];

  // Populate year filter
  const yearFilter = document.getElementById("year-filter");
  yearFilter.innerHTML = '<option value="">All Years</option>'; // Reset options
  years.sort((a, b) => b - a); // Sort in descending order
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });

  // Populate make filter
  const makeFilter = document.getElementById("make-filter");
  makeFilter.innerHTML = '<option value="">All Makes</option>';
  makes.sort(); // Sort alphabetically
  makes.forEach((make) => {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    makeFilter.appendChild(option);
  });

  // Populate location filter
  const locationFilter = document.getElementById("location-filter");
  locationFilter.innerHTML = '<option value="">All Locations</option>';
  locations.sort(); // Sort alphabetically
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });
}

// Call populateFilters when the page loads or when the truck data changes
populateFilters();

// Function to display results
function displayResults(filteredVehicles) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  let markedTrucks = JSON.parse(localStorage.getItem("markedTrucks")) || [];

  filteredVehicles.forEach((vehicle) => {
    const vehicleElement = document.createElement("div");
    vehicleElement.classList.add("result-item");
    const isMarked = markedTrucks.includes(vehicle.id);
    vehicleElement.innerHTML = `
    <div class='truck-con flex align-center justify-space-between'>
      <div class=" flex align-center truck-info">
          <h3>${vehicle.type} - ${vehicle.year}</h3> <p>Make: ${
      vehicle.make
    } | Price: $${vehicle.price} | Location: ${vehicle.location}</p>
        </div>
        <div class='check-mark'>
        <input type="checkbox" id="vehicle-${
          vehicle.id
        }" class="mark-checkbox" onclick="toggleMark(${vehicle.id})" ${
      isMarked ? "checked" : ""
    }></div></div>
   
      `;
    resultsContainer.appendChild(vehicleElement);
  });

  resultsContainer.classList.add("show");
}

// Function to mark/unmark a truck as interested
function toggleMark(vehicleId) {
  let markedTrucks = JSON.parse(localStorage.getItem("markedTrucks")) || [];

  if (markedTrucks.includes(vehicleId)) {
    markedTrucks = markedTrucks.filter((id) => id !== vehicleId); // Unmark the vehicle
  } else {
    markedTrucks.push(vehicleId); // Mark the vehicle
  }

  localStorage.setItem("markedTrucks", JSON.stringify(markedTrucks));
}

// Function to view marked trucks
function viewMarkedTrucks() {
  let markedTrucks = JSON.parse(localStorage.getItem("markedTrucks")) || [];
  let markedVehicles = trucks.filter((vehicle) =>
    markedTrucks.includes(vehicle.id)
  );

  if (markedVehicles.length > 0) {
    displayResults(markedVehicles);
  } else {
    alert("No trucks selected. Please select trucks first.");
  }
}

// Function to clear all marked trucks
function clearMarkedTrucks() {
  localStorage.removeItem("markedTrucks");
  applyFilters(); // Refresh the displayed list to update the button state
}

// Example filter application
function applyFilters() {
  const selectedYear = document.getElementById("year-filter").value;
  const selectedMake = document.getElementById("make-filter").value;
  const selectedLocation = document.getElementById("location-filter").value;
  const minPrice = document.getElementById("min-price").value;
  const maxPrice = document.getElementById("max-price").value;

  let filteredTrucks = trucks;

  if (selectedYear) {
    filteredTrucks = filteredTrucks.filter(
      (truck) => truck.year == selectedYear
    );
  }
  if (selectedMake) {
    filteredTrucks = filteredTrucks.filter(
      (truck) => truck.make == selectedMake
    );
  }
  if (selectedLocation) {
    filteredTrucks = filteredTrucks.filter(
      (truck) => truck.location == selectedLocation
    );
  }
  if (minPrice) {
    filteredTrucks = filteredTrucks.filter((truck) => truck.price >= minPrice);
  }
  if (maxPrice) {
    filteredTrucks = filteredTrucks.filter((truck) => truck.price <= maxPrice);
  }

  // Update the display with the filtered results
  displayResults(filteredTrucks);
}

// Add event listeners for filter changes
document.getElementById("year-filter").addEventListener("change", applyFilters);
document.getElementById("make-filter").addEventListener("change", applyFilters);
document
  .getElementById("location-filter")
  .addEventListener("change", applyFilters);
document.getElementById("min-price").addEventListener("input", applyFilters);
document.getElementById("max-price").addEventListener("input", applyFilters);

// Get modal elements
const deleteModal = document.getElementById("deleteModal");
const confirmDeleteBtn = document.getElementById("confirmDelete");
const cancelDeleteBtn = document.getElementById("cancelDelete");

// Show the modal when the user clicks to clear all marked trucks
function showDeleteModal() {
  deleteModal.style.display = "flex"; // Show modal as a flexbox to center the content
}

// Hide the modal
function hideDeleteModal() {
  deleteModal.style.display = "none";
}

// When user clicks confirm, clear all marked trucks
confirmDeleteBtn.addEventListener("click", () => {
  clearMarkedTrucks(); // Clear trucks
  hideDeleteModal(); // Hide the modal
});

// When user clicks cancel, just hide the modal
cancelDeleteBtn.addEventListener("click", hideDeleteModal);

window.onclick = function (event) {
  if (event.target == deleteModal) {
    hideDeleteModal();
  }
};

window.onload = function () {
  populateFilters();
};

// Initial call to display all vehicles
applyFilters();
