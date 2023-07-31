const domMain = document.getElementById('main');
const homePage = document.getElementById('home');
const infoPage = document.getElementById('info');
const supportPage = document.getElementById('support');

const homeResetStyle = () => {
    homePage.style.color = '';
}

const infoResetStyle = () => {
    infoPage.style.color = '';
}

const homeLayout = () => {
    infoResetStyle();
    domMain.innerHTML = `
    <!--grid container for main-->
    <div class="main-grid-container" id="main-grid-container">
        <!--section one-->
        <section class="main-grid-item section1" id="section1">
            <div class="slideshow-container" id="slideshow-container">
                <img id="slideshow" src="./assets/images/characters/Emperor.png" alt="slideshow of images showcasing various character models from the game">
            </div>
        </section>
        <!--section two-->
        <section class="main-grid-item section2" id="section2">
            <h2 class="section-heading" id="section2-heading">Newest Release</h2>
            <div class="section-flex-container" id="section2-container">
                <img src="./assets/icons/microsoft-icon.svg" class="icon" alt="windows logo">   
                <a href="https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.1.zip">x64 Demo version 1.0.1</a>
            </div>
        </section>
        <!--section three-->
        <section class="main-grid-item section3" id="section3">
            <h2 class="section-heading" id="section3-heading">Previous Releases</h2>
            <div class="section-flex-container" id="section3-container">
                <img src="./assets/icons/microsoft-icon.svg" class="icon" alt="windows logo"> 
                <a href="https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo.zip">x64 Demo version 1.0</a>
            </div>
        </section>
    </div>
    `;
    homePage.style.color = 'rgb(200, 200, 200)';
    slideshowOne();
};

const infoLayout = () => {
    homeResetStyle();
    domMain.innerHTML = `
    <!--grid container for main-->
    <div class="main-grid-container">
        <!--section one-->
        <section class="main-grid-item" id="section1">
            <div class="slideshow-container">
                <img id="slideshow" src="./assets/images/characters/King.png">
            </div>
        </section>
        <!--section two-->
        <section class="main-grid-item section2" id="section2">
            <h2 class="section-heading" id="section2-heading">Preview</h2>
            <div class="section-flex-container" id="section2-container">   
                <video controls>
                    <source src="./assets/video/2023-07-30 03-10-20.mkv">
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        <!--section three-->
        <section class="main-grid-item section3" id="section3">
            <h2 class="section-heading" id="section3-heading">Road Map</h2>
            <div class="section-flex-container" id="section3-container"> 
                <p>Road Map info will go here</p>
            </div>
        </section>
    </div>
    `;
    infoPage.style.color = 'rgb(200, 200, 200)';
    slideshowTwo();
};

homePage.addEventListener('click', homeLayout);
infoPage.addEventListener('click', infoLayout);

homeLayout();