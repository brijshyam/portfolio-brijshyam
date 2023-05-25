function typeEffect(element, textArray, delay = 300, pauseDuration = 2000, cursorDelay = 200) {
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let cursorVisible = true;
    let typingIntervalId = null;
    let cursorIntervalId = null;

    function type() {
        const currentText = textArray[arrayIndex];

        if (!isDeleting) {
            element.textContent = currentText.substr(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                cursorVisible = false;
                setTimeout(pause, pauseDuration);
            }
        } else {
            element.textContent = currentText.substr(0, charIndex);
            charIndex -= 3;

            if (charIndex < 0) {
                isDeleting = false;
                cursorVisible = true;
                arrayIndex++;

                if (arrayIndex === textArray.length) {
                    arrayIndex = 0;
                }
            }
        }
    }

    function blinkCursor() {
        if (cursorVisible) {
            // element.textContent = element.textContent.slice(0, -1);
            cursorVisible = false;
        } else {
            element.textContent += '|';
            cursorVisible = true;
        }
    }

    function pause() {
        clearInterval(typingIntervalId);
        clearInterval(cursorIntervalId);
        setTimeout(startTyping, delay);
    }

    function startTyping() {
        typingIntervalId = setInterval(type, delay);
        cursorIntervalId = setInterval(blinkCursor, cursorDelay);
    }

    startTyping();
}


var element = document.getElementById('typing-text');
var textArray = ['Full Stack Developer', 'Web Designer', "AI Enthusiast", 'Photographer'];

typeEffect(element, textArray);


