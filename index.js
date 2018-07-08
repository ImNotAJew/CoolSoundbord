var audioName = ["Lil Pump", "David Lachen 1", "asd", "ass", "assd"];
var buttons = [];
var timeout;

/**
// Updates the css Icons -> Gets called Onclick
function changeIcon(id, wanted)
{
    // If the input is wrong end the function
    if (wanted.length == 2)
    {
        // Initialize the Button
        var cssButton = document.getElementById(id);

        // Repeat with every item in the list
        for (i = 0; i < wanted.length; i++)
        {
            // Remove icon and spaces from classname, to only have the icon name
            var tempClass = cssButton.getAttribute("class");
            tempClass = tempClass.replace("icon", "");
            tempClass = tempClass.replace(" ", "");

            // Check if class is not the same
            if (tempClass != wanted[i])
            {
                // Set the new css Style
                cssButton.setAttribute("class", wanted[i] + " icon");
                // Ends the loop if done
                return;
            }
        }
    }
}
*/

// Adds the Buttons -> Gets Called Onload
function addButtons ()
{
    // Initialize the buttonWrapper
    var buttonWrapper = document.getElementById("buttonWrapper");
    // Update the Button Variable / List
    for (i = 0; i < audioName.length; i++)
    {
        var tagName = audioName[i];
        tagName = tagName.replace(" ", "");
        tagName = tagName.replace(",", "");
        buttons.push("<button id='" + tagName + i + "' class='audioButtons' onclick='playAudio(" + '"' + audioName[i] + '"' + "); setActive(" + '"' + tagName + i + '"' + ");" + "'" + ">" + audioName[i] + "</button>");
    }

    // Add the Buttons
    buttonWrapper.innerHTML = buttons.join("");
}


// Plays Audio
function playAudio (audioFile)
{
    // Initialize the audioManager
    var audio = document.getElementById("audio");
    var slider = document.getElementById("volumeSlider");

    audio.volume = slider.value / 100;

    // Check if audio exists
    if (audio != null)
    {
        // Delete Spaces and commas
        while (audioFile.includes(" ") || audioFile.includes(",") || audioFile.includes("(") || audioFile.includes(")"))
        {
            audioFile = audioFile.replace(" ", "");
            audioFile = audioFile.replace(",", "");
            audioFile = audioFile.replace("(", "");
            audioFile = audioFile.replace(")", "");
        }

        // Pause the audio
        audio.pause();
        // set the new src
        audio.innerHTML = "<source " + "src=" + "audio/" + audioFile + ".mp3>";
        // Load new Audio
        audio.load();
        //Play new Audio
        audio.play();
    }
}


// Resets Button Color Onloadedmetadata -> Set Normal Button Color
function audioTimeout ()
{
    var audio = document.getElementById("audio");

    clearTimeout(timeout);

    timeout = setTimeout(function () {
        var audioButtons = document.getElementsByClassName("audioButtons");

        for (i = 0; i < audioButtons.length; i++)
        {
            audioButtons[i].removeAttribute("pressed")
        }
    }, audio.duration * 1000);

}


// Sets the audio volume
function setVolume ()
{
    // Initialize the slider
    var slider = document.getElementById("volumeSlider");
    // Set the audio Volume
    audio.volume = slider.value / 100;
}


// Search For Audio
function searchButtons ()
{
    // Initialize the buttonWrapper
    var buttonWrapper = document.getElementById("buttonWrapper");
    // Initialite the searchField
    var searchField = document.getElementById("searchField");
    // Initialize the new Button Array
    var newButtons = [];

    // Update the Button Variable / List
    for (i = 0; i < buttons.length; i++)
    {
        // look if the result matches
        if (audioName[i].toLowerCase().includes(searchField.value.toLowerCase()))
        {
            // Update the variable
            newButtons[i] = buttons[i];
        }
    }
    
    // Add the Buttons
    buttonWrapper.innerHTML = newButtons.join("");
}


// Set the website Theme
function changeTheme ()
{
    if (document.getElementById("icon_theme").getAttribute("class").includes("eye-solid3"))
    {
        document.getElementById("icon_theme").setAttribute("class", "eye" + " icon");
        setDarkTheme();
    }
    else
    {
        document.getElementById("icon_theme").setAttribute("class", "eye-solid3" + " icon");
        setWhiteTheme();
    }
}


// Set Dark Theme
function setDarkTheme ()
{
    document.documentElement.style.setProperty("--Background", "#121212");
    document.documentElement.style.setProperty("--ButtonBackground", "#1A1A1A");
    document.documentElement.style.setProperty("--ButtonFont", "#FFFFFF");
    document.documentElement.style.setProperty("--SecondaryButtonFont", "#FFFFFF");
    document.documentElement.style.setProperty("--HeaderBackground", "#1A1A1A");
    document.documentElement.style.setProperty("--ButtonBackground2", "#1C1C1C");
    document.documentElement.style.setProperty("--ImageUrl", "url('images/ChangeColor2.png')");
    document.documentElement.style.setProperty("--HeaderButtonColor", "#121212");
    document.documentElement.style.setProperty("--HeaderButtonColorHover", "#232323");
    document.documentElement.style.setProperty("--SecondaryColor", "#311B92");
    document.cookie = "dark";  
}


// Set Dark Theme
function setWhiteTheme ()
{
    // Change css color variables
    document.documentElement.style.setProperty("--Background", "#FAFAFA");
    document.documentElement.style.setProperty("--ButtonBackground", "#F5F5F5");
    document.documentElement.style.setProperty("--ButtonFont", "#000000");
    document.documentElement.style.setProperty("--SecondaryButtonFont", "#FFFFFF");
    document.documentElement.style.setProperty("--HeaderBackground", "#FFFFFF");
    document.documentElement.style.setProperty("--ButtonBackground2", "#DCDCDC");
    document.documentElement.style.setProperty("--ImageUrl", "url('images/ChangeColor.png')");
    document.documentElement.style.setProperty("--HeaderButtonColor", "#F5F5F5");
    document.documentElement.style.setProperty("--HeaderButtonColorHover", "#EEEEEE");
    document.documentElement.style.setProperty("--SecondaryColor", "#311B92");
    document.cookie = "white";    
}


// Gets called onload
function onload ()
{        
    addButtons();

    if (document.cookie == "white")
    {
        document.getElementById("icon_theme").setAttribute("class", "eye-solid3" + " icon");
        setWhiteTheme();
    }
    else
    {
        document.getElementById("icon_theme").setAttribute("class", "eye" + " icon");
        setDarkTheme();
    }
}


// Set Button Color
function setActive (buttonid)
{
    var audioButtons = document.getElementsByClassName("audioButtons");

    for (i = 0; i < audioButtons.length; i++)
    {
        audioButtons[i].removeAttribute("pressed")
    }

    var activeButton = document.getElementById(buttonid);
    activeButton.setAttribute("pressed", "true");
}