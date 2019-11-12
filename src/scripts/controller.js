import {Section, modalAppear, showNoDisplay, renderLeftSection, renderRightSection} from "./view.js";
import {News} from "./model.js";
import {API_KEY} from "./const.js";

// NewsChannel helps fetch all the news articles as news Objects
class NewsChannel {
    constructor (APIKey, newsChannelName) {
        this.APIKey = APIKey;
        this.channel = newsChannelName;
    }
    
    async getNewsData() {
        let url = '';

        // If the channel is IN, then selected option is ALL
        // So fetch the news Article from INDIA's URL
        // Else fetch the news articles of selected channel
        if (this.channel === 'in') {
            url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.APIKey}`;
        } else {
            let proxy = `https://cors-anywhere.herokuapp.com/`;
            url = `${proxy}https://newsapi.org/v2/top-headlines?sources=${this.channel}&apiKey=${this.APIKey}`;
        }
        console.log (url);
        try {
            // Fetch the promise object from url
            let result = await fetch(url);
            
            // Convert to JSON
            let data = await result.json();

            if (data.status === 'error') {
                alert ('There was some error!\nPlease refresh the page.\nIf the problem persists, try again later.')
                return [];
            }
            
            // Iterate through each articles of the data object
            let newsObject = [];
            data.articles.forEach(article => {
                // Create A News Object with the available data
                // [ID, Name Of Channel, Image URL, Title, Subtitle, Content]
                let news = new News (
                    article.source.id,
                    article.source.name,
                    article.urlToImage,
                    article.title,
                    article.publishedAt,
                    article.content === null ? article.description : article.content);
                
                // Push to the array of News
                newsObject.push (news);
            });
            return newsObject;
        } catch (error) {
            console.log (error);
        }
    }
}


// To render the select options Sections,
// 1. Get ID of Selected option
// 2. REMOVE all visible sections
// 3. FETCH All News Data from the URL of the Selected ID
// 4. Create the Section
// 5. Render the Section
let getAndDisplayNews = () => {
    let select = document.querySelector('select');
    
    // 1. Get the id of the selected option
    let category = select[select.selectedIndex].id;

    // 2. Remove all visible contents
    document.querySelector('.left-section').innerHTML = '';
    
    // 3. Get News Articles from API
    let newsDatas = new NewsChannel(API_KEY, category).getNewsData(); 

    // Render all received Sections
    newsDatas.then (val => {

        // If there are no fetched data, show nothing to
        if (val.length == 0) {
            showNoDisplay ();
            return;
        }
        let num = 0;
        for (const news of val) {
            
            // 4. Create the section of the news Article
            let section = new Section (num++, news);

            // 5. Render te section
            section.render();
        }
        let button = document.querySelectorAll('.content-button');
        
        // Add Event Listener and effects to each of the buttons
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', () => modalAppear(i));
        }
    });
}

export {getAndDisplayNews};