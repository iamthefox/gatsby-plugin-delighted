# gatsby-plugin-delighted

Easily add Delighted NPS widget to your Gatsby site.

## Install

`npm install --save gatsby-plugin-delighted`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-delighted`,
      options: {
        organisationKey: "YOUR_ORGANISATION_UNIQUE_ID"
      }
    }
  ]
};
```

If you want to create surveys, you simply invoke delighted as normal - 

```javascript
delighted.survey({
    email: "customer@hemandstitch.com", // customer email (optional)
    name: "Bailey Dixon",               // customer name (optional)
    createdAt: "2019-01-01T12:00:00Z",  // time subscribed (optional)
    properties: {                       // extra context (optional)
      plan: "Medium",
      company: "Hem & Stitch"
    }
});
```

For advanced options, please [read the full API documentation](https://delighted.com/docs/api/web).

## Special Thanks

* [Skrilla](https://skrilla.com) for letting me publish this code written during work hours :)
