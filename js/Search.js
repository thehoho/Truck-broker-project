let trucks = [
  { id: 1, type: "Truck", year: 2021, make: "Ford", price: 35000, location: "California" },
  { id: 2, type: "SUV", year: 2020, make: "Toyota", price: 27000, location: "Nevada" },
  { id: 3, type: "Truck", year: 2019, make: "Chevrolet", price: 32000, location: "Texas" },
  { id: 4, type: "Truck", year: 2021, make: "Ram", price: 45000, location: "New York" },
  { id: 5, type: "SUV", year: 2022, make: "Honda", price: 24000, location: "Florida" },
  { id: 6, type: "Truck", year: 2018, make: "GMC", price: 29000, location: "Colorado" },
  { id: 7, type: "Truck", year: 2022, make: "Tesla", price: 62000, location: "Arizona" },
  { id: 8, type: "SUV", year: 2020, make: "Mazda", price: 25000, location: "Washington" },
  { id: 9, type: "Truck", year: 2017, make: "Nissan", price: 23000, location: "Oregon" },
  { id: 10, type: "SUV", year: 2019, make: "Hyundai", price: 27000, location: "New Jersey" },
  { id: 11, type: "Truck", year: 2021, make: "Ford", price: 34000, location: "Michigan" },
  { id: 12, type: "Truck", year: 2022, make: "Chevrolet", price: 37000, location: "Ohio" },
  { id: 13, type: "SUV", year: 2020, make: "Toyota", price: 26000, location: "Virginia" },
  { id: 14, type: "Truck", year: 2018, make: "Ram", price: 41000, location: "Georgia" },
  { id: 15, type: "Truck", year: 2021, make: "Honda", price: 29000, location: "Indiana" },
  { id: 16, type: "Truck", year: 2022, make: "GMC", price: 33000, location: "Pennsylvania" },
  { id: 17, type: "Truck", year: 2020, make: "Tesla", price: 64000, location: "Nevada" },
  { id: 18, type: "SUV", year: 2019, make: "Mazda", price: 25500, location: "Illinois" },
  { id: 19, type: "Truck", year: 2020, make: "Nissan", price: 29500, location: "Wisconsin" },
  { id: 20, type: "SUV", year: 2017, make: "Hyundai", price: 24000, location: "Tennessee" },
  { id: 21, type: "Truck", year: 2019, make: "Ford", price: 36000, location: "Alabama" },
  { id: 22, type: "Truck", year: 2021, make: "Chevrolet", price: 38000, location: "South Carolina" },
  { id: 23, type: "SUV", year: 2022, make: "Toyota", price: 28000, location: "Kentucky" },
  { id: 24, type: "Truck", year: 2021, make: "Ram", price: 46000, location: "Missouri" },
  { id: 25, type: "Truck", year: 2019, make: "Honda", price: 31000, location: "Louisiana" },
  { id: 26, type: "Truck", year: 2020, make: "GMC", price: 34500, location: "North Carolina" },
  { id: 27, type: "Truck", year: 2022, make: "Tesla", price: 67000, location: "Oklahoma" },
  { id: 28, type: "SUV", year: 2021, make: "Mazda", price: 26500, location: "Iowa" },
  { id: 29, type: "Truck", year: 2020, make: "Nissan", price: 31500, location: "Kansas" },
  { id: 30, type: "SUV", year: 2018, make: "Hyundai", price: 25000, location: "Minnesota" },
  { id: 31, type: "Truck", year: 2019, make: "Ford", price: 37000, location: "Arkansas" },
  { id: 32, type: "Truck", year: 2021, make: "Chevrolet", price: 39000, location: "New Mexico" },
  { id: 33, type: "SUV", year: 2022, make: "Toyota", price: 29000, location: "Mississippi" },
  { id: 34, type: "Truck", year: 2019, make: "Ram", price: 47500, location: "Nebraska" },
  { id: 35, type: "Truck", year: 2021, make: "Honda", price: 33000, location: "West Virginia" },
  { id: 36, type: "Truck", year: 2020, make: "GMC", price: 35500, location: "Montana" },
  { id: 37, type: "Truck", year: 2022, make: "Tesla", price: 69000, location: "North Dakota" },
  { id: 38, type: "SUV", year: 2021, make: "Mazda", price: 27500, location: "South Dakota" },
  { id: 39, type: "Truck", year: 2018, make: "Nissan", price: 32000, location: "Maine" },
  { id: 40, type: "SUV", year: 2020, make: "Hyundai", price: 26500, location: "Alaska" },
  { id: 41, type: "Truck", year: 2021, make: "Ford", price: 38000, location: "Hawaii" },
  { id: 42, type: "Truck", year: 2020, make: "Chevrolet", price: 40000, location: "Delaware" },
  { id: 43, type: "SUV", year: 2021, make: "Toyota", price: 31000, location: "Rhode Island" },
  { id: 44, type: "Truck", year: 2019, make: "Ram", price: 49000, location: "Vermont" },
  { id: 45, type: "Truck", year: 2022, make: "Honda", price: 35000, location: "Wyoming" },
  { id: 46, type: "Truck", year: 2020, make: "GMC", price: 37500, location: "Idaho" },
  { id: 47, type: "Truck", year: 2021, make: "Tesla", price: 71000, location: "Utah" },
  { id: 48, type: "SUV", year: 2019, make: "Mazda", price: 28000, location: "Connecticut" },
  { id: 49, type: "Truck", year: 2018, make: "Nissan", price: 34000, location: "Massachusetts" },
  { id: 50, type: "SUV", year: 2021, make: "Hyundai", price: 29500, location: "New Hampshire" }
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
