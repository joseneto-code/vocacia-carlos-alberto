from PIL import Image
import sys

path = r"public/images/dr-carlos-alberto.png"
try:
    img = Image.open(path)
except Exception as e:
    print('ERROR opening image:', e)
    sys.exit(1)

w, h = img.size
new_h = int(h * 0.92)  # crop bottom 8%
if new_h <= 0:
    print('Calculated new height invalid:', new_h)
    sys.exit(1)

cropped = img.crop((0, 0, w, new_h))
# Save with same format
try:
    cropped.save(path)
    print('Saved cropped image:', path)
except Exception as e:
    print('ERROR saving image:', e)
    sys.exit(1)
