import { homepage } from "./homepage";
import { contactUs } from "./contact";
import { menu } from "./menu";





const tabSwitcher = (() => {
    homepage();
    const homepageBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homepageBtn.value = "Home", homepageBtn.textContent = "Home";
    menuBtn.value = "Menu", menuBtn.textContent = "Menu";
    contactBtn.value = "Contact", contactBtn.textContent = "Contact";
    document.body.prepend(homepageBtn, menuBtn, contactBtn);

    let page = 1;
    const home = document.querySelector('button[value="Home"]');
    const menu1 = document.querySelector('button[value="Menu"]');
    const contact = document.querySelector('button[value="Contact"]');
    const content = document.querySelector('#content');



    home.addEventListener('click', () => {
        if (page == 1) return
        removeAllChildrenNodes(content);
        homepage();
        page = 1;

    });

    menu1.addEventListener('click', () => {
        if (page == 2) return
        removeAllChildrenNodes(content);
        menu();
        page = 2;
    });

    contact.addEventListener('click', () => {
        if (page == 3) return
        removeAllChildrenNodes(content);
        contactUs();
        page = 3;
    });

    const removeAllChildrenNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
})();