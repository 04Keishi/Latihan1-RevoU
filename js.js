function replaceName() {
let name = prompt ("Halo, siapakah nama anda?", "")
document.getElementById("name").innerHTML = name
}

document.getElementById("tombol").addEventListener("click", function() {
    replaceName();
})