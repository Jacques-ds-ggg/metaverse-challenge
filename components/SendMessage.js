import { useMoralis } from "react-moralis";
import {useState} from 'react';

function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();

        messages
            .save({
                message: message,
                username: user.getUsername(),
                ethAddress: user.get("ethAddress"),            
            })
            .then(
                (message) => {
                    // The object was saved successfully
                },
                (error) => {
                    // The save failed
                    // error is a Moralis.Error with an error code and message
                    console.log(error.message);
                }
            );
        endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth" });
        setMessage("");
    };

    return (
                    // Message container
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12
            px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
            <input className='flex-grow outline-none bg-transparent text-white
                                border-4 placeholder-gray-400 pr-5'                
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Enter a Message ${user.getUsername()}...`}
            />

            {/* Sent button */}
            <button type="submit"
                onClick={sendMessage}
                className='pl-5 font-bold text-pink-500'
            >
                Send
            </button>
        </form>
    )
}

export default SendMessage
