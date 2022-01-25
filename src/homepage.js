const homepage = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const location = document.createElement('h2');
    const location_desc = document.createElement('p');

    const homeDiv1 = document.createElement('div');
    const homeDiv2 = document.createElement('div');
    const homeDiv3 = document.createElement('div');
    h1.classList.add('title');
    h1.textContent = "Kenette's Steak House"
    h3.textContent = "The best steakhouse in town now serving! Experience different kinds of meat. We ensure quality and safety of what you eat."
    // img.src = "https://image.freepik.com/free-photo/roasted-pork-steak-dark-surface_1150-44350.jpg";

    homeDiv1.classList.add("home-div");
    homeDiv2.classList.add("home-div");
    homeDiv3.classList.add("home-div");

    h2.textContent = "Hours"
    p.innerHTML = "Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am -10pm<br>Saturday: 8am - 10pm";

    location.textContent = "Location"
    location_desc.textContent = "72 Miyazaki Wagyu Drive, Steak County"

    homeDiv1.append(h1, h3);
    homeDiv2.append(h2, p);
    homeDiv3.append(location, location_desc);

    content.append(homeDiv1, homeDiv2, homeDiv3);
}

export { homepage };