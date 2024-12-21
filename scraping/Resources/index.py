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
						exit()

			elif (final_link != "../"):
				scrapping_recursive(url + final_link)
		f.close()

url = "http://10.11.100.150/.hidden/"
scrapping_recursive(url)