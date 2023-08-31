import { auth } from "../../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./ChatPage.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function ChatPage() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default ChatPage;
