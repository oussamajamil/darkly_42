# Sql Injection

## Flag

```
0fbb54bbf7d099713ca4be297e1bc7da0173d8b3c21c1811b916a3a86652724e
```

## Discovery and Exploitation

1. Go to the **feedback** page on the website.
2. In the **comment** field, enter the following script: `<script>alert(1)</script>`.
3. Click the **Submit** button to send the feedback form.

## Why It Works

The script works because the website does not properly sanitize user input. When the script is submitted, it is executed by the browser, leading to a Cross-Site Scripting (XSS) vulnerability.

## Prevention

To prevent such vulnerabilities, ensure that user input is properly sanitized and encoded before being rendered on the page. Use security libraries and frameworks that provide built-in protection against XSS attacks.
