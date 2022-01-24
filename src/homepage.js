const homepage = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const location = document.createElement('h2');
    const location_desc = document.createElement('p');



    h1.textContent = "Kenette's Steak House"
    h3.textContent = "The best steakhouse in town now serving! Experience different kinds of meat. We ensure quality and safety of what you eat."
    // img.src = "https://image.freepik.com/free-photo/roasted-pork-steak-dark-surface_1150-44350.jpg";


    content.append(h1, h3, img);

    h2.textContent = "Hours"
    p.innerHTML = "Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am -10pm<br>Saturday: 8am - 10pm";

    content.append(h2, p);

    location.textContent = "Location"
    location_desc.textContent = "72 Miyazaki Wagyu Drive, Steak County"

    content.append(location, location_desc);
}

export { homepage };