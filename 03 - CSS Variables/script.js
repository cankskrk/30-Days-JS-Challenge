const inputs = document.querySelectorAll(".controls input")

function handleUpdate() {
    const suffix = this.dataset.sizing || `` // dataset varsa onun değerini yoksa boş değeri alacak
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // CSS değerleri değiştirmek
}

inputs.forEach(input => input.addEventListener("change", handleUpdate)) // Hepsi icin addEventLstener olusturduk
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))