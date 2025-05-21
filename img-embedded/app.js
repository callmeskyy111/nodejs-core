import fs from "fs";

fs.readFile("images/shoes_salon.jpg", (err, data) => {
  if (err) {
    console.log("Error Opening Image-file 🔴:", err);
    return;
  }
  //console.log(data);

  //! Convert buffer to base64
  const base64Img = data.toString("base64");
  //console.log('\n✅ ENCODED DATA: ',base64Img);

  //! Construct img-URL from the base64
  const imgURL = `data:image/jpg;base64,${base64Img}`;
  //console.log(imgURL);

  //! Create HTML-content
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded Image in HTML</title>
    <style>
    body{
    text-align:center;
    margin:50px;
    }
    img{
    width:300px;
    border: 2px solid #0000;
    border-radius: 8px;
    }
    </style>
</head>
<body>
    <h1>Embedded Image in HTML</h1>
    <img src="${imgURL}" alt="shoes">
</body>
</html>
  `;
  // Create a html file
  fs.writeFile("index.html", htmlContent, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("HTML File created with IMAGE ✅");
  });
});
