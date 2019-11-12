import {newsChannels} from "./model.js";

let renderScrollToTop = () => {
    let image = document.createElement('img');
    image.alt = 'Scroll To Top';
    image.className = 'scroll-to-top';
    image.src = './assets/scroll-to-top.png';

    document.querySelector('body').appendChild(image);
}

let renderModal = () => {
    let modal = document.createElement('div');
    modal.className = 'modal';

    document.querySelector('body').appendChild(modal);
}

let renderMain = () => {
    let main = document.createElement('div');
    main.className = 'main';

    document.querySelector('body').appendChild(main);
}

// Section
class Section {
    constructor (val, news) {
        this.val = val;
        this.news = news;
    }

    create() {

        // ***********************************************
        // *            *   Title                        *
        // *    Image   *   Subtitle                     *
        // *            *   Content                      *    
        // *            *   Button                       *
        // ***********************************************

        //  No of rows in each card [Image + Title, Subtitle, Content, Continue Reading button]
        let no_of_rows = 4;         

        // No of data in each cards [Image, Title, Subtitle, Content, Continue Reading Button]
        let no_of_table_data = 5;

        // Create Section
        let section = document.createElement('section'); 
        section.setAttribute ('id', this.val);

        // Add CSS class to the section
        section.className = 'content';
        
        let table = document.createElement('table');
        section.appendChild(table);

        // Create an array of the no of table rows required
        let tr = new Array(no_of_rows);
        for (let j = 0; j < no_of_rows; j++) {
            tr[j] = document.createElement('tr');
        }

        // Create an array of the no of table datas required
        let td = new Array(no_of_table_data);
        for (let j = 0; j < no_of_table_data; j++) {
            td[j] = document.createElement('td');
        }

        /*********
        * Create First Row Of Table
        */
        let img = document.createElement('img');
        img.setAttribute('alt', 'Content Image');
        img.setAttribute('src', this.news.imageSRC);
        img.className = 'content-image';
        
        // Modify Table Datas Accordingly
        td[0].appendChild(img);
        td[0].setAttribute('rowspan', '4');
        td[1].textContent = this.news.title;
        td[1].className = 'content-title';
        

        // Add the table datas to the first row of the table
        tr[0].appendChild(td[0]);
        tr[0].appendChild(td[1]);

        /*********
        * Create Second Row Of Table
        */
        td[2].className = 'content-dates';
        td[2].textContent =
        `Posted On ${this.news.subtitle.substring(0, 10)} //
        Category: ${this.news.name}.`;
        tr[1].appendChild(td[2]);

        /*********
        * Create Third Row Of Table
        */
        td[3].className = 'content-details';
        if (this.news.content && this.news.content.endsWith(']')) {
            let tempContent = this.news.content;
            while (tempContent && !tempContent.endsWith('[')) {
                tempContent = tempContent.substring(0, tempContent.length - 1);
            }
            if (tempContent) {
                tempContent = tempContent.substring(0, tempContent.length - 1);
                this.news.content = tempContent;
            }
        }
        td[3].textContent = this.news.content;
        tr[2].append(td[3]);

        /*********
        * Create Final Row Of Table (Continue Reading Button)
        */
        let button = document.createElement('button');
        button.className = 'content-button';
        button.textContent = 'Continue Reading';
        button.id = this.val;
        td[4].appendChild(button);
        tr[3].appendChild(td[4]);

        for (let j = 0; j < no_of_rows; j++) {
            table.appendChild(tr[j]);
        }
        return section;
    }

    render() {
        let section = this.create();
        document.querySelector('.left-section').appendChild(section);
    }
}

// Modal
class Modal {
    render() {
        var modal_inside = document.createElement('div');
        modal_inside.className = 'modal-inside';

        var top = document.createElement('div');
        top.className = 'top';

        var modal_close = document.createElement('img');
        modal_close.className = 'modal-close-btn';
        modal_close.setAttribute('src', './assets/close-btn.png');
        modal_close.setAttribute('alt', 'Close');
        modal_close.setAttribute('class', 'modal-close-btn');

        var modal_title = document.createElement('div');
        modal_title.className = 'modal-title';
        
        var modal_subtitle = document.createElement('div');
        modal_subtitle.className = 'modal-subtitle';

        var modal_image = document.createElement('img');
        modal_image.className = 'modal-image'
        modal_image.setAttribute('alt', 'Content Image');
        modal_image.setAttribute('class', 'modal-image');

        var modal_content = document.createElement('div');
        modal_content.className = 'modal-content';

        top.appendChild(modal_close);
        top.appendChild(modal_title);
        top.appendChild(modal_subtitle);

        modal_inside.appendChild(top);
        modal_inside.appendChild(modal_image);
        modal_inside.appendChild(modal_content);

        var modal = document.querySelector('.modal');
        modal.appendChild(modal_inside);
        let head = document.querySelector('.header');
        head.parentNode.insertBefore (modal, head.nextSibling);
    }
}

// RENDER Container for left
let renderLeftSection = () => {
    let left_section = document.createElement('div');
    left_section.className = 'left-section';
    document.querySelector('.main').appendChild(left_section);
}

// RENDER Select Option 
let renderRightSection = () => {
    // Create Right Section
    let right_section = document.createElement('section');
    right_section.className = 'right-panel';

    // H5 of right Section --> SELECT CATEGORY
    let h5 = document.createElement('h5');
    h5.textContent = 'Select Category';

    // Create the Select Section
    let select = document.createElement('select');
    select.className = 'right-panel-select';

    // Add All Options
    let all = document.createElement('option');
    all.setAttribute('selected', 'selected');
    all.setAttribute('value', 'All');
    all.id = 'in';
    all.textContent = 'All';
    select.appendChild(all);

    // Populate the Select's Options
    let distinctCategories = new Set();
    for (let i = 0; i < newsChannels.length; i++) {
        let name = newsChannels[i];

        // If the new channel is already added as option, skip it
        if (distinctCategories.has(name)) {
            continue;
        }

        // Create the option Element
        let options = document.createElement('option');
        options.setAttribute('value', name);
        options.id = newsChannels[i].toLowerCase().replace(/ /g, '-');
        options.textContent = name;

        // Add the category to the list of available categories
        distinctCategories.add(name);

        // Append options to the select tag
        select.appendChild(options);
    }

    // APPEND [H5, Select] to Right Section
    right_section.appendChild(h5);
    right_section.appendChild(select);

    // ADD the Right Section to the MAIN tag
    document.querySelector('.main').appendChild(right_section);
}

// Makes the modal appear effect
// adds the modal close button effect event listener
let modalAppear = (id) => {
                
    // Add CSS Effects to background
    document.querySelector('.main').style.filter = 'blur(2px)';
    document.querySelector('.header').style.filter = 'blur(2px)';
    document.querySelector('.footer').style.filter = 'blur(2px)';
    document.querySelector('.scroll-to-top').style.display = 'none';
    document.querySelector('.right-subscribe').style.top = '20%';
    document.querySelector('.right-subscribe').style.right = '8%';

    console.log (id);
    // Modify Modal Content and Display it
    let sectionData = document.getElementById(id);
    
    
    let modal = new Modal();
    modal.render();

    // Title Of Modal
    document.querySelector('.modal-title').innerText = sectionData.querySelector('.content-title').innerText;

    // Subtitle Of Modal
    document.querySelector('.modal-subtitle').innerText =
    sectionData.querySelector('.content-dates').innerText; 

    // Image Of Modal
    document.querySelector('.modal-image').src =
    sectionData.querySelector('.content-image').src; 

    // Main Content Of Modal
    document.querySelector('.modal-content').innerText =             sectionData.querySelector('.content-details').innerText; 

    // Display the Modal
    document.querySelector('.modal').style.display = 'block';

    // Take Care Of Right Section
    document.querySelector('.right-panel').style.top = '1%';

    // Reset All Effect caused by Modal Opening
    document.querySelector('.modal-close-btn').addEventListener('click', function() {
        let modal = document.querySelector('.modal');
        modal.style.display = 'none';
        modal.innerHTML = '';
        document.querySelector('.scroll-to-top').style.display = 'none';
        document.querySelector('.main').style.filter = 'blur(0px)';
        document.querySelector('.header').style.filter = 'blur(0px)';
        document.querySelector('.footer').style.filter = 'blur(0px)';
    });
}

let showNoDisplay = () => {
    let div = document.createElement('div');
    document.querySelector('.left-section').innerHTML = '';
    document.querySelector('.left-section').appendChild(div);
    div.textContent = 'No Content to display!';
    div.className = 'no-display';
}

export {Section, modalAppear, showNoDisplay, renderLeftSection, renderRightSection, renderScrollToTop, renderModal, renderMain};