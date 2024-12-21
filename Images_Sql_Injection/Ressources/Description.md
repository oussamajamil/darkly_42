# Sql Injection

## Flag

```
f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188
```

## Discovery and Exploitation

1. Navigate to the **MEMBERS** page.
2. To list all tables in the database, insert the following SQL query:
   ```sql
   true UNION SELECT table_name, column_name FROM information_schema.columns
   ```
3. To list all columns in the `users` table, insert the following SQL query:
   ```sql
   true UNION SELECT id, CONCAT(url, comment) FROM list_images
   ```
   > **Note:** The `CONCAT` function is used because there is a restriction that only two columns can be retrieved.
4. Follow the instructions for the image with url 5 to obtain the flag.

## Why it works

SQL injection works by manipulating the SQL query that is executed by the application. By inserting specially crafted input, an attacker can alter the query's logic, allowing them to access or manipulate data they shouldn't be able to. In this case, the `UNION` operator is used to combine the results of the original query with the results of a malicious query, effectively bypassing the application's intended behavior and exposing sensitive information.

## Prevention

1. **Use Prepared Statements**: Use prepared statements or parameterized queries to separate SQL code from user input. This prevents attackers from injecting SQL code into the query.

2. **Input Validation**: Validate and sanitize all user inputs to prevent SQL injection attacks. Ensure that user-supplied data is properly encoded and does not contain malicious content.

3. **Least Privilege Principle**: Ensure that database users have the minimum necessary permissions to perform their tasks. Avoid using highly privileged accounts for routine operations.

4. **Database Firewall**: Implement a database firewall to monitor and block SQL injection attempts. These tools can help detect and prevent attacks in real-time.

5. **Regular Security Audits**: Regularly audit and test your application for security vulnerabilities, including SQL injection, to identify and fix potential issues before they can be exploited.
