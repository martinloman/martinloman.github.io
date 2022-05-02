function copyToClipBoard(elem) {
  var content = elem.innerHTML

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("Text copied to clipboard...", content)
    })
    .catch((err) => {
      console.log("Something went wrong", err)
    })
}

let copyBtns = document.getElementsByClassName("copy-btn")

for (let i = 0; i < copyBtns.length; i++) {
  const btn = copyBtns[i]
  btn.addEventListener("click", (e) => {
    copyToClipBoard(e.target.previousSibling)
  })
}
