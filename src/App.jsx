import Header from "./components/Header";
import Container from "./components/HOC/Container";

const App = () => {
  return (
    <>
      <main className="bg-[#FAFAFA] dark:bg-[#171823] h-screen w-full">
        <Header />
        <Container />
      </main>
    </>
  );
};

export default App;
