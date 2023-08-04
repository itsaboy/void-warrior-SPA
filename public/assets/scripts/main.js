// Layout for Home Page
const homePageLayout = () => {
    const domMain = document.getElementById('main');
    const homePage = document.getElementById('home');
    const infoPage = document.getElementById('info');
    const supportPage = document.getElementById('support');

    // Clear the DOM 
    domMain.querySelectorAll('*').forEach(n => n.remove());
    homePage.removeEventListener('click', homePageLayout);
    infoPage.removeEventListener('click', infoPageLayout);
    supportPage.removeEventListener('click', supportPageLayout);

    const mainGridContainer = document.createElement('div');
    mainGridContainer.setAttribute('class', 'main-grid-container');
    mainGridContainer.setAttribute('id', 'main-grid-container');

    // Home Page Slideshow
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

    // Most Reason Version Download
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

    // Previous Versions Downloads
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

    // Slideshow
    gridItemSectionOne.append(slideshowContainer);
    slideshowContainer.append(characterArt);

    // Most Recent Version
    gridItemSectionTwo.append(sectionTwoHeading);
    gridItemSectionTwo.append(sectionTwoFlexContainer);
    sectionTwoFlexContainer.append(platformLogoSectionTwo);
    sectionTwoFlexContainer.append(currentDownloadLink);

    // Previous Versions
    gridItemSectionThree.append(sectionThreeHeading);
    gridItemSectionThree.append(sectionThreeFlexContainer);
    sectionThreeFlexContainer.append(platformLogoSectionThree);
    sectionThreeFlexContainer.append(previousDownloadLinkOne);
    sectionThreeFlexContainer.append(previousDownloadLinkTwo);

    infoPage.style.color = '';
    supportPage.style.color = '';
    homePage.style.color = 'rgb(200, 200, 200)';

    infoPage.addEventListener('click', infoPageLayout);
    supportPage.addEventListener('click', supportPageLayout);

    slideshowOne();
};

// Layout for Info Page
const infoPageLayout = () => {
    const domMain = document.getElementById('main');
    const homePage = document.getElementById('home');
    const infoPage = document.getElementById('info');
    const supportPage = document.getElementById('support');

    // Clear the DOM 
    domMain.querySelectorAll('*').forEach(n => n.remove());
    homePage.removeEventListener('click', homePageLayout);
    infoPage.removeEventListener('click', infoPageLayout);
    supportPage.removeEventListener('click', supportPageLayout);

    const mainGridContainer = document.createElement('div');
    mainGridContainer.setAttribute('class', 'main-grid-container');
    mainGridContainer.setAttribute('id', 'main-grid-container');

    // Info Page Slideshows
    const gridItemSectionOne = document.createElement('section');
    gridItemSectionOne.setAttribute('class', 'main-grid-item section1');
    gridItemSectionOne.setAttribute('id', 'section1');

    const slideshowContainer = document.createElement('div');
    slideshowContainer.setAttribute('class', 'slideshow-container');
    slideshowContainer.setAttribute('id', 'slideshow-container');

    const characterArt = document.createElement('img');
    characterArt.setAttribute('id', 'slideshow');
    characterArt.setAttribute('alt', 'slideshow of images showcasing various character models from the game');
    characterArt.src= './assets/images/characters/King.png';

    // Video Preview
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

    // Road Map
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
    sectionThreeParagraph.innerText = "Total UI redesign underway. Only once this is done will more game content be worked on.";

    // DOM manipulation
    domMain.append(mainGridContainer);

    mainGridContainer.append(gridItemSectionOne);
    mainGridContainer.append(gridItemSectionTwo);
    mainGridContainer.append(gridItemSectionThree);

    // Slideshow
    gridItemSectionOne.append(slideshowContainer);
    slideshowContainer.append(characterArt);

    // Video Preview
    gridItemSectionTwo.append(sectionTwoHeading);
    gridItemSectionTwo.append(sectionTwoFlexContainer);
    sectionTwoFlexContainer.append(videoPreview);
    videoPreview.append(videoSource);

    // Road Map
    gridItemSectionThree.append(sectionThreeHeading);
    gridItemSectionThree.append(sectionThreeFlexContainer);
    sectionThreeFlexContainer.append(sectionThreeParagraph);

    infoPage.style.color = 'rgb(200, 200, 200)';
    homePage.style.color = '';
    supportPage.style.color = '';

    homePage.addEventListener('click', homePageLayout);
    supportPage.addEventListener('click', supportPageLayout);

    slideshowTwo();
};

// Layout for Support Page
const supportPageLayout = () => {
    const domMain = document.getElementById('main');
    const homePage = document.getElementById('home');
    const infoPage = document.getElementById('info');
    const supportPage = document.getElementById('support');

    // Clear the DOM 
    domMain.querySelectorAll('*').forEach(n => n.remove());
    homePage.removeEventListener('click', homePageLayout);
    infoPage.removeEventListener('click', infoPageLayout);
    supportPage.removeEventListener('click', supportPageLayout);

    const mainGridContainer = document.createElement('div');
    mainGridContainer.setAttribute('class', 'main-grid-container');
    mainGridContainer.setAttribute('id', 'main-grid-container');

    // Support Page Slideshow
    const gridItemSectionOne = document.createElement('section');
    gridItemSectionOne.setAttribute('class', 'main-grid-item section1');
    gridItemSectionOne.setAttribute('id', 'section1');

    const slideshowContainer = document.createElement('div');
    slideshowContainer.setAttribute('class', 'slideshow-container');
    slideshowContainer.setAttribute('id', 'slideshow-container');

    const characterArt = document.createElement('img');
    characterArt.setAttribute('id', 'slideshow');
    characterArt.setAttribute('alt', 'slideshow of images showcasing various character models from the game');
    characterArt.src= './assets/images/characters/Marshall.png';

    // Bug Reports (DISABLED)
    const gridItemSectionTwo = document.createElement('section');
    gridItemSectionTwo.setAttribute('class', 'main-grid-item section2');
    gridItemSectionTwo.setAttribute('id', 'section2');

    const sectionTwoHeading = document.createElement('h2');
    sectionTwoHeading.setAttribute('class', 'section-heading');
    sectionTwoHeading.setAttribute('id', 'section2-heading');
    sectionTwoHeading.innerText = 'Bug Reports';

    const sectionTwoFlexContainer = document.createElement('div');
    sectionTwoFlexContainer.setAttribute('class', 'section-flex-container');
    sectionTwoFlexContainer.setAttribute('id', 'section2-container');

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('id', 'user-input');
    inputField.setAttribute('class', 'input');
    inputField.setAttribute('name', 'user-input');
    inputField.setAttribute('maxlength', '100');
    inputField.setAttribute('title', 'DISABLED');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.setAttribute('class', 'input');
    submitButton.setAttribute('title', 'DISABLED');
    submitButton.innerText = 'Submit';

    // System Requirements
    const gridItemSectionThree = document.createElement('section');
    gridItemSectionThree.setAttribute('class', 'main-grid-item section3');
    gridItemSectionThree.setAttribute('id', 'section3');

    const sectionThreeHeading = document.createElement('h2');
    sectionThreeHeading.setAttribute('class', 'section-heading');
    sectionThreeHeading.setAttribute('id', 'section3-heading');
    sectionThreeHeading.innerText = 'System Requirements';

    const sectionThreeFlexContainer = document.createElement('div');
    sectionThreeFlexContainer.setAttribute('class', 'section-flex-container');
    sectionThreeFlexContainer.setAttribute('id', 'section3-container');

    const sectionThreeHeadingOne = document.createElement('h4');
    sectionThreeHeadingOne.innerText = "Storage:";
    const sectionThreeParagraphOne = document.createElement('p');
    sectionThreeParagraphOne.innerText = "1.3 GBs";
    const sectionThreeHeadingTwo = document.createElement('h4');
    sectionThreeHeadingTwo.innerText = "Graphics:";
    const sectionThreeParagraphTwo = document.createElement('p');
    sectionThreeParagraphTwo.innerText = "Vulcan 1.2 Support";

    // DOM manipulation
    domMain.append(mainGridContainer);

    mainGridContainer.append(gridItemSectionOne);
    mainGridContainer.append(gridItemSectionTwo);
    mainGridContainer.append(gridItemSectionThree);

    // Slideshow
    gridItemSectionOne.append(slideshowContainer);
    slideshowContainer.append(characterArt);

    // Bug Reports
    gridItemSectionTwo.append(sectionTwoHeading);
    gridItemSectionTwo.append(sectionTwoFlexContainer);
    sectionTwoFlexContainer.append(inputField);
    sectionTwoFlexContainer.append(submitButton);

    // System Requirements
    gridItemSectionThree.append(sectionThreeHeading);
    gridItemSectionThree.append(sectionThreeFlexContainer);
    sectionThreeFlexContainer.append(sectionThreeHeadingOne);
    sectionThreeFlexContainer.append(sectionThreeParagraphOne);
    sectionThreeFlexContainer.append(sectionThreeHeadingTwo);
    sectionThreeFlexContainer.append(sectionThreeParagraphTwo);

    infoPage.style.color = '';
    supportPage.style.color = 'rgb(200, 200, 200)';
    homePage.style.color = '';

    homePage.addEventListener('click', homePageLayout);
    infoPage.addEventListener('click', infoPageLayout);

    slideshowThree();
}

homePageLayout();