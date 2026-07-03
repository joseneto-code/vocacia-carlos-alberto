from PIL import Image
import os

path = os.path.join(r'C:\Users\zblue\Documents\montana\LP - Dr Carlos Alberto\SITE\LANDING PAGE', 'public', 'images', 'dr-carlos-alberto.png')
img = Image.open(path)
width, height = img.size

# Crop a little extra from the bottom-right corner to remove the Gemini element.
# Preserve the subject by keeping the top and left edges, cropping 10% from the width
# and 5% from the height around the bottom-right where the watermark appears.
new_width = int(width * 0.95)
new_height = int(height * 0.95)

cropped = img.crop((0, 0, new_width, new_height))
cropped.save(path)
print('Cropped to', cropped.size)
