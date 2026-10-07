# BrightSteps
Frontend-only React (Vite) landing page.

    npm install
    npm run dev

Add photos: public/images/hero.jpg (portrait, 4:5) and public/images/maya.jpg (landscape, 4:3).
Use real, licensed photos (e.g. Unsplash/Pexels) of children learning. Donation flow is a demo; no payments.

## Photos
The page now loads two free Unsplash photos by URL (needs internet). If a URL fails, the built-in illustration shows instead.
To use your own, edit the `IMG` object at the top of src/App.jsx.

## More about photos
The page ships with built-in illustrations. Real photos override them automatically when present.
Free, licence-friendly sources: unsplash.com (free "Unsplash License" photos, not "Unsplash+"), pexels.com.
Example free photo: https://unsplash.com/photos/group-of-childrens-sitting-on-ground-uaPaEM7MiQQ
Save as public/images/hero.jpg and maya.jpg. Credit the photographer in the footer if the licence asks.
