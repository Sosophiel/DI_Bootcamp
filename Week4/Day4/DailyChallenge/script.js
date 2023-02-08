

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
       console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

let video = new Video("Friends", "Jane", 1200);

console.log(video);

video.watch();

let video2 = new Video("Lion King", "John", 600);

video2.watch();

let allVideos = []
    



/* Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds) */

/* 
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”

Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.

Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances. */