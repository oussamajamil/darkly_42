# Path_Traversal

## flag

```
b12c4b2cb8094750ae121a676269aa9e2872d07c06e429d25a63196ec1c8c1d0
```

## Discovery and Exploitation

1. First, observe that the website uses a `page` parameter in URLs to load different pages

   - Example: `http://192.168.11.103/index.php?page=survey`

2. Test for path traversal vulnerability by trying to access files outside web root

   - Add `../` sequences to attempt to traverse directories
   - Start with: `http://192.168.11.103/index.php?page=../`
   - Gradually increase: `http://192.168.11.103/index.php?page=../../`

3. Navigate to the `/etc/passwd` file using path traversal

   ```
   http://192.168.11.103/index.php?page=../../../../../../../etc/passwd
   ```

4. The page reveals the contents of the system's passwd file

   - This confirms the path traversal vulnerability
   - Sensitive system information is exposed

5. The flag appears after successfully accessing the passwd file

## Why It Works

1. The vulnerability exists because the application:

   - Directly includes files based on user input
   - Lacks proper input validation
   - Doesn't sanitize the `page` parameter
   - Allows `../` directory traversal sequences

2. The `../` sequence moves up one directory level
   - Multiple `../` sequences can reach root directory
   - From there, any system file can be accessed

## Prevention

1. Input Validation

   - Sanitize file path parameters
   - Remove or encode `../` sequences
   - Whitelist allowed pages/files

2. Security Controls

   - Use strictissions file perm
   - Configure proper web root boundaries
   - Implement access control lists

3. Best Practices
   - Store sensitive files outside web root
   - Use indirect file references
   - Apply principle of least privilege
