import SignPDF from "./SignPDF";
import fs from "node:fs";
import path from "node:path";
/*
here pdf lib is used i will be working on pdfkit 
to manipulate the signature placeholder to be visulaly appealing



*/
async function main() {
  const pdfBuffer = new SignPDF(
    path.resolve('test_assets/sample.pdf'),  //takes the input pdfs
    path.resolve('test_assets/keyStore.p12')  //the certificate in the form of .pfx or .p12
    //path.resolve('test_assets/icon.png')
  );

  const signedDocs = await pdfBuffer.signPDF();
  const randomNumber = Math.floor(Math.random() * 5000);
  const pdfName = `./exports/exported_file_${randomNumber}.pdf`; //exported file name can be changed if needed

  fs.writeFileSync(pdfName, signedDocs);
  console.log(`New Signed PDF created called: ${pdfName}`);
}

main();
