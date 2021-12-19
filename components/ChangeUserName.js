import { useMoralis } from "react-moralis";

function ChangeUserName() {

    const { setUserData, isUserUpdating, userError, user } =
    useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your current Username (current: ${user.getUsername()})`
        );
        if (!username) return;

        setUserData({
            username,
        });
    };

    return (
        <div className="text-sm absolute top-5 right-5">
            <button disabled={isUserUpdating}
            onClick={setUsername}
            className="hover:text-pink-700 login_cta py-2 px-4 rounded-sm font-bold text-lg 
            bg-pink-400 text-white flex items-center">
                Change Username
            </button>
            
        </div>
    )
}

export default ChangeUserName
