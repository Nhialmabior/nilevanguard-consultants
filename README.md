# NileVanguard Consultants Website

A responsive, multi-page static website starter for NileVanguard Consultants.

## Design rules
- Flat colours only: no CSS gradients or gradient fills.
- Brand palette: navy `#102747`, blue `#1769AA`, gold `#D6B65D`, white and light grey.
- Responsive navigation and layouts.
- SVG logo and favicon included.

## Pages
Home, About, Services, Projects, Industries, Insights and Contact.

## Run locally
From this folder, run:

```bash
python -m http.server 5500
```

Open http://localhost:5500

## Contact configuration
Edit `js/config.js` and add the verified company email and WhatsApp number.
The current enquiry form prepares an email using the visitor's email application. It is not a hosted form backend.
Do not publish placeholder or invented contact details.

## Images
The website currently references Unsplash images by URL. Check current Unsplash licence terms and image availability before production launch. For reliability, download approved images and store them in `assets/images/`, then update the image paths.

## Deployment
This is a static website and can be deployed with GitHub Pages or Netlify.
