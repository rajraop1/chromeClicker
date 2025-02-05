function clickVisibleButton() {
    const targetTexts = ["Approve All", "Continue", "Login"];

    // Get all possible buttons, links, and inputs
    const elements = [...document.querySelectorAll("button, input[type='button'], a")];

    // Filter only elements visible in the viewport
    const visibleButtons = elements.filter(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        return isVisible && targetTexts.some(text => el.innerText.trim() === text);
    });

    // Click the first matching button
    if (visibleButtons.length > 0) {
        visibleButtons[0].click();
        console.log(`✅ Clicked '${visibleButtons[0].innerText}' button.`);
    } else {
        console.log("❌ No target button found in viewport.");
    }
}

// Run automatically on page load
window.addEventListener("load", clickVisibleButton);
