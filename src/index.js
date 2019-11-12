import * as View from "./scripts/view.js";
import {getAndDisplayNews} from "./scripts/controller.js";
import {renderHeader} from "./scripts/header.js";
import {renderFooter} from "./scripts/footer.js";

// On onload, DISPLAY All
window.onload = () => {
    // Render Header
    renderHeader();

    // Render Scroll To Top
    View.renderScrollToTop();

    // Render Modal
    View.renderModal();

    // Render Main
    View.renderMain();

    // Render Footer
    renderFooter();
    
    // Render Left Section
    View.renderLeftSection();

    // RENDER Right Section
    View.renderRightSection();

    // DISPLAY Default News Articles --> India
    getAndDisplayNews();

    // ATTACH the rendering function -> getAndDisplayNews to
    // select in an event listener
    document.querySelector ('.right-panel-select').addEventListener ('change', getAndDisplayNews);

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

    // DISPLAY scroll to top button when scrolling
    // If scroll bar is at top, HIDE the button
    document.addEventListener ('scroll', () => {
        document.querySelector ('.scroll-to-top').style.display = 
        (document.scrollingElement.scrollTop < 10) ? 'none': 'block';
    })

    // SCROLL to X = 0, Y = 0 when clicked on button
    document.querySelector ('.scroll-to-top').addEventListener ('click', () => {
        document.scrollingElement.scrollTo (0, 0);
    })
}

