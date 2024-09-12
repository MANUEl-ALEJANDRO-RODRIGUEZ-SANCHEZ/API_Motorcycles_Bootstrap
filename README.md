
# 🏍️ Motorcycle Finder

Motorcycle Finder is an interactive website built with HTML, CSS, Bootstrap, and vanilla JavaScript, which allows users to search for detailed information about motorcycles of different makes and models. This project harnesses the power of APIs to obtain accurate and up-to-date data about each motorcycle, including its power, weight, dimensions, and much more. Additionally, the site displays relevant images using a custom search engine.

## 🚀 Features

- **Precise search:** Enter the make and model of the motorcycle for detailed information.
- **Real-time data:** Thanks to the integration with a motorcycle API, the data displayed is always up to date.
- **Relevant images:** The images of the motorcycles are obtained automatically through a custom search engine, similar to a Google API.
- **Friendly interface:** Simple and elegant design, easy to use for any user, with responsive layouts thanks to **Bootstrap**.
- **Asynchrony:** Use of asynchronous requests in JavaScript for a fluid and fast user experience.
- **Comments system:** Allows users to leave comments on the site, using `fetch` to interact with a **JSON file** where comments are stored.

## 🛠️ Technologies Used

- **HTML5:** Basic structure of the web page.
- **CSS3:** Visual styles, including animations.
- **Bootstrap:** Provides responsive design and UI components.
- **JavaScript:** Search engine logic, API request management and asynchrony control.
- **APIs:**
  - **Motorcycle API:** Provides detailed data for each motorcycle.
  - **Custom Search:** Used to obtain relevant images of motorcycles.

## 📄 Usage

### Search for a motorcycle:
- In the search bar, enter the make and model of the motorcycle you want to consult.
- Press the search button.

### See results:
- The page will show the technical details of the motorcycle, including horsepower, weight, dimensions, among others.
- A relevant image of the motorcycle will also be displayed automatically.

### Add comments:
- Enter your comment in the designated field and submit it.
- Comments are stored and retrieved from a JSON file using fetch requests.

## 🔄 Internal Operation

This project is designed to demonstrate the use of asynchronous requests and API management in Vanilla JavaScript. Here's a more technical look at how it works:

- **Fetch API:** Used to make requests to the motorcycle API and obtain the necessary data, as well as to manage the comments system.
- **Promises and Async/Await:** The request logic is handled using promises, which ensures that the page does not freeze while waiting for data from the API.
- **Error Handling:** The code is prepared to handle common errors, such as network problems or invalid API responses.
- **Dynamic Rendering:** Search results and comments are dynamically rendered on the page by manipulating the DOM.

## 📧 Contact

If you have any questions or suggestions, do not hesitate to contact me:
- **Email:** manuel.rodriguez9120@alumnos.udg.mx
- **GitHub:** [MANUEl-ALEJANDRO-RODRIGUEZ-SANCHEZ](https://github.com/MANUEl-ALEJANDRO-RODRIGUEZ-SANCHEZ)

## Author

Manuel Rodríguez
