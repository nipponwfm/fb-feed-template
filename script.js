const $likeBtn = document.querySelectorAll(".like");
const $likeBtn_reactContainer = document.querySelectorAll(".react-container")
const $moreOptions = document.querySelector(".more-options .icon")
const $moreOptionsBtn = document.querySelectorAll(".more-options .icon")
const $moreOptionsBtn_optionsContainer = document.querySelectorAll(".options-container")
var showReactsContainer = false
var showOptionsContainer = false
var callingSetTimeOut = false

const {log} = console

$likeBtn.forEach((btn, index) => {
    btn.addEventListener("mouseover", () => {
        $likeBtn_reactContainer[index].style.visibility = "visible"
        showReactsContainer = true
    })
    btn.addEventListener("mouseout", () => {
        showReactsContainer = false
        callingSetTimeOut = true
        if (callingSetTimeOut) {
            callingSetTimeOut = false
            setTimeout(() => {
                if (!showReactsContainer) $likeBtn_reactContainer[index].style.visibility = "hidden"
                callingSetTimeOut = true
            }, 2000)
        }
    })
})

$likeBtn_reactContainer.forEach((container) => {
    container.addEventListener("mouseout", () => {
        container.style.visibility = "hidden"
    })
})

const hideOptionContainer = () => {
    $moreOptionsBtn.forEach((option, index) => {
        showOptionsContainer = false
        $moreOptionsBtn_optionsContainer[index].style.visibility = "hidden"
    })
}

$moreOptionsBtn.forEach((option, index) => {
    option.addEventListener("click", () => {
        if (showOptionsContainer) hideOptionContainer()
        showOptionsContainer = !showOptionsContainer;
        $moreOptionsBtn_optionsContainer[index].style.visibility = showOptionsContainer ? "visible" : "hidden"
    })
})

document.addEventListener("click", (e) => {
    if (showOptionsContainer && String(e.target) != String($moreOptions)) hideOptionContainer()
})