import React, { useState } from "react";

function MemberCard({ memberInfo, picID }) {
  const [isClicked, setIsClicked] = useState(false);

  const gender = memberInfo.gender === "Female" ? "women" : "men";

  return (
    <div
      className="MemberCard flex-container"
      onClick={() => setIsClicked(!isClicked)}
    >
      <img src={`https://randomuser.me/api/portraits/${gender}/${picID}.jpg`} />
      <h3>{memberInfo.name}</h3>
      <p>{memberInfo.role}</p>

      {isClicked && (
        <ul className="member-details">
          <li>e-mail: {memberInfo.email}</li>
          <li>age: {memberInfo.age}</li>
          <li>gender: {memberInfo.gender}</li>
          <li>city: {memberInfo.city}</li>
        </ul>
      )}
    </div>
  );
}

export default MemberCard;
