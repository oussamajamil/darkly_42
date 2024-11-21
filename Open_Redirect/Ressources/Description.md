# Open Redirect

## Flag
```
b9e775a0291fed784a2d9680fcfad7edd6b8cdf87648da647aaf4bba288bcab3
```

## Discovery and Exploitation

1. Navigate to the website's **Home** page.
2. Right-click and inspect the page's HTML source code.
3. Locate the **facebook** social media link in the footer.
4. Examine the URL structure and notice the `redirect` parameter:
    ```
    ?page=redirect&site=facebook
    ```
5. Modify the `redirect` parameter to point to an external website:
    ```
    ?page=redirect&site=https://www.google.com
    ```
6. The page successfully redirects to Google, revealing the vulnerability.
7. The flag appears in the redirected URL.

## Why It Works

The application accepts user input in the `site` parameter without proper validation. When processing the redirect, it blindly forwards users to whatever URL is provided, enabling attackers to redirect users to malicious websites.

## Prevention

1. Implement strict URL validation:
   - Whitelist allowed domains
   - Use relative URLs when possible
   - Validate URL format and structure

2. Add safety measures:
   - Implement warning pages for external redirects
   - Use signed URLs for necessary external redirects
   - Keep redirect URLs in server-side configuration

