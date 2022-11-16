import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col gap-8 xl:w-6/12">
        <TypeAnimation
          sequence={[
            "Que",
            1000,
            "Qué",
            1000,
            "Qué onda!",
            2000,
            "Hi",
            1200,
            "Hi there!",
          ]}
          cursor={true}
          className="text-xl font-semibold xl:text-3xl"
          speed={10}
          deletionSpeed={2}
        />
        <h1 className="text-lg xl:text-2xl">
          My name is Gabriel Acosta (gabox).
        </h1>
        <p className="text-md xl:text-lg">
          I'm a Software Developer from Catamarca, Argentina.
        </p>
        <p className="text-md xl:text-lg">
          I'm currently working at{" "}
          <a className="text-indigo-600 hover:underline" href="#">
            Satellogic
          </a>{" "}
          building software for satellites with Python.
        </p>
        <p className="text-md xl:text-lg">
          I am the creator of{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Pireal
          </a>
          , a free and open source tool for working with Relational Algebra. I
          have also dedicated much of my time to the development of{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            NINJA-IDE
          </a>
          .
        </p>
        <p className="text-md xl:text-xl">
          Most of my work is open source and publicly available on GitHub.
        </p>
        <div className="mt-10">
          <ul className="flex gap-6 text-xs">
            <li className="text-gray-800 hover:underline">
              <a href="https://github.com/centaurialpha">GitHub</a>
            </li>
            <li className="text-[#1DA1F2] hover:underline">
              <a href="https://twitter.com/_alfacentauri">Twitter</a>
            </li>
            <li className="text-[#bc2a8d] hover:underline">
              <a href="https://instagram.com/coder.ga">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
