// Layout for Home Page
const homePageLayout = () => {
    const domMain = document.getElementById('main');
    const homePage = document.getElementById('home');
    const infoPage = document.getElementById('info');

    // Clear the DOM 
    domMain.querySelectorAll('*').forEach(n => n.remove());

    const mainGridContainer = document.createElement('div');
    mainGridContainer.setAttribute('class', 'main-grid-container');
    mainGridContainer.setAttribute('id', 'main-grid-container');

    // Section One of DOM
    const gridItemSectionOne = document.createElement('section');
    gridItemSectionOne.setAttribute('class', 'main-grid-item section1');
    gridItemSectionOne.setAttribute('id', 'section1');

    const slideshowContainer = document.createElement('div');
    slideshowContainer.setAttribute('class', 'slideshow-container');
    slideshowContainer.setAttribute('id', 'slideshow-container');

    const characterArt = document.createElement('img');
    characterArt.setAttribute('id', 'slideshow');
    characterArt.setAttribute('alt', 'slideshow of images showcasing various character models from the game');
    characterArt.src= './assets/images/characters/Emperor.png';

    // Section Two of DOM
    const gridItemSectionTwo = document.createElement('section');
    gridItemSectionTwo.setAttribute('class', 'main-grid-item section2');
    gridItemSectionTwo.setAttribute('id', 'section2');

    const sectionTwoHeading = document.createElement('h2');
    sectionTwoHeading.setAttribute('class', 'section-heading');
    sectionTwoHeading.setAttribute('id', 'section2-heading');
    sectionTwoHeading.innerText = 'Newest Version'

    const sectionTwoFlexContainer = document.createElement('div');
    sectionTwoFlexContainer.setAttribute('class', 'section-flex-container');
    sectionTwoFlexContainer.setAttribute('id', 'section2-container');

    const platformLogoSectionTwo = document.createElement('img');
    platformLogoSectionTwo.setAttribute('class', 'icon')
    platformLogoSectionTwo.setAttribute('alt', 'windows logo')
    platformLogoSectionTwo.src = './assets/icons/microsoft-icon.svg';

    const currentDownloadLink = document.createElement('a');
    currentDownloadLink.href = 'https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.2.zip';
    currentDownloadLink.innerText = 'Demo version 1.0.2';

    // Section Three of DOM
    const gridItemSectionThree = document.createElement('section');
    gridItemSectionThree.setAttribute('class', 'main-grid-item section3');
    gridItemSectionThree.setAttribute('id', 'section3');

    const sectionThreeHeading = document.createElement('h2');
    sectionThreeHeading.setAttribute('class', 'section-heading');
    sectionThreeHeading.setAttribute('id', 'section3-heading');
    sectionThreeHeading.innerText = 'Previous Versions'

    const sectionThreeFlexContainer = document.createElement('div');
    sectionThreeFlexContainer.setAttribute('class', 'section-flex-container');
    sectionThreeFlexContainer.setAttribute('id', 'section3-container');

    const platformLogoSectionThree = document.createElement('img');
    platformLogoSectionThree.setAttribute('class', 'icon');
    platformLogoSectionThree.setAttribute('alt', 'windows logo');
    platformLogoSectionThree.src = './assets/icons/microsoft-icon.svg';

    const previousDownloadLinkOne = document.createElement('a');
    const previousDownloadLinkTwo = document.createElement('a');
    previousDownloadLinkOne.setAttribute('class', 'previous-version');
    previousDownloadLinkTwo.setAttribute('class', 'previous-version');
    previousDownloadLinkOne.innerText = 'Demo version 1.0.1';
    previousDownloadLinkOne.href = 'https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.1.zip';
    previousDownloadLinkTwo.innerText = 'Demo version 1.0.0';
    previousDownloadLinkTwo.href = 'https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo.zip';

    // DOM manipulation
    domMain.append(mainGridContainer);

    mainGridContainer.append(gridItemSectionOne);
    mainGridContainer.append(gridItemSectionTwo);
    mainGridContainer.append(gridItemSectionThree);

    // Section One
    gridItemSectionOne.append(slideshowContainer);
    slideshowContainer.append(characterArt);

    // Section Two
    gridItemSectionTwo.append(sectionTwoHeading);
    gridItemSectionTwo.append(sectionTwoFlexContainer);
    sectionTwoFlexContainer.append(platformLogoSectionTwo);
    sectionTwoFlexContainer.append(currentDownloadLink);

    // Section Three
    gridItemSectionThree.append(sectionThreeHeading);
    gridItemSectionThree.append(sectionThreeFlexContainer);
    sectionThreeFlexContainer.append(platformLogoSectionThree);
    sectionThreeFlexContainer.append(previousDownloadLinkOne);
    sectionThreeFlexContainer.append(previousDownloadLinkTwo);

    infoPage.style.color = '';
    homePage.style.color = 'rgb(200, 200, 200)';

    homePage.addEventListener('click', homePageLayout);
    infoPage.addEventListener('click', infoPageLayout);

    slideshowOne();
};

// Layout for Info Page
const infoPageLayout = () => {
    const domMain = document.getElementById('main');
    const homePage = document.getElementById('home');
    const infoPage = document.getElementById('info');

    // Clear the DOM 
    domMain.querySelectorAll('*').forEach(n => n.remove());

    const mainGridContainer = document.createElement('div');
    mainGridContainer.setAttribute('class', 'main-grid-container');
    mainGridContainer.setAttribute('id', 'main-grid-container');

    // Section One of DOM
    const gridItemSectionOne = document.createElement('section');
    gridItemSectionOne.setAttribute('class', 'main-grid-item section1');
    gridItemSectionOne.setAttribute('id', 'section1');

    const slideshowContainer = document.createElement('div');
    slideshowContainer.setAttribute('class', 'slideshow-container');
    slideshowContainer.setAttribute('id', 'slideshow-container');

    const characterArt = document.createElement('img');
    characterArt.setAttribute('id', 'slideshow');
    characterArt.setAttribute('alt', 'slideshow of images showcasing various character models from the game');
    characterArt.src= './assets/images/characters/King.png'

    // Section Two of DOM
    const gridItemSectionTwo = document.createElement('section');
    gridItemSectionTwo.setAttribute('class', 'main-grid-item section2');
    gridItemSectionTwo.setAttribute('id', 'section2');

    const sectionTwoHeading = document.createElement('h2');
    sectionTwoHeading.setAttribute('class', 'section-heading');
    sectionTwoHeading.setAttribute('id', 'section2-heading');
    sectionTwoHeading.innerText = 'Preview';

    const sectionTwoFlexContainer = document.createElement('div');
    sectionTwoFlexContainer.setAttribute('class', 'section-flex-container');
    sectionTwoFlexContainer.setAttribute('id', 'section2-container');

    const videoPreview = document.createElement('video');
    const videoSource = document.createElement('source');
    videoSource.src = './assets/video/2023-07-30 03-10-20.mkv';

    // Section Three of DOM
    const gridItemSectionThree = document.createElement('section');
    gridItemSectionThree.setAttribute('class', 'main-grid-item section3');
    gridItemSectionThree.setAttribute('id', 'section3');

    const sectionThreeHeading = document.createElement('h2');
    sectionThreeHeading.setAttribute('class', 'section-heading');
    sectionThreeHeading.setAttribute('id', 'section3-heading');
    sectionThreeHeading.innerText = 'Road Map Info';

    const sectionThreeFlexContainer = document.createElement('div');
    sectionThreeFlexContainer.setAttribute('class', 'section-flex-container');
    sectionThreeFlexContainer.setAttribute('id', 'section3-container');

    const sectionThreeParagraph = document.createElement('p');
    sectionThreeParagraph.innerText = "Road Map info will go here";

    // DOM manipulation
    domMain.append(mainGridContainer);

    mainGridContainer.append(gridItemSectionOne);
    mainGridContainer.append(gridItemSectionTwo);
    mainGridContainer.append(gridItemSectionThree);

    // Section One
    gridItemSectionOne.append(slideshowContainer);
    slideshowContainer.append(characterArt);

    // Section Two
    gridItemSectionTwo.append(sectionTwoHeading);
    gridItemSectionTwo.append(sectionTwoFlexContainer);
    sectionTwoFlexContainer.append(videoPreview);
    videoPreview.append(videoSource);

    // Section Three
    gridItemSectionThree.append(sectionThreeHeading);
    gridItemSectionThree.append(sectionThreeFlexContainer);
    sectionThreeFlexContainer.append(sectionThreeParagraph);

    infoPage.style.color = 'rgb(200, 200, 200)';
    homePage.style.color = '';

    homePage.addEventListener('click', homePageLayout);
    infoPage.addEventListener('click', infoPageLayout);

    slideshowTwo();
};

homePageLayout();