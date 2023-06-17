

const carouselText = [
    { text: "A Full Stack Developer 👨‍💻", color: "#E38445" },
    { text: "A Web Designer 👨‍🎨", color: "#E38495" },
    { text: "An AI Enthusiast 🤖", color: "orange" },
    { text: "A Photographer 📸", color: "yellow" },
];

carousel(carouselText, "feature-text");

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.getElementById(eleRef).appendChild(
            document.createTextNode(letters[i])
        );
        i++;
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = document.getElementById(eleRef);
    const letters = sentence.innerHTML.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById(eleRef).innerHTML = letters.join("");
    }
}

async function carousel(carouselList, eleRef) {
    let i = 0;
    while (true) {
        updateFontColor(eleRef, carouselList[i].color);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
            i = 0;
        }
    }
}

function updateFontColor(eleRef, color) {
    document.getElementById(eleRef).style.color = color;
}

function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
