import inquirer from "inquirer";
import qr from 'qr-image'
import fs from 'fs'
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([{ message: "Enter a URL", name: "URL" }])
  .then((answers) => {
    const Url = answers.URL;
    var qr_svg = qr.image(Url);
    qr_svg.pipe(fs.createWriteStream("qr-code.png"));

    fs.writeFile("URL.txt",url,(error)=>{
        if (error) throw error;
        console.log("The file has been changed!")
    })
  })
  .catch((error) => {});
