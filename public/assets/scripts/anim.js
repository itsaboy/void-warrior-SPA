// Slideshow Function

const slideshowOne = () => {

    // DOM Variable
    const currentImage = document.querySelector('#slideshow');

    // Array of Images
    const imageArray = [
        "../assets/images/characters/ElfWarrior.png",
        "../assets/images/characters/OrcWarrior.png",
        "../assets/images/characters/RobberBoss.png",
        "../assets/images/characters/TemplarKnight.png",
        "../assets/images/characters/Skeleton.png",
        "../assets/images/characters/Longbowman.png"
    ];

    const imageLength = imageArray.length;
    let currentImagePlace = 0;

    // Iterates through image array until the last image then repeats iteration
    const imageCycle = () => {
        if (currentImagePlace >= imageLength) {
            currentImagePlace = 0;
        };       
        currentImage.src = imageArray[currentImagePlace];
        currentImagePlace++;
    };

    // Sets timing of image source change to 10 seconds
    const slideshowTiming = () => {   
        setInterval(imageCycle, 10000); 
    };

    slideshowTiming();

};

const slideshowTwo = () => {

    // DOM Variable
    const currentImage = document.querySelector('#slideshow');

    // Array of Images
    const imageArray = [
        "../assets/images/characters/Necromancer.png",
        "../assets/images/characters/Berserk.png",
        "../assets/images/characters/BanditF.png",
        "../assets/images/characters/Marshall.png",
        "../assets/images/characters/RoyalChampion.png",
        "../assets/images/characters/ShadowMage.png"
    ];

    const imageLength = imageArray.length;
    let currentImagePlace = 0;

    // Iterates through image array until the last image then repeats iteration
    const imageCycle = () => {
        if (currentImagePlace >= imageLength) {
            currentImagePlace = 0;
        };       
        currentImage.src = imageArray[currentImagePlace];
        currentImagePlace++;
    };

    // Sets timing of image source change to 10 seconds
    const slideshow = () => {   
        setInterval(imageCycle, 10000); 
    };

    slideshow();

};