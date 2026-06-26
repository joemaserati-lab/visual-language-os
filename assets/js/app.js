import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";

import "@fontsource/redaction/400.css";
import "@fontsource/redaction-10/400.css";
import "@fontsource/redaction-20/400.css";
import "@fontsource/redaction-35/400.css";

const needsPixelStates = document.querySelector(
  "[data-progressive-recognition], .font-50, .font-70, .font-100"
);

if (needsPixelStates) {
  Promise.all([
    import("@fontsource/redaction-50/400.css"),
    import("@fontsource/redaction-70/400.css"),
    import("@fontsource/redaction-100/400.css")
  ]).catch(() => {
    document.documentElement.dataset.pixelFonts = "fallback";
  });
}

import "./main.js";
