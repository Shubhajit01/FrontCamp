// Ten New Channels
let newsChannels = [
    'Focus',
    'BBC News',
    'National Geographic',
    'The Telegraph',
    'The Times Of India',
    'CNBC',
    'Buzzfeed',
    'ESPN',
    'IGN',
    'New Scientist'
]

// Sort newsChannels to dispay them in alphabetical order
newsChannels.sort();

// News Class
class News {
    constructor (...data) {
        [this.channel, this.name, this.imageSRC, this.title, this.subtitle, this.content] = data;
    }
}

export {newsChannels, News};