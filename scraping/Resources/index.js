const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs").promises;
const { URL } = require("url");
const path = require("path");
require("dotenv").config();

class WebScraper {
  constructor(baseUrl, outputFile = "Scraping/Resources/results.txt") {
    this.baseUrl = baseUrl;
    this.outputFile = outputFile;
    this.visitedUrls = new Set();
  }

  async scrapeRecursive(url) {
    try {
      // Normalize URL and check if already visited
      const normalizedUrl = new URL(url, this.baseUrl).toString();
      if (this.visitedUrls.has(normalizedUrl)) {
        return;
      }
      this.visitedUrls.add(normalizedUrl);

      // Add delay to be respectful to the server
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Make request
      const response = await axios.get(normalizedUrl, { timeout: 50000 });
      const $ = cheerio.load(response.data);

      // Process all links
      const promises = $("a")
        .map(async (_, element) => {
          const href = $(element).attr("href");
          if (!href) {
            return;
          }

          if (href === "README") {
            await this.processReadme(normalizedUrl, href);
          } else if (
            href !== "../" &&
            !href.startsWith("../") &&
            !href.startsWith("/")
          ) {
            await this.scrapeRecursive(new URL(href, normalizedUrl).toString());
          }
        })
        .get();

      await Promise.all(promises);
    } catch (error) {
      console.error(`Error scraping ${url}: ${error.message}`);
    }
  }

  async processReadme(baseUrl, readmePath) {
    try {
      const fullUrl = new URL(readmePath, baseUrl).toString();
      const response = await axios.get(fullUrl, { timeout: 50000 });

      const keywords = ["flag", "FLAG", "password", "PASSWORD"];
      if (keywords.some((keyword) => response.data.includes(keyword))) {
        console.log(`Found keywords in: ${fullUrl}`);
        await fs.appendFile(
          this.outputFile,
          `\n--- ${fullUrl} ---\n${response.data}\n`,
          "utf8"
        );
        process.exit();
      }
    } catch (error) {
      console.error(`Error processing README at ${fullUrl}: ${error.message}`);
    }
  }
}

// Usage
async function main() {
  const baseUrl = `${process.env.URL_BASE}/.hidden/`;
  const scraper = new WebScraper(baseUrl);
  await scraper.scrapeRecursive(baseUrl);
}

main().catch(console.error);
