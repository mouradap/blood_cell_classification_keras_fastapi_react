import React, {useState} from 'react';
import './styles.css';
import api from "../services/api"

// Página principal do aplicativo

export default function Index() {


    // Criando estados para variáveis image (uploaded pelo usuário)
    // E classification, resposta do servidor.
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [classification, setClassification] = useState({ result: "" });

    // Função para upload do arquivo alterando o estado da image
    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };
  

    // Função para envio da imagem ao servidor

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image.raw)

        console.log(formData)
        for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
       
        const config = { headers: {
            'Content-Type': 'multipart/form-data'
            }
        }

        // Arquivo enviado ao servidor no corpo da requisição, como um multipart/form-data

        await api.post('/classify/', formData, config)
        .then((response) => {
            console.log(response);
            // A resposta do servidor altera o estado da variável classification
            setClassification({result: response.data})
        }, (error) => {
            console.log(error)
        })

        console.log(typeof(classification))
        
    }


    // HTML com JSX

    return (
        <>
    <div className="main">


        <title>
            Human Blood Cell Classifier
        </title>

        <div className='Title'>
            <br/>
            <br/>
            <h1>
                Human Blood Cell Classifier
            </h1>
        </div>


        <div className="upload">
        <label htmlFor="upload-button">
          {/* Se imagem: mostrar imagem */}
          {image.preview ? (
            <img src={image.preview} alt="dummy" width="300" height="300" />
          ) : (
            <>
              <h5 className="text-center">Upload your photo</h5>
            </>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <br />
        <button className='button' onClick={handleUpload}>Classify</button>


      </div>
        <div className='results'>
          {/* Se resposta do servidor: mostrar resultados */}
            {classification.result ? (
                <div className='showResults'>
                    <h1>
                        Image classification results:
                    </h1>
                    <h2>
                    <br/>
                        {`Our model has classified as more likely to be
                        ${JSON.parse(classification.result.classification).classification}
                        with ${JSON.parse(classification.result.classification).score} % percent confidence.`}
                    </h2>
                </div>
                ) : (
                <>
                </>
            )}
        </div>
    </div>
      </>
    )
}