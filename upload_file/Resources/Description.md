# upload file and update content type

### Background

The `Content-Type` header is used to indicate the media type of the resource. This is important for the browser to know how to display the content. When a file is uploaded, the server may not properly validate the file type, allowing an attacker to upload a malicious file that can be executed on the server.

### Discovery and Exploitation

1. Upload a file with a malicious content type:

   - Use Burp Suite to intercept the request when uploading a file
   - Change the `Content-Type` header to `image/jpeg`
   - Forward the request to upload the file

2. Access the uploaded file:
   - The server may execute the file as an image, leading to code execution
   - For example, a PHP file can be uploaded with a `Content-Type` of `image/jpeg` and executed on the server

### Why it works

When the server does not properly validate the `Content-Type` header, it may treat the uploaded file as the specified media type. This can lead to code execution if the file contains malicious content, such as PHP code in an image file.

### Prevention

1. Validate the file type based on the file content, not just the `Content-Type` header

2. Limit file uploads to specific directories and disallow execution of uploaded files

3. Use a secure file upload library that enforces proper validation and security controls

4. Implement server-side checks to verify the file type and content before processing the upload

5. Regularly monitor and review uploaded files for malicious content and unusual behavior
