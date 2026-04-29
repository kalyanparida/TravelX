function validateForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Name is required");
        return false;
    }
    return true;
}