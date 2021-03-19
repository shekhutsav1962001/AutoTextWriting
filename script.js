const textEl = document.getElementById('text')
const text = `Hey there !  I'm Utsav Shekh !!!`
let index = 1
writeText()
function writeText() {
    textEl.innerText = text.slice(0, index)
    index++
    if (index > text.length) {
        index = 1
    }
    setTimeout(writeText, 250)
}
