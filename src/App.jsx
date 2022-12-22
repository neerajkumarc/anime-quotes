import Quotes from "animequotes";
import { useState } from "react";
import aq from "./assets/aq.png";
import { motion } from "framer-motion";

function App() {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [aname, setAname] = useState("");

  const handleClick = () => {
    const data = Quotes.randomQuote();
    setQuote(data.quote);
    setAname(data.anime);
    setName(data.name);
  };

  return (
    <div className="bg-[url('./assets/bg.gif')] w-screen h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
      <div className="flex justify-center items-center gap-24 flex-col backdrop-blur-[2px] h-screen w-screen p-8 bg-gradient-to-t from-black to-trasparent">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={aq}
          alt="aq"
        />
        {quote == "" ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-lg"
          >
            Get a random Quote{" "}
            <p className="text-2xl animate-bounce text-center py-4">👇</p>
          </motion.div>
        ) : (
          <div className="text-white">
            <p className="italic">Anime : {aname}</p>
            <p className="mb-8 italic">Character : {name}</p>
            <p className=" tracking-wider font-semibold w-[320px] h-[180px] p-4 overflow-scroll md:overflow-auto md:w-[520px] sm:no-scrollbar">
              <q> {` ${quote} `} </q>
            </p>
          </div>
        )}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={handleClick}
          className="bg-black border-2 border-white text-white text-2xl px-12 p-2 rounded-lg font-bold active:scale-[.95] animate-pulse"
        >
          {quote == "" ? `Get Quotes 🔥` : ` Next`}
        </motion.button>
        {quote == "" ? (
          <p className="text-[#575757] ">
            Developed with ❤ by{" "}
            <a
              className="underline italic font-semibold "
              href="https://neerajk.netlify.app"
              target="_blank "
            >
              Neerajkumar
            </a>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
