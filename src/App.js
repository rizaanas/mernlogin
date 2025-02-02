// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { Form } from './components/Form';


// function App() {
//   return (
//     <div className="App">
//     <Form/>
//     </div>
//   );
// }

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Make sure this file exists
import { Form } from './components/Form';  // Ensure the Form is exported correctly

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

