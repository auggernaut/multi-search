# Jirence

Search both Jira and Confluence at the same time.

## Install

Due to cross-domain restrictions you'll need to install a Chrome extension to get this to work. For security reasons, this extension _only_ filters out the x-frame and csp headers  from requests to scribdjira.atlassian.net.

To install the extension
* Windows -> Extensions
* Toggle Developer Mode
* Load Unpacked Extension
* Select the ignoreXFrameHeaders dir


## Run

```
python -m SimpleHTTPServer 8005
```

Go to: http://localhost:8005
