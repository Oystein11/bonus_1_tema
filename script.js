//Tema-endring
const theme_button = document.querySelector ("#theme_button_ID");

function theme_toggle () {
    const body = document.querySelector ("body");
    body.classList.toggle ("dark_mode");
    }

theme_button.addEventListener ("click", theme_toggle);

//Bilde-endring
const picture_button = document.querySelector ("#picture_button_ID");

function picture_toggle () {
    const image = document.getElementById ("picture_ID");

    if (image.src.match ("dark_mode.png")) {
        image.src = "light_mode.png";
    } else {
            image.src = "dark_mode.png";
        }
}

picture_button.addEventListener ("click", picture_toggle);