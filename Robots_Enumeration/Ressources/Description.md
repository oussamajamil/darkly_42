# Robots.txt Enumeration

### Background
The robots.txt file is a standard used by websites to communicate with web crawlers about which parts of the site should not be accessed. However, this can inadvertently reveal sensitive directories.

### Descovery and Exploitation
1. Access `/robots.txt` to discover hidden paths:
    ```
    User-agent: *
    Disallow: /whatever
    Disallow: /.hidden
    ```

2. Visit `/whatever` directory, which reveals:
    ```
    ../
    htpasswd        -Jun-2021 18:09     38
    ```

3. Download and examine the `htpasswd` file content:
    ```
    root:437394baff5aa33daa618be47b75cb49
    ```

4. Decrypt the MD5 hash to obtain the admin password:
    - Use an online MD5 decryption tool
    - The hash resolves to a plain text password

5. Access `/admin` and authenticate:
    - Username: root
    - Password: qwerty123@

### Why it works
The robots.txt file, while intended to guide search engines, often exposes sensitive directories. When these directories contain authentication files like htpasswd, attackers can crack stored password hashes to gain unauthorized access.

### Prevention
1. Don't store sensitive files in publicly accessible directories
2. Use strong password hashing algorithms (bcrypt, Argon2) instead of MD5
3. Implement proper access controls and authentication mechanisms
4. Consider using security through obscurity as a supplementary, not primary, defense measure