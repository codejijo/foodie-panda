import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/common/loading";
import Layout from "./components/Layout";
import { loggedIn, logout } from "./context/actions";
import { getUser } from "./context/selectors";
import { AppContext } from "./context/state";
import { auth, db } from "./firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [user, loading] = useAuthState(auth);
  const { state, dispatch } = useContext(AppContext);
  const userData = getUser(state);

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
        },
        { merge: true }
      );
      if (!userData) {
        const userSnap = getDoc(doc(db, "users", user.uid));
        userSnap.then(doc => doc.exists() && dispatch(loggedIn(doc.data())));
      }
    } else dispatch(logout())
  }, [user, userData, dispatch]);

  if (loading) return <Loading />
  if (!user) return <Login />;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
