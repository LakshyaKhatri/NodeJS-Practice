/*
================================================================================
 * Problem: Write a regex function to distinguish and pick the values of email
 *          address, phone number from the below paragraph
================================================================================
*/
let para = `Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor
            nec feugiat. Nunc aliquet bibendum enim facilisis gravida.
            mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec
            ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat
            maecenas volutpat blandit aliquam etiam erat velit scelerisque in.
            Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
            +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis.
            Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam
            donec adipiscing tristique risus nec feugiat in. Fusce
            (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel
            turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.`;

function phoneAndEmails(inptText) {
  let phoneRegex = /(?:(?:\+\d{1,2})|(?:\(\+\d{1,2}\)))?(-?)\d{5}\1\d{5}/g;
  let emailRegex = /(\w+\.?)*\w@(\w+\-?)*\w\.\w+/g;

  return {
    emails: [...para.matchAll(phoneRegex)].map((elem) => elem[0]),
    phoneNumbers: [...para.matchAll(phoneRegex)].map((elem) => elem[0])
  };
}

result = phoneAndEmails(para);
console.log(result.emails);
console.log(result.phoneNumbers);
