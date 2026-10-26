const menuButton = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const closebutton = document.getElementById("closeBtn")

const destinationsDisplay = document.getElementById("destinations")
const restaurantsDisplay = document.getElementById("restaurants")
const activitiesDisplay = document.getElementById("activities")




//==================== MOBILE MENU ====================

menuButton.addEventListener("click", () => {
    mobileMenu.style.transform = "translateY(0%)";
});


closebutton.addEventListener("click", () => {
    mobileMenu.style.transform = "translateY(-100%)";
});




// popular places array
// ==================== POPULAR DESTINATIONS ====================

const destinations = [

    {
        name: "Big Sur",
        location: "California, USA",
        image:"image/img (15).png"
    },

    {
        name: "Prescott",
        location: "Arizona, USA",
        image: "image/img (14).png"
    },

    {
        name: "Fort Myers",
        location: "Florida, USA",
        image: "image/img (13).png"
    },

    {
        name: "Tucson",
        location: "Arizona, USA",
        image: "image/img (12).png"
    },

    {
        name: "St. Joseph",
        location: "Michigan, USA",
        image: "image/img (11).png"
    },

    {
        name: "Madrid",
        location: "Spain",
        image: "image/img (10).png"
    }

];


destinationsDisplay.innerHTML = destinations
    .slice(0, 4)
    .map(d => `
<div class="destination_card" >
<img src="${d.image}" alt="${d.name} image" />
<h4> ${d.name} </h4>
<h5> ${d.location} </h5>
</div>
    `).join(" ")


// tour guides array

// ==================== Hostel and restaurants ====================


const restaurants = [

    {
        name: "Santo Rosa Hotel",
        location: "California, USA",
        image: "image/img (9).png",
        rating: 5
    },

    {
        name: "Grand Hotel",
        location: "Arizona, USA",
        image: "image/img (8).png",
        rating: 5,
    },

    {
        name: "Obeori Hotel",
        location: "Florida, USA",
        image: "image/img (7).png",
        rating: 5,
    },

    {
        name: "Beverly Hills Hotel",
        location: "Arizona, USA",
        image: "image/img (6).png",
        rating: 5,
    },

    {
        name: "",
        location: "Michigan, USA",
        image: "image/img (3).png"
    },

    {
        name: "",
        location: "Spain",
        image: ""
    }

];



restaurantsDisplay.innerHTML = restaurants
  .slice(0, 4)
  .map(d => `
    <div class="restaurants_card">
      <img src="${d.image}" alt="${d.name} image" />
      <h4>${d.name}</h4>
      <h5>${d.location}</h5>

      <div>
        ${Array.from({ length: d.rating }, () => `
          <span>
            <i class="bi bi-star-fill"></i>
          </span>
        `).join("")}
      </div>

    </div>
  `)
  .join("");



// ====================Activities  ====================
 
const activities = [
{
    title: "Sailing",
    image: "image/img (13).png",
},
{
    title: "Climbing",
    image: "image/img (10).png",
},
{
    title: "Skiing",
    image: "image/img (15).png",
},
{
    title: "Hiking",
    image: "image/img (2).png",
}

];

activitiesDisplay.innerHTML = activities
   .map(activity =>`
    <div class="activity_card">
    <img
    src="${activity.image}"
    alt="${activity.title} image"
    >
    <h4> ${activity.title} </h4>
    </div>
   `)
   .join(" ")













