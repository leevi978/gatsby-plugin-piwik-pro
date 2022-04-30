# gatsby-plugin-piwik-pro

This is a minimalistic Gatsby plugin that adds the Piwik Pro script tag into the Gatsby browser for you. All you need to do is provide the id and url of the site you are tracking.

## How to use

Install gatsby-plugin-piwik-pro using the npm command
`npm install gatsby-plugin-piwik-pro`

Then add gatsby-plugin-piwik-pro to the list of plugins in `gatsby-config.js`

```
// gatsby-config.js

...
plugins: [
        {
            resolve: "gatsby-plugin-piwik-pro",
            options: {
                siteUrl: "https://<YOUR-SITE>.containers.piwik.pro/",
                siteId: "<SITE-ID>",
                enabled: <BOOLEAN> // e.g. process.env.NODE_ENV === "production",
            },
        },

...
```
