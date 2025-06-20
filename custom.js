function updateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var period = hours >= 12 ? "PM" : "AM";

  // Determine greeting before updating hours to 12-hour format
  var greeting = "";
  if (hours >= 5 && hours < 12) {
    greeting = "Good morning!";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon!";
  } else if (hours >= 17 && hours < 21) {
    greeting = "Good evening!";
  } else {
    greeting = "Good night!";
  }
  document.getElementById("greeting").textContent = greeting;

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  var timeString = hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period;
  document.getElementById("time").textContent = timeString;
}

updateTime(); // Update the time and greeting immediately

// Update the time and greeting every half minute
setInterval(updateTime, 30000);

function searchGoogle() {
  var query = document.getElementById("searchBox").value;
  var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);

  // Get the current tab's ID
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Update the URL of the current tab
      chrome.tabs.update(tabs[0].id, { url: googleSearchUrl });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('searchForm');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      searchGoogle();
  });
});