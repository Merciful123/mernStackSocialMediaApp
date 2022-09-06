import React, { useState } from "react";
import "./followersCard.css";

import User from "../User/User";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "../../api/UserRequest";
const FollowersCard = () => {
  const [persons, setPerson] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPerson(data);
      console.log(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
