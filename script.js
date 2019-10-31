/**********************
* Get json File
*/
var ob = JSON.parse(data);

// Keeps All the Pair as ['category' : Section]
var DOMElements = {};
DOMElements['All'] = [];

// Keeps Track Of All Visible Sections
var visibles = [];

// Create HTML Elements
var DOMManipulation = (function () {

    // Scroll To Top Button
    (function() {
        let image = document.createElement('img');
        image.alt = 'Scroll To Top';
        image.className = 'scroll-to-top';
        image.src = './assets/scroll-to-top.png';
    
        document.querySelector('body').appendChild(image);
    })();
    
    // Modal
    (function() {
        let modal = document.createElement('div');
        modal.className = 'modal';
    
        document.querySelector('body').appendChild(modal);
    })();
    
    // Main Div
    (function() {
        let main = document.createElement('div');
        main.className = 'main';
    
        document.querySelector('body').appendChild(main);
    })();    
    
    /**********************
    * Create Modal
    */
     var modal_inside = document.createElement('div');
    modal_inside.className = 'modal-inside';

    var top = document.createElement('div');
    top.className = 'top';

    var modal_close = document.createElement('img');
    modal_close.className = 'modal-close-btn';
    modal_close.setAttribute('src', 'assets/close-btn.png');
    modal_close.setAttribute('alt', 'Close');
    modal_close.setAttribute('class', 'modal-close-btn');

    var modal_title = document.createElement('div');
    modal_title.className = 'modal-title';
    
    var modal_subtitle = document.createElement('div');
    modal_subtitle.className = 'modal-subtitle';

    var modal_image = document.createElement('img');
    modal_image.className = 'modal-image'
    modal_image.setAttribute('src', 'assets/content-img.png');
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


    /**********************
    * Modify Left Section
    */

    // No of cards
    var no_of_contents = 10;

    //  No of rows in each card [Image + Title, Subtitle, Content, Continue Reading button]
    var no_of_rows = 4;         

    // No of data in each cards [Image, Title, Subtitle, Content, Continue Reading Button]
    var no_of_table_data = 5;

    // Take the reference for the main class
    var main = document.querySelector('.main');

    // Create 10 contents
    for (var i = 0; i < no_of_contents; i++) {
        // Create Section
        var section = document.createElement('section'); 
        section.setAttribute('category', ob[i].category);
        section.setAttribute('id', 'section-' + (i + 1));

        // Add the section under the main content tag
        main.appendChild(section);

        // Add CSS class to the section
        section.className = 'content';
        if (i == no_of_contents - 1) {
            section.style.borderBottom = 'none';
        }

        // Create Table
        var table = document.createElement('table');
        section.appendChild(table);

        // Create an array of the no of table rows required
        var tr = new Array(no_of_rows);
        for (var j = 0; j < no_of_rows; j++) {
            tr[j] = document.createElement('tr');
        }

        // Create an array of the no of table datas required
        var td = new Array(no_of_table_data);
        for (var j = 0; j < no_of_table_data; j++) {
            td[j] = document.createElement('td');
        }

        /*********
        * Create First Row Of Table
        */
        var img = document.createElement('img');
        img.setAttribute('alt', 'Content Image');
        img.setAttribute('src', 'assets/content-img.png');
        img.className = 'content-image';
        
        // Modify Table Datas Accordingly
        td[0].appendChild(img);
        td[0].setAttribute('rowspan', '4');
        td[1].textContent = 'Title ' + ob[i].title;
        td[1].className = 'content-title';
        

        // Add the table datas to the first row of the table
        tr[0].appendChild(td[0]);
        tr[0].appendChild(td[1]);

        /*********
        * Create Second Row Of Table
        */
        td[2].className = 'content-dates';
        td[2].textContent = 'Posted On ' + ob[i].date + '// Category: Category ' +
                            ob[i].category;
        tr[1].appendChild(td[2]);

        /*********
        * Create Third Row Of Table
        */
        td[3].className = 'content-details';
        td[3].textContent = ob[i].content;
        tr[2].append(td[3]);

        /*********
        * Create Final Row Of Table (Continue Reading Button)
        */
        var button = document.createElement('button');
        button.className = 'content-button';
        button.setAttribute('id', (i + 1));
        button.textContent = 'Continue Reading';
        td[4].appendChild(button);
        tr[3].appendChild(td[4]);

        for (var j = 0; j < no_of_rows; j++) {
            table.appendChild(tr[j]);
        }

        // Add The Section to its category
        if (!(ob[i].category in DOMElements)) {
            DOMElements[ob[i].category] = [];
        }
        DOMElements[ob[i].category].push(section);
        DOMElements['All'].push(section);
        visibles.push(section);
    }

    /**********************
    * Modify Right Section
    */

    var right_section = document.createElement('section');
    right_section.className = 'right-panel';

    var h5 = document.createElement('h5');
    h5.textContent = 'Select Category';

    var select = document.createElement('select');
    select.className = 'right-panel-select';
    // Add All Options
    var all = document.createElement('option');
    all.setAttribute('selected', 'selected');
    all.setAttribute('value', 'All');
    all.textContent = 'All';
    select.appendChild(all);


    var distinctCategories = new Set();
    for (var i = 0; i < no_of_contents; i++) {
        if (distinctCategories.has(ob[i].category)) {
            continue;
        }
        var options = document.createElement('option');
        options.setAttribute('value', ob[i].category);
        options.textContent = ob[i].category;
        distinctCategories.add(ob[i].category);
        select.appendChild(options);
    }

    var h5_subscribe = document.createElement('h5');
    h5_subscribe.innerHTML = '<br>Subscribe';

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Email Address');

    var subscribe_button = document.createElement('button');
    subscribe_button.className = 'right-panel-btn';
    subscribe_button.textContent = 'Subscribe';


    right_section.appendChild(h5);
    right_section.appendChild(select);
    right_section.appendChild(h5_subscribe);
    right_section.appendChild(input);
    right_section.appendChild(subscribe_button);
    main.appendChild(right_section);
})();

// Functionalities
var functionalities = (function () {
    // Get Buttons
    var button = document.querySelectorAll('.content-button');

    // Add Event Listener and effects to each of the buttons
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            
            // Add CSS Effects to background
            document.querySelector('.main').style.filter = 'blur(2px)';
            document.querySelector('.header').style.filter = 'blur(2px)';
            document.querySelector('.footer').style.filter = 'blur(2px)';
            document.querySelector('.scroll-to-top').style.display = 'none';

            // Modify Modal Content and Display it
            var sectionData = document.querySelector('section[id=section-' + this.id + ']');
            
            // Title Of Modal
            document.querySelector('.modal-title').innerText = sectionData.querySelector('.content-title').innerText;

            // Subtitle Of Modal
            document.querySelector('.modal-subtitle').innerText =
            sectionData.querySelector('.content-dates').innerText; 

            // Main Content Of Modal
            document.querySelector('.modal-content').innerText =             sectionData.querySelector('.content-details').innerText; 

            // Display the Modal
            document.querySelector('.modal').style.display = 'block';

            // Take Care Of Right Section
            document.querySelector('.right-panel').style.top = '1%';

        });
    }

    // Reset All Effect caused by Modal Opening
    document.querySelector('.modal-close-btn').addEventListener('click', function() {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.scroll-to-top').style.display = 'none';
        document.querySelector('.main').style.filter = 'blur(0px)';
        document.querySelector('.header').style.filter = 'blur(0px)';
        document.querySelector('.footer').style.filter = 'blur(0px)';
    });

    // Select OnChange Event Effects
    var select = document.querySelector('select');
    select.addEventListener('change', function () {
        var selectedCategory = select.value;
        // Hide All Visible Elements
        while (visibles.length) {
            visibles[visibles.length - 1].style.display = 'none';
            visibles.pop();
        }
        // Show All the Elements with Selected Category
        for (var i = 0; i < DOMElements[selectedCategory].length; i++) {
            DOMElements[selectedCategory][i].style.display = 'block';
            visibles.push(DOMElements[selectedCategory][i]);
        }
    });

    // Subscribe Button Verification
    document.querySelector('.right-panel-btn').addEventListener('click', function() {
        var pattern = '^[A-Za-z]+[A-Za-z0-9_.]*@[A-Za-z]+[.][A-Za-z]+$';
        var value = document.querySelector('input[type=text]').value;
        if (value.match(pattern)) {
            window.alert('Successfully Subscribed!!\nPage Will be reloaded automatically.');
            localStorage.setItem('Email', JSON.stringify(value));
                    
            // Reload Page After 1 second
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        } else {
            window.alert('Please Enter a proper email. E-mail must contain a \'@\' and must contain a \'.\'.');
        }
    });

    // Scroll To Top Button
    document.addEventListener('scroll', function () {
        // Hide Button If The scroll bar is at the top of the screen else
        // display it
        if (document.documentElement.scrollTop >= 10) {
            if (document.querySelector('.modal').style.display === 'none') {
                document.querySelector('.scroll-to-top').style.display = 'block';
            }
        } else {
            document.querySelector('.scroll-to-top').style.display = 'none';
        }
    });
    
    // Scroll to top when the button is clicked
    document.querySelector('.scroll-to-top').addEventListener('click',
    function () {
        window.scrollTo(0, 0);
    });
})();

