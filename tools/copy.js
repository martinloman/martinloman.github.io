let copyBtns = document.getElementsByClassName("copy-btn")

for (let i = 0; i < copyBtns.length; i++) {
  const btn = copyBtns[i]
  btn.addEventListener("click", (e) => {
    copyToClipBoard(e.target.previousSibling)
  })
}
