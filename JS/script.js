function encrypt() {
  var input = document.getElementById("input").value;
  var password = document.getElementById("password").value;

  // Verifica si el input y la contraseña no están en blanco
  if (input !== "" && password !== "") {
    var ciphertext = CryptoJS.AES.encrypt(input, password).toString();
    ciphertext = "JUSEAN" + ciphertext + ".jsn"; // agrega "JUSEAN" al principio y ".jsn" al final
    document.getElementById("output").value = ciphertext;
  } else {
    alert("Por favor, ingrese texto y una key.");
  }
}

function decrypt() {
  var ciphertext = document.getElementById("input").value;
  var password = document.getElementById("password").value;

  // Verifica si el input y la contraseña no están en blanco
  if (ciphertext !== "" && password !== "") {
    // Remueve "JUSEAN" al principio y ".jsn" al final antes de desencriptar
    var bytes = CryptoJS.AES.decrypt(ciphertext.slice(6, -4), password);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("output").value = plaintext;
  } else {
    alert("Por favor, ingrese texto cifrado y una key.");
  }
}

function limpiarFormulario() {
  document.getElementById("input").value = "";
  document.getElementById("password").value = "";
  document.getElementById("output").value = "";
}
