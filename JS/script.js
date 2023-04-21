function encrypt() {
  var input = document.getElementById("input").value;
  var password = document.getElementById("password").value;

  if (input !== "" && password !== "") {
    var ciphertext = CryptoJS.AES.encrypt(input, password).toString();
    document.getElementById("output").value = ciphertext;
  } else {
    alert("Por favor, ingrese texto y una key.");
  }
}

function decrypt() {
  var ciphertext = document.getElementById("input").value;
  var password = document.getElementById("password").value;

  if (ciphertext !== "" && password !== "") {
    var bytes = CryptoJS.AES.decrypt(ciphertext, password);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("output").value = plaintext;
  } else {
    alert("Por favor, ingrese texto cifrado y una key.");
  }
}

  