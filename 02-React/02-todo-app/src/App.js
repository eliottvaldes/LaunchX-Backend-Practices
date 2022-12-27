import './App.scss';
// import components
import Container from './components/Container'
import FormTodo from './components/FormTodo'
import TaskList from './components/TaskList'


function App() {
  return (
    <div className="App">
      {/* Implement container Component */}
      <Container>
        <FormTodo/>
        <TaskList/>
      </Container>

    </div>
  );
}

export default App;
