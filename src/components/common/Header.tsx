import { useContext, useState } from "react";
import { getUser } from "../../context/selectors";
import { AppContext } from "../../context/state";
import LogoFull from "../../assets/logo-name.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const Header = () => {
    const { state } = useContext(AppContext);
    const [profileOptn, setProfileOptn] = useState(false);
    const userData = getUser(state);

    return (
        <nav className="w-full h-16 md:h-20 flex bg-pri-black">
            <div className="w-4/5 h-full flex">
                <div className="w-1/4 md:w-1/5 h-full"></div>
                <div className="w-3/4 md:w-4/5 h-full flex justify-center md:justify-start items-center">
                    <img src={LogoFull} loading="lazy" alt="Full logo" className="h-8 md:h-10" />
                </div>
            </div>
            <div className="w-1/5 h-full flex justify-end items-center pr-6 relative" onClick={() => setProfileOptn(!profileOptn)}>
                {userData ? (
                    <img src={userData?.photoURL} loading="lazy" alt="UserAvatar" className="w-8 h-8 rounded-full ring-2 ring-pri-yellow" />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
                        <path fill="#fff" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
                    </svg>
                )}
                <button onClick={() => signOut(auth)} className={`${profileOptn ? "" : "opacity-0 "}transition-opacity duration-150 ease-in-out absolute top-full mt-2 right-2 h-full w-40 bg-pri-black z-50 rounded-lg font-semibold shadow-xl border border-pri-yellow`}>
                    Signout
                </button>
            </div>
        </nav>
    )
}

export default Header;