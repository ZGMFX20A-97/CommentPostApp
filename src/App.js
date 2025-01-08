import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { CreatePost } from "./components/CreatePost";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { useState } from "react";

function App() {
	//認証状態を格納する状態変数
	//画面更新したら再度ログインしなくてもいいためにローカルストレージからに認証状態を設定する
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

	return (
		<BrowserRouter>
			<Navbar isAuth={isAuth} />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				></Route>
				<Route
					path="/createpost"
					element={<CreatePost isAuth={isAuth}/>}
				></Route>
				<Route
					path="/login"
					element={<Login setIsAuth={setIsAuth} />}
				></Route>
				<Route
					path="/logout"
					element={<Logout setIsAuth={setIsAuth} />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
