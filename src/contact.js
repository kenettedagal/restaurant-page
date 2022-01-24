const contactUs = () => {
    const name_1 = document.createElement('h3');
    const name_2 = document.createElement('h3');
    const name_3 = document.createElement('h3');

    const position_1 = document.createElement('p');
    const position_2 = document.createElement('p');
    const position_3 = document.createElement('p');

    const phone_1 = document.createElement('p');
    const phone_2 = document.createElement('p');
    const phone_3 = document.createElement('p');

    const email_1 = document.createElement('p');
    const email_2 = document.createElement('p');
    const email_3 = document.createElement('p');

    const photo_1 = document.createElement('img');
    const photo_2 = document.createElement('img');
    const photo_3 = document.createElement('img');

    const content = document.querySelector('#content');

    const div_1 = document.createElement('div');
    const div_2 = document.createElement('div');
    const div_3 = document.createElement('div');

    name_1.textContent = "Kenette Dagal";
    position_1.textContent = "Head Chef";
    phone_1.textContent = "555-8700";
    email_1.textContent = "kenette.headchef@steak.com";
    photo_1.src = "https://1.bp.blogspot.com/-J6DhylEKdnA/WqihcAfcKWI/AAAAAAABKzk/d2002Ljcu6sKrB0H7RE5LRldWNjuPdTfwCLcBGAs/s800/cooking_chef_man_asia.png"

    div_1.append(name_1, position_1, phone_1, email_1, photo_1);

    name_2.textContent = "Robert Swiss";
    position_2.textContent = "Sous Chef";
    phone_2.textContent = "593-8322";
    email_2.textContent = "robert.souschef@steak.com";
    photo_2.src = "https://4.bp.blogspot.com/-Ybf5e3XnDio/WqihdyVeJ3I/AAAAAAABKzw/7riF_u9DBGE1rT5gYskJB58m4Qst39pJACLcBGAs/s800/cooking_chef_man_white.png";

    div_2.append(name_2, position_2, phone_2, email_2, photo_2);

    name_3.textContent = "Erika Reed";
    position_3.textContent = "Waiter";
    phone_3.textContent = "231-2300";
    email_3.textContent = "erika.waiter@steak.com";
    photo_3.src = "https://3.bp.blogspot.com/-a-E_7wlnm2I/VHPgDvXS_NI/AAAAAAAApOI/lgmgV9RfKhw/s800/job_chef_woman.png";

    div_3.append(name_3, position_3, phone_3, email_3, photo_3);

    content.append(div_1, div_2, div_3);

}

export { contactUs };