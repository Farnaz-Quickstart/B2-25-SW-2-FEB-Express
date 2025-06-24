import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListStudents from './components/ListStudents';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div className="App">

      <AddStudent />
      <ListStudents />
    </div>
  );
}

export default App;
