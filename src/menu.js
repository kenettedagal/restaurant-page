const menu = () => {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const beverages = document.createElement('h2');
    const sides = document.createElement('h2');
    const mainDishes = document.createElement('h2');

    title.textContent = "Menu";
    beverages.textContent = "Beverages";
    sides.textContent = "Sides";
    mainDishes.textContent = "Main Dishes";

    // Beverages

    const beverageDiv1 = document.createElement('div');
    const beverageDiv2 = document.createElement('div');

    const beverageItem1 = document.createElement('h3');
    const beverageDesc1 = document.createElement('p');
    const beveragePrice1 = document.createElement('p');
    const beveragePhoto1 = document.createElement('img');

    beverageItem1.textContent = "Champagne";
    beverageDesc1.textContent = "Champagne is a prestigious and protected wine that is both globally recognized and rooted in centuries-old traditions. A symbol of elegance and sophistication, it pairs well with special occasions and celebrations. Each brand of champagne is produced from a unique blend and features a distinctive style of all its own.";
    beveragePrice1.textContent = "$50";
    beveragePhoto1.src = "https://image.freepik.com/free-vector/champagne-bottle-champagne-glass-design_1262-2181.jpg";

    const beverageItem2 = document.createElement('h3');
    const beverageDesc2 = document.createElement('p');
    const beveragePrice2 = document.createElement('p');
    const beveragePhoto2 = document.createElement('img');

    beverageItem2.textContent = "Red Wine";
    beverageDesc2.textContent = "Bold, high in acidity, savory, elegant, and dry: This is a “serious” wine, for \“serious\” wine drinkers. It\’s also a safe bet if you are ordering off a menu or buying a bottle. It may be complex—but it\’s also something most casual wine drinkers are used to drinking.";
    beveragePrice2.textContent = "$80";
    beveragePhoto2.src = "https://image.freepik.com/free-photo/side-view-jug-with-red-wine-grape-dark-horizontal_176474-4227.jpg";

    beverageDiv1.append(beverageItem1, beverageDesc1, beveragePrice1, beveragePhoto1);
    beverageDiv2.append(beverageItem2, beverageDesc2, beveragePrice2, beveragePhoto2);
    content.append(title, beverages, beverageDiv1, beverageDiv2);

    // Side Dishes

    const sideDishDiv1 = document.createElement('div');
    const sideDishDiv2 = document.createElement('div');

    const sideDishItem1 = document.createElement('h3');
    const sideDishDesc1 = document.createElement('p');
    const sideDishPrice1 = document.createElement('p');
    const sideDishPhoto1 = document.createElement('img');

    sideDishItem1.textContent = "Mashed Potato";
    sideDishDesc1.textContent = "Cooked potatoes, with a small amount of milk added, that have been mashed to a smooth fluffy consistency.";
    sideDishPrice1.textContent = "$5";
    sideDishPhoto1.src = "https://www.awesomecuisine.com/wp-content/uploads/2011/09/mashed-potatoes.jpg.webp";


    const sideDishItem2 = document.createElement('h3');
    const sideDishDesc2 = document.createElement('p');
    const sideDishPrice2 = document.createElement('p');
    const sideDishPhoto2 = document.createElement('img');

    sideDishItem2.textContent = "Garlic Butter Mushrooms";
    sideDishDesc2.textContent = "That toasty garlic and browned butter sauce is very rich and incredibly flavorful, then when you add the fresh herbs…they are a match made in heaven! The mushrooms will come out perfectly browned every time and they become so tender as they soak up that buttery garlic flavor.";
    sideDishPrice2.textContent = "$10";
    sideDishPhoto2.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-garlic-butter-mushrooms-007-1541801828.jpg?resize=980:*";

    sideDishDiv1.append(sideDishItem1, sideDishDesc1, sideDishPrice1, sideDishPhoto1);
    sideDishDiv2.append(sideDishItem2, sideDishDesc2, sideDishPrice2, sideDishPhoto2);
    content.append(sideDishDiv1, sideDishDiv2);

    // Main Dishes

    const mainDishDiv1 = document.createElement('div');
    const mainDishDiv2 = document.createElement('div');
    const mainDishDiv3 = document.createElement('div');
    const mainDishDiv4 = document.createElement('div');

    const mainDishItem1 = document.createElement('h3');
    const mainDishDesc1 = document.createElement('p');
    const mainDishPrice1 = document.createElement('p');
    const mainDishPhoto1 = document.createElement('img');

    const mainDishItem2 = document.createElement('h3');
    const mainDishDesc2 = document.createElement('p');
    const mainDishPrice2 = document.createElement('p');
    const mainDishPhoto2 = document.createElement('img');

    const mainDishItem3 = document.createElement('h3');
    const mainDishDesc3 = document.createElement('p');
    const mainDishPrice3 = document.createElement('p');
    const mainDishPhoto3 = document.createElement('img');

    const mainDishItem4 = document.createElement('h3');
    const mainDishDesc4 = document.createElement('p');
    const mainDishPrice4 = document.createElement('p');
    const mainDishPhoto4 = document.createElement('img');

    // Dish 1 - Wagyu

    mainDishItem1.textContent = "A5 Japanese Wagyu Beef Ribeye";
    mainDishDesc1.textContent = "Indulge in one of the most exquisite meats in the world with a cut of premium A5 Japanese Wagyu beef. Authentic Japanese Wagyu is world-renowned for its buttery texture, subtle umami flavor and unequaled tenderness, achieved through ample streaks of intramuscular fat deposits."
    mainDishPrice1.textContent = "$150";
    mainDishPhoto1.src = "https://www.fsrmagazine.com/sites/default/files/styles/homepage_carousel_2x_640x476/public/feature-images/guide-wagyu-beef.jpg?itok=4opHFmJz";

    // Dish 2 - Cowboy rib steak

    mainDishItem2.textContent = "Cowboy Rib Steak (Tomahawk)";
    mainDishDesc2.textContent = "Cowboy Steak is an extra-thick ribeye with a French-trimmed bone for a stunning presentation. This mouthwatering cut is exceptionally tender and juicy. Extra thick cut bone-in ribeye cowboy steak is always a delicious steak choice, prized for its tenderness and flavor."
    mainDishPrice2.textContent = "$130";
    mainDishPhoto2.src = "https://media-cdn.tripadvisor.com/media/photo-s/0d/0f/4a/3f/cowboy-ribeye.jpg";

    // Dish 3 - Fillet Mignon

    mainDishItem3.textContent = "Fillet Mignon";
    mainDishDesc3.textContent = "Filet mignon is the smaller tip of tenderloin and one of the most expensive cuts of steak, due to its prized texture and that’s only about 2% of the total animal. Considered the gold standard of steaks, and when it is cooked right, it has a melt-in-your-mouth texture you just can’t get from other cuts."
    mainDishPrice3.textContent = "$120";
    mainDishPhoto3.src = "https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg";

    // Dish 4 - New York Strip

    mainDishItem4.textContent = "New York Strip";
    mainDishDesc4.textContent = "A strip steak comes from the short loin of a cow. This is a cut of meat that is not in heavy use by the cow, which means that it is particularly tender. This New York strip steak is seared steak that’s cooked to golden brown, then topped with a garlic and herb butter."
    mainDishPrice4.textContent = "$100";
    mainDishPhoto4.src = "https://miro.medium.com/max/1400/1*qzTT95oqQ0cfnvv9tJCsVQ.jpeg";

    mainDishDiv1.append(mainDishItem1, mainDishDesc1, mainDishPrice1, mainDishPhoto1);
    mainDishDiv2.append(mainDishItem2, mainDishDesc2, mainDishPrice2, mainDishPhoto2);
    mainDishDiv3.append(mainDishItem3, mainDishDesc3, mainDishPrice3, mainDishPhoto3);
    mainDishDiv4.append(mainDishItem4, mainDishDesc4, mainDishPrice4, mainDishPhoto4);

    content.append(mainDishes, mainDishDiv1, mainDishDiv2, mainDishDiv3, mainDishDiv4);
}

export { menu };