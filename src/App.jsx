import Header from './components/Navbar';
import Timer from './components/Timer';

function App() {
  return (
  
    <div className="App block text-white dark:text-white font-poppins bg-oxford bg-cover bg-no-repeat h-screen">
      <Header/>
      <div className="flex justify-center items-center ">
      <div className="card h-[550px] w-[420px] rounded-[50px] backdrop-filter backdrop-blur-xl flex justify-center my-10 ">
      <Timer/>
      <Song className="items-center backdrop-filter backdrop-blur-xl "/>
      </div>
      </div>
    </div>
  );
}

export default App;
