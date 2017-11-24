# Paso 1 - Preparar entorno y webpack

## Preparar entorno:

* Instalar yarn
  * **macOS**: `brew install yarn`
  * **Linux**:
    ```
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn
    ```

## Configuración de webpack

* Crear carpeta
  ```
  mkdir geekshubs-react
  cd geekshubs-react
  ```
* Iniciamos el proyecto con `yarn init`
* Crear fichero .editorconfig y le creamos la configuración para javascript
* Agregamos webpack a nuestro proyecto
  `yarn add webpack webpack-dev-server --dev`
* Agregamos el fichero de configuración de webpack para desarrollo y lo modificamos
  ```
  mkdir webpack
  cd webpack
  touch dev.config.js
  ```
* Agregamos las dependencias necesarias de babel

  `yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev`
* Creamos el fichero de configuración de babel **.babelrc** y le agregamos los presets **es2015**  y **react**

  `touch .babelrc`
* Creamos el fichero index.html y el fichero index.js
  ```
  mkdir src
  cd src
  touch index.js
  touch index.html
  ```

* Agregamos el HTML y un console.log al fichero index.js
* Agregamos el plugin de html a webpack
  `yarn add html-webpack-plugin`
* Modifamos la configuración de webpack para que utilice el plugin de html.
* Agregamos la configuración del script **start* al package.json
* Lanzamos `yarn start`
