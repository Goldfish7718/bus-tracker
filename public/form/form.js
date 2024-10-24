const stops = [
  "ABB Circle",
  "Ambad Police Station",
  "Anandvalli signal",
  "Anuradha talkies",
  "Ashoka school",
  "Ashok Stambh",
  "Atul dairy",
  "Ayodhya Nagri",
  "Balbharti",
  "Bhim Nagar",
  "Bhosala school gate",
  "Bodhale Nagar",
  "B.Y.K College",
  "Bytco",
  "Canada Corner",
  "CCM",
  "Chandak Circle",
  "Chattrapati shivaji nagar",
  "Chopda Lawns",
  "Civil hospital",
  "College road",
  "Dasak",
  "Datta mandir chowk",
  "Datta nagar",
  "Dwarka",
  "Dayanand classes",
  "Gadkari chowk",
  "Gadkari naka",
  "Gajanan maharaj mandir",
  "Gangapur naka (old)",
  "Govind nagar(Bogda)",
  "Guru gobind singh school",
  "Horizon school",
  "Hotel seven heaven",
  "Indira Nagar",
  "Inox theatre",
  "ITI Circle",
  "Jay shankar garden",
  "Jain hospital",
  "Janardan swami math",
  "Jehan Circle",
  "Jogging track",
  "Kamod nagar",
  "Kulkarni chowk",
  "KTHM",
  "Lekha nagar",
  "Mahatma nagar",
  "Mahajan hospital",
  "Makhmalabad naka",
  "Metrozone",
  "Mico Circle",
  "Mhasoba mandir",
  "More hospital",
  "Morewadi",
  "Mumbai naka",
  "Nandini pool",
  "Nandur naka",
  "Nimani",
  "Panchak",
  "Panyachi taki",
  "Parijat nagar",
  "Papaya nursery",
  "Peth nagar",
  "Pathardi Phata",
  "Pathardi goan Circle",
  "Poornima stop",
  "Prasad Circle",
  "Rajiv gandhi bhavan",
  "Ramawadi",
  "Rane nagar",
  "Sai hospital",
  "Sailani baba chowk",
  "Sambhaji chowk",
  "Sansri naka",
  "Satpur bus stop",
  "Satyam sweets",
  "Sawarkar nagar",
  "Siddharth hotel",
  "Sarda Circle",
  "Shivaji maharaj chowk",
  "Shubham park",
  "State bank",
  "Tidke Colony",
  "Tejal hospital",
  "Trimbak naka",
  "Trimurti chowk",
  "Toyato showroom",
  "Upendra nagar",
  "Uttam nagar",
  "Vijay nagar",
  "Vihitgoan",
  "Vise chowk",
  "Wadala naka",
];

const selectElement = document.getElementById("stop");
let fare = 0;

stops.map((stop) => {
  const option = document.createElement("option");
  option.value = stop;
  option.textContent = stop;
  selectElement.appendChild(option);
});

function calculateFare() {
  const distance = document.getElementById("stopDistance").value;

  if (distance === "under10") {
    fare = 20800;
  } else if (distance === "10to15") {
    fare = 25800;
  } else if (distance === "15to20") {
    fare = 27800;
  }

  document.getElementById("fareDisplay").innerText =
    "Bus Fare: " + fare + " RS";
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en", // Default page language
      includedLanguages: "marathi, hindi", // Choose languages to display
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

async function requestRegistration() {
  const formData = {
    name: document.getElementById("name").value,
    DOB: document.getElementById("DOB").value,
    college_name: document.getElementById("college_name").value,
    clgtime: document.getElementById("clgtime").value,
    course: document.getElementById("course").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value,
    address: document.getElementById("address").value,
    stop: document.getElementById("stop").value,
    stopDistance: document.getElementById("stopDistance").value,
    Student_MOB: document.getElementById("Student_MOB").value,
    Parent_MOB: document.getElementById("Parent_MOB").value,
    Parent_name: document.getElementById("Parent_name").value,
    amount: fare,
  };

  console.log(formData);

  const response = await fetch("/api/students/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Registration successful");

    document.getElementById("registrationForm").reset();
    document.getElementById("registrationForm2").reset();
    document.getElementById("fareDisplay").innerText = "";
  } else {
    alert("Failed to register. Please try again.");
  }
}

checkAuthState();
