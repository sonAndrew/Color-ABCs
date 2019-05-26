(function(){
    // Application
    const application = document.getElementById('app');
    const alphabet = [
        "a", "b", "c",
        "d", "e", "f",
        "g", "h", "i",
        "j", "k", "l",
        "m", "n", "o",
        "p", "q", "r",
        "s", "t", "u",
        "v", "w", "x",
        "y", "z"
    ];
    const colors = {
        "name": [
            "Aqua", "Bistre", "Crimson",
            "Dandelion", "Emerald", "French Rose",
            "Goldenrod", "Hollywood Cerise", "Indigo",
            "Jade", "Kelly Green", "Leoan",
            "Magnolia", "Navajo White", "Orchid",
            "Psychedelic Purple", "Quartz Grey", "Rose",
            "Shamrock Green", "Terra Cotta", "Ultramarine",
            "Veridian", "Wheat", "Xanthic", 
            "Yankees Blue", "Zomp"
        ],
        "hex": [
            "00FFFF", "3D2B1F", "DC143C",
            "FED85D", "50C878", "F64A8A",
            "DAA520", "F400A1", "00416A",
            "00A86B", "4CBB17", "9acd32",
            "F8F4FF", "FFDEAD", "DA70D6",
            "DD00FF", "6C6961", "FF007F",
            "009E60", "E2725B", "120A8F",
            "339966", "F5DEB3", "EDED09",
            "1C2841", "39A78E"
        ]
    };
    ////////////////////////////////////////////// 
    ///////////////  Utilities   ///////////////// 
    ///////////////  Utilities   ///////////////// 
    ///////////////  Utilities   ///////////////// 
    ////////////////////////////////////////////// 
    // Append To <= Item To Be Appended
    const appender = function(appendTo, toBeAppended){
        appendTo.append(toBeAppended); 
    };
    // New Element
    const newElement = function(tagName, attName, attVaule, elText = ""){
        let element = document.createElement(tagName);
        element.setAttribute(attName, attVaule);
        let text = document.createTextNode(elText);
        appender(element, text);
        return element;
    };
    // Get Element By ( ID )
    const getElementId = function(id){
        let getId = document.getElementById(id);
        return getId;
    };
    ////////////////////////////////////////////// 
    ///////////   Layout Utilities    ////////////
    ////////////////////////////////////////////// 
    // New Title Container
    const newTitleContainer = function(){
        let titleContainer = newElement("div", "id", "titleContainer");
        return titleContainer;
    };
    // New Title
    const newTitle = function() {
        let title = newElement("h1", "class", "title", "COLOR ABC's");
        return title;
    };
    // New Letters Container
    const newLettersContainer = function(){
        let lettersContainer = newElement("div", "id", "lettersContainer");
        return lettersContainer;
    };
    // New Refresh Button
    const newRefreshButton = function(){
        let button = newElement("button", "id", "refresh", "Refresh");
        return button;
    };
    ////////////////////////////////////////////// 
    ///////////////  Layout   ///////////////// 
    ///////////////  Layout   ///////////////// 
    ///////////////  Layout   ///////////////// 
    //////////////////////////////////////////////
    // Title Container
    const titleContainer = newTitleContainer();
    // Title
    const title = newTitle();
    // Letters Container
    const lettersContainer = newLettersContainer();
    // Refresh Button
    const refresh = newRefreshButton();
    ////////////////////////////////////////////// 
    ///////////////  Append Layout   ///////////////// 
    //////////////////////////////////////////////
    // Append Title Container To Application
    appender(application, titleContainer);
    // Append Title To Title Container
    appender(titleContainer, title);
    // Append Letters Container To Application
    appender(application, lettersContainer);
    // Append Refresh Button To Application
    appender(application, refresh);
    ////////////////////////////////////////////// 
    ///////////////  Cards Container   ///////////////// 
    ///////////////  Cards Container   ///////////////// 
    ////////////////////////////////////////////// 
    // Empty Cards Container
    const emptyCardsContainer = function() {
        while(getElementId("lettersContainer").firstChild) {
            lettersContainer.removeChild(lettersContainer.firstChild);
        }
        // or
        // cardsContainer.innerHTML = "";
    }
    ////////////////////////////////////////////// 
    ///////////////  Create Card   ///////////////// 
    ///////////////  Create Card   ///////////////// 
    ////////////////////////////////////////////// 
    const newCard = function(letter){
        let newCard = newElement("div", "class", "card");
        return newCard;
    };
    //////////////////////////////////////////////// 
    ///////////////  Get Letters   ///////////////// 
    ///////////////  Get Letters   ///////////////// 
    ///////////////  Get Letters   ///////////////// 
    //////////////////////////////////////////////
    const getLetters = function(){
        emptyCardsContainer();
        let letters = alphabet;
        letters.forEach(function(letter){
            let card = newCard();
            let cardLetter = newElement("h2", "id", letter, "Press " + letter.toUpperCase());
            cardLetter.classList.add("letter");
            appender(card, cardLetter);
            appender(lettersContainer, card);
        });
    };
    getLetters();
    ///////////////////////////////////////////////
    ////////////// Gets Letter By Id //////////////
    ////////////// Gets Letter By Id //////////////
    ///////////////////////////////////////////////
    const getLetterId = function(letId){
        let letter = document.getElementById(letId);
        return letter;
    };
    ///////////////////////////////////////////////
    ////////// Creates the New Card Layout //////////
    //////////          On Click           //////////
    ///////////////////////////////////////////////
    const newCardLayout = function(letter, color){
        let card = letter.parentElement;
        card.style.transitionTimingFunction = "ease";
        card.style.transition = "0.2s";
        card.style.transform = "translateY(10%)";
        card.style.backgroundColor = "#" + color;
        card.style.width = "30%";
        card.style.fontSize = "80%";
        card.style.marginRight = "10px";
        card.style.position = "ablsolute";
        card.style.zIndex = "2";
        letter.style.lineHeight = "25px";
        letter.style.paddingTop = "20px";
        // return card;
    };
    ///////////////////////////////////////////////
    ////////// Loop through colors.name  //////////
    //////////      Get New Color        //////////
    ///////////////////////////////////////////////
    const getNewColor = function(inLetter, newArray){
        let theColors = colors.name;
        theColors.forEach(function(color){
            if(color.charAt(0) === inLetter){
                console.log("Success " + inLetter + " is " + color);
                newArray.push(color);
            } else {
                console.log("Fail" + " " + color + " and " + inLetter);
            };
            return newArray;
        });
    };
    ///////////////////////////////////////////////
    //////////  Loop through colors.hex  //////////
    //////////     Get New Hex Color     ////////// 
    ///////////////////////////////////////////////
    const getNewHexColor = function(newColor, newArray,){
        let theHex = colors.hex;
        theHex.forEach(function(hex){
            if(newColor === "Aqua" && hex === "00FFFF"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Bistre" && hex === "3D2B1F"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Crimson" && hex === "DC143C"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Dandelion" && hex === "FED85D"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Emerald" && hex === "50C878"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "French Rose" && hex === "F64A8A"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Goldenrod" && hex === "DAA520"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Hollywood Cerise" && hex === "F400A1"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Indigo" && hex === "00416A"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Jade" && hex === "00A86B"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Kelly Green" && hex === "4CBB17"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Leoan" && hex === "9acd32"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Magnolia" && hex === "F8F4FF"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Navajo White" && hex === "FFDEAD"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Orchid" && hex === "DA70D6"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Psychedelic Purple" && hex === "DD00FF"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Quartz Grey" && hex === "6C6961"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Rose" && hex === "FF007F"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Shamrock Green" && hex === "009E60"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Terra Cotta" && hex === "E2725B"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Ultramarine" && hex === "120A8F"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Veridian" && hex === "339966"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Wheat" && hex === "F5DEB3"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Xanthic" && hex === "EDED09"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Yankees Blue" && hex === "1C2841"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else if(newColor === "Zomp" && hex === "39A78E"){
                console.log("Success " + newColor + " is " + hex);
                newArray.push(hex);
            } else {
                console.log("Fail" + " " + newColor + " and " + hex);
            };
            return newArray;
        });
    };
    ////////////////////////////////////////////// 
    ///////////////  Event Handlers  ///////////////// 
    ///////////////  Event Handlers  ///////////////// 
    ///////////////  Event Handlers  ///////////////// 
    //////////////////////////////////////////////
    ////////////// Mouse Click Handler ////////////// 
    ////////////// Mouse Click Handler ////////////// 
    const mouseClickHandler = function(letClicked, event){
        let letter = getLetterId(letClicked);
        letter.addEventListener(event, function(){
            let inLetter = letter.innerText.charAt(6);
            let newColor = [];
            let newHex = [];
            getNewColor(inLetter, newColor);
            let gotColor = newColor[0];
            console.log(gotColor);
            getNewHexColor(gotColor, newHex);
            let gotHex = newHex[0];
            console.log(gotHex);
            if(inLetter === gotColor.charAt(0)){
                console.log("Success " + letClicked);
                letter.innerHTML = inLetter + " " + "is for" + "<br /> " + gotColor;
                newCardLayout(letter, gotHex);
            } else if(letter.innerText === inLetter + " " + "is for" + " " + gotColor) {
                console.log("Fail " + letClicked);
            };
        })
    };
    //////////////////////////////////////////////
    ////////////// Keyboard Key Click Handler ////////////// 
    ////////////// Keyboard Key Click Handler //////////////
    //////////////////////////////////////////////
    const keyBoardKeyHandler = function(letClicked, event){
        let letter = getLetterId(letClicked);
        let doc = document;
        doc.addEventListener(event, function(event){
            let keyDown = event.key;
            let inLetter = letter.innerText.charAt(6);
            let newColor = [];
            let newHex = [];
            getNewColor(inLetter, newColor);
            let gotColor = newColor[0];
            console.log(gotColor);
            getNewHexColor(gotColor, newHex);
            let gotHex = newHex[0];
            console.log(gotHex);
            if(keyDown.toUpperCase() === inLetter){
                console.log("Success " + letClicked);
                letter.innerHTML = inLetter + " " + "is for" + "<br />" + gotColor;
                newCardLayout(letter, gotHex);
            } else if(letter.innerText === inLetter + " " + "is for" + " " + gotColor) {
                console.log("Fail " + letClicked);
            };
        })
    }
    ////////////////////////////////////////////// 
    ////// Handles All Letter Mouse Clicks //////// 
    ////// Handles All Letter Mouse Clicks //////// 
    ////////////////////////////////////////////// 
    const letterOnMouseClick = function(){
        let letters = alphabet;
        letters.forEach(function(letter){
            mouseClickHandler(letter, "click");
        });
    }
    letterOnMouseClick();
    ////////////////////////////////////////////// 
    ////// Handles All Letter Keyboard Clicks //////// 
    ////// Handles All Letter Keyboard Clicks //////// 
    //////////////////////////////////////////////
    const letterOnKeyBoardKeyClick = function(){
        let letters = alphabet;
        letters.forEach(function(letter){
            keyBoardKeyHandler(letter, "keydown");
        });
    }
    letterOnKeyBoardKeyClick();
    ////////////////////////////////////////////// 
    ////// Handles Refresh Button On Click //////// 
    ////// Handles Refresh Button On Click //////// 
    //////////////////////////////////////////////
    const refreshOnClick = function(){
        let button = getElementId("refresh");
        button.addEventListener("click", function(){
            location.reload();
        });
    };
    refreshOnClick();
    
})();