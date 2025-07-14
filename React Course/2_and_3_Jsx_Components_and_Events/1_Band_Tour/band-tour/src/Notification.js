import React from "react";

export default function Notification(props) {
  let classString = "";

  if (props.isRead == false) {
    classString = "not-read";
  }
  props.message = "new msg";
  return <div className={classString}> {props.message} </div>;
}
