import MyForm from "./components/form";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto flex justify-center items-center h-full flex-col">
        <div>
          <h1 className="font-sa text-5xl">Hex Ocean reqruitment task</h1>
          <p className="mb-16 italic text-right ">Kamil Kiliasiński</p>
        </div>
        <MyForm />
      </div>
    </div>
  );
}

export default App;
