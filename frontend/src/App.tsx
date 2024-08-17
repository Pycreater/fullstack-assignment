import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-1">
      <Header />
      <Hero onSearch={handleSearch} />
      <div className="flex-grow overflow-y-auto">
        <Main searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
