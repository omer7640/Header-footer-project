import React from "react";
import { Avatar, colors } from "@mui/material";
export default function Header() {
  const user = {
    firstName: "Umer",
    lastName: "Hameed",
  };

  function avatarColor(name) {
    let color = "";
    switch (true) {
      case ["A", "G", "M", "S", "Y"].includes(name):
        color = "#687399";
        break;
      case ["B", "H", "N", "T", "Z"].includes(name):
        color = "#6DAEB0";
        break;
      case ["C", "O", "I", "U"].includes(name):
        color = "#FFDCA8";
        break;
      case ["D", "P", "J", "V"].includes(name):
        color = "#FAA578";
        break;
      case ["E", "K", "Q", "W"].includes(name):
        color = "#C46693";
        break;
      case ["F", "L", "R", "X"].includes(name):
        color = "#78518A";
        break;
      default:
        color = "black";
    }
    return color;
  }

  return (
    <div className="header ">
      <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand">BLACKLANE</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="avatar">
            <Avatar
              className="ava2"
              sx={{ bgcolor: avatarColor(user.firstName[0]) }}
            >
              {user.firstName[0]}
            </Avatar>
          </div>
        </div>
      </nav>
    </div>
  );
}
