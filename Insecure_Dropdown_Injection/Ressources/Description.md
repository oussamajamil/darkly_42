# Insecure Dropdown Injection

## flag

```
03a944b434d5baff05f46c4bede5792551a2595574bcafc9a6e25f67c382ccaa
```

## Discovery and Exploitation

1. Navigate to the **Survey** page that contains a feedback form.
2. Inspect the dropdown menu for **Grade** using browser dev tools.
3. Notice the dropdown values are directly used without validation.
4. Modify one of the option values to inject a malicious value.
5. Submit the form with the altered value to trigger the vulnerability.

## Why it works

The application fails to validate dropdown values on the server side, assuming that users can only select predefined values. This allows attackers to inject arbitrary values through the dropdown, potentially leading to SQL injection or other attacks.

## Prevention

1. **Server-Side Validation**: Always validate user inputs on the server side to prevent injection attacks and other forms of exploitation.
