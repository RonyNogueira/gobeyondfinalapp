import React from "react";
import { Routes } from "./routes/routes";
import {Footer, Header} from "./components";
import {QueryClientProvider, QueryClient} from "react-query";
const queryClient = new QueryClient()

function App() {
  return (
    <>
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <Header/>
                <Routes/>
            <Footer/>
        </QueryClientProvider>

    </>
  );
}

export default App;
