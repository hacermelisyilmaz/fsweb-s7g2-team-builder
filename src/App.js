import React, { useState } from "react";
import MemberCard from "./components/MemberCard.js";
import Form from "./components/Form.js";
import "./App.css";

function App() {
  const [memberToEdit, setMemberToEdit] = useState({});
  console.log(memberToEdit);
  const [memberList, setMemberList] = useState([
    {
      name: "Laura Athey",
      role: "Backend Engineer",
      email: "lathey1@purevolume.com",
      age: 28,
      gender: "Female",
      city: "Morteros",
    },
    {
      name: "Verna Iceton",
      role: "Frontend Engineer",
      email: "viecton@seesaa.com",
      age: 46,
      gender: "Female",
      city: "Pechersk",
    },
    {
      name: "Alida Surcombe",
      role: "Designer",
      email: "asurcombea@diigo.com",
      age: 32,
      gender: "Female",
      city: "Berlin",
    },
  ]);

  const addMember = (newMember) => {
    const updatedMemberList = [...memberList];
    updatedMemberList.push(newMember);
    setMemberList(updatedMemberList);
  };

  const clickedToEdit = (member) => {
    setMemberToEdit(member);
  };

  const editMember = (editedMember) => {
    const memberListToUpdate = [...memberList];
    memberListToUpdate.map((member) => {});
  };

  return (
    <div className="App">
      <h1>The team</h1>
      <h2>Members</h2>
      <div className="team-members-list flex-container">
        {memberList.map((member, index) => {
          return (
            <MemberCard
              key={index}
              memberInfo={member}
              picID={index}
              clickedToEdit={clickedToEdit}
            />
          );
        })}
      </div>

      <h2>Add a member</h2>
      <Form addMember={addMember} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
