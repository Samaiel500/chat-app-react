import React from "react";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");
    const [err, setErr] = useState(false);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        }
    };
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };
    return (
        <div className="search">
            <div className="search__form">
                <input
                    placeholder="Find a user"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            {err && <span>User not found...</span>}
            {user && (
                <div className="user__chat">
                    <img src={user.photoURL} alt="" />
                    <div className="user__chat-info">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
