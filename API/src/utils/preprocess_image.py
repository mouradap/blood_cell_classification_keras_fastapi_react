####
#       Módulo para preprocessamento da imagem
####

# Utilizarei keras e o pillow para carregamento e preprocessamento

from keras.preprocessing import image
import numpy as np
from PIL import Image

def load_image(file):
    image = Image.open(file)
    return image

def preprocess_img(image):
    img = image.resize((80, 80))
    img = np.array(img, dtype="float32")
    img /= 255
    img = img.reshape(1, 80, 80, 3)

    return img