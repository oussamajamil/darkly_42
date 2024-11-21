# Path_Traversal

## flag
```
df2eb4ba34ed059a1e3e89ff4dfc13445f104a1a52295214def1c4fb1693a5c3 
```

## Discovery and Exploitation

1. Inspect the cookies and identify the `I_am_admin` cookie with the value `68934a3e9455fa72420237eb05902327`.

2. Decrypt the value using MD5 and observe that it translates to `false`.

3. Encrypt the value `true` using MD5, resulting in `b326b5062b2f0e69046810717534cb09`.

4. Modify the `I_am_admin` cookie value to `b326b5062b2f0e69046810717534cb09` and refresh the page.

## Why It Works

The application uses the `I_am_admin` cookie to determine the user's privileges. By changing the cookie value to the MD5 hash of `true`, you trick the application into granting admin access.
## Prevention

1. **Use Strong Hashing Algorithms**: Avoid using weak or reversible hashing algorithms like MD5 for security-related cookies. Instead, use stronger algorithms such as SHA-256 or bcrypt.
2. **Implement Proper Authentication and Authorization**: Ensure that your application has robust authentication and authorization mechanisms to verify user identities and permissions.
3. **Secure Cookies**: Always use secure cookies with the `HttpOnly` and `Secure` flags to prevent client-side access and ensure they are only transmitted over HTTPS.
4. **Regular Security Audits**: Regularly audit and test your application for security vulnerabilities to identify and fix potential issues before they can be exploited.
5. **Input Validation**: Validate and sanitize all user inputs to prevent injection attacks and other forms of exploitation.
6. **Least Privilege Principle**: Follow the principle of least privilege by granting users the minimum level of access necessary for their role.

