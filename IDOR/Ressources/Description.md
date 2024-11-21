# IDOR 

**Insecure Direct Object Reference** (IDOR): This applies if the application uses the modified email value directly without properly verifying the request's legitimacy. Essentially, the application exposes a reference (email) that can be directly modified, allowing unauthorized access or actions.



## flag
```
1d4855f7337c0c14b6f44946872c4eb33853f40b2d54393fbe94f49f1e19bbb0
```

## Discovery and Exploitation

1. Opened the **Recover Password** page.  
2. Found a hidden input in the DOM:  
   ```html
   <input type="hidden" name="mail" value="webmaster@borntosec.com">
   ```  
3. Modified the email value and submitted the form.  
4. Password reset triggered for the new email without validation.  


## Prevention

- Implement proper authorization checks before processing requests
- Use indirect object references instead of direct IDs/emails
- Add server-side validation for all user inputs
- Use secure tokens to verify legitimate password reset requests
- Hash or encrypt sensitive data references
