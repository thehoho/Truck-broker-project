const vehicles = [
  {
    id: 1,
    type: "Sedan",
    year: "2020",
    make: "Toyota",
    price: 25000,
    location: "California",
  },
  {
    id: 2,
    type: "SUV",
    year: "2019",
    make: "Honda",
    price: 22000,
    location: "Texas",
  },
  {
    id: 3,
    type: "Sedan",
    year: "2021",
    make: "Nissan",
    price: 28000,
    location: "California",
  },
  {
    id: 4,
    type: "Truck",
    year: "2020",
    make: "Ford",
    price: 27000,
    location: "Nevada",
  },
  {
    id: 5,
    type: "Sedan",
    year: "2020",
    make: "Toyota",
    price: 29000,
    location: "California",
  },
];

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
  <div class="flex align-center truck-info">
          <h3>${vehicle.type} - ${vehicle.year}</h3> <p>Make: ${
        vehicle.make
        } | Price: $${vehicle.price} | Location: ${vehicle.location}<p>
          <input type="checkbox" id="vehicle-${
            vehicle.id
          }" class="mark-checkbox" onclick="toggleMark(${vehicle.id})" ${
      isMarked ? "checked" : ""
    }>
        </div>
   
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
  let markedVehicles = vehicles.filter((vehicle) =>
    markedTrucks.includes(vehicle.id)
  );

  if (markedVehicles.length > 0) {
    displayResults(markedVehicles);
  } else {
  }
}

// Function to clear all marked trucks
function clearMarkedTrucks() {
  localStorage.removeItem("markedTrucks");
  applyFilters(); // Refresh the displayed list to update the button state
}

// Example filter application
function applyFilters() {
  const type = document.getElementById("type").value;
  const year = document.getElementById("year").value;
  const make = document.getElementById("make").value;
  const minPrice = document.getElementById("min-price").value;
  const maxPrice = document.getElementById("max-price").value;
  const location = document.getElementById("location").value;

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      (type === "" || vehicle.type.toLowerCase() === type.toLowerCase()) &&
      (year === "" || vehicle.year === year) &&
      (make === "" || vehicle.make.toLowerCase() === make.toLowerCase()) &&
      (minPrice === "" || vehicle.price >= parseInt(minPrice)) &&
      (maxPrice === "" || vehicle.price <= parseInt(maxPrice)) &&
      (location === "" ||
        vehicle.location.toLowerCase() === location.toLowerCase())
    );
  });

  displayResults(filteredVehicles);
}

// Initial call to display all vehicles
applyFilters();
