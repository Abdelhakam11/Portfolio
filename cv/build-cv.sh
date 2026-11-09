#!/usr/bin/env bash
# Regenerates the CV PDF from cv/abdelhakam_cv.html using headless Google Chrome.
# Usage: ./cv/build-cv.sh
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/abdelhakam_cv.pdf" "file://$PWD/cv/abdelhakam_cv.html"
cp public/abdelhakam_cv.pdf "abdelhakam_cv .pdf"
echo "Wrote public/abdelhakam_cv.pdf"
