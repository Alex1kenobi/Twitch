import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Demo2 } from "./pages/demo2";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { UserProfile } from "./pages/user-profile";
import { Interview } from "./pages/interview";
import { QuestionList } from "./pages/question-list";
import { InterviewerProfile } from "./pages/interviewer-profile"


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Demo2/>} path="/demo2"/>
                        <Route element={<Login/>} path="/login"/>
                        <Route element={<QuestionList/>} path="/question-list"/>
                        <Route element={<Interview/>} path="/entrevistas"/>
                        <Route element={<InterviewerProfile/>} path="/entrevistas/:id/:name"/> {/* Este name es el que se relaciona con el Useparams */}
                        <Route element={<UserProfile />} path="/user-profile" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
