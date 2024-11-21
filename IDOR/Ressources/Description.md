# IDOR 

**Insecure Direct Object Reference** (IDOR) occurs when an application uses user-supplied input to access objects directly without proper authorization checks. This can lead to unauthorized access or actions by manipulating the input values.

## Flag
```
1d4855f7337c0c14b6f44946872c4eb33853f40b2d54393fbe94f49f1e19bbb0
```

## Discovery and Exploitation

1. Open the **Recover Password** page.
2. Inspect the DOM to find hidden inputs:
   ```html
   <input type="hidden" name="mail" value="webmaster@borntosec.com">
   ```
3. Modify the email value and submit the form.

## Why It Works

IDOR works because the application does not properly validate user input, allowing attackers to manipulate object references and gain unauthorized access.

## Prevention

- Implement proper authorization checks before processing requests.
- Use indirect object references instead of direct IDs or emails.
- Add server-side validation for all user inputs.
- Use secure tokens to verify legitimate password reset requests.
- Hash or encrypt sensitive data references.
