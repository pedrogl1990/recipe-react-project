import Recipe from "./sections/Recipe";

const App = () => {
  return (
    <main className="bg-stone-100 md:py-20 md:px-50 relative">
      <Recipe />
      <div className="w-full flex justify-center">
        <p className="text-xs absolute text-stone-600 text-center bottom-0">
          Challenge by{" "}
          <a className="font-bold text-brown-800" href="https://www.frontendmentor.io/" target="_blank">
            Frontend Mentor.{" "}
          </a>{" "}
          Coded by{" "}
          <a className="font-bold text-brown-800" href="https://github.com/pedrogl1990" target="_blank">
            Pedro Leite.
          </a>
        </p>
      </div>
    </main>
  );
};

export default App;
