import React, { useCallback, useMemo, useState } from "react";
// import "./App.css";
import "./Appstyle.js";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Button1, Data } from "./Appstyle";
// import { red } from "@mui/material/colors";

function App() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    if (drawer === true) {
      setDrawer(false);
    } else {
      setDrawer(true);
    }
  };
  const [ary, setary] = useState([
    {
      name: "priyank",
      city: "surat",
      phone: "7886422842",
      email: "pri123@gmail.com",
    },
    {
      name: "raj",
      city: "bardoli",
      phone: "8725947512",
      email: "raj1211@gmail.com",
    },
    {
      name: "ram",
      city: "ahamdabad",
      phone: "6574198753",
      email: "ram2513@gmail.com",
    },
    {
      name: "shayam",
      city: "vadodara",
      phone: "7548128954",
      email: "shayam007@gmail.com",
    },
    {
      name: "kano",
      city: "Navasari",
      phone: "8546287975",
      email: "kano56@gmail.com",
    },
  ]);

  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  var [name, setname] = useState("");
  var [city, setcity] = useState("");
  var [phone, setphone] = useState("");
  var [email, setemail] = useState("");

  const [edit, setedit] = useState(0);
  const [inx, setinx] = useState(0);

  const add = useCallback(
    () => {
      // e.preventDefault();
      let idref;
      if (edit === 1) {
        let newadd = ary.map((p, index) => {
          if (index === inx) {
            p.name = name;
            p.city = city;
            p.phone = phone;
            p.email = email;
            return p;
          } else {
            return p;
          }
        });
        setedit(0);
        setary(newadd);
      } else {
        setary([
          ...ary,
          { id: idref, name: name, phone: phone, city: city, email: email },
        ]);
        console.log(ary);
        idref = idref + 1;
      }
      clearData();
      toggleDrawer();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [edit, ary, inx, name, city, phone, email]
  );
  const clearData = useCallback(() => {
    setname("");
    setcity("");
    setphone("");
    setemail("");
  }, []);

  const del = useCallback(
    (name) => {
      // eslint-disable-next-line eqeqeq
      let newvar = ary.filter((x, index) => x.name != name);
      setary(newvar);
    },
    [ary]
  );

  const ChangeName = (e) => {
    setname(e.target.value);
  };

  const ChangeCity = (e) => {
    setcity(e.target.value);
  };

  const ChangePhone = (e) => {
    setphone(e.target.value);
  };

  const ChangeEmail = (e) => {
    setemail(e.target.value);
  };

  const validationform = (event) => {
    event.preventDefault();

    let nm = document.forms["myform"]["fname"].value;
    let contry = document.forms["myform"]["ct"].value;
    let mobile = document.forms["myform"]["mob"].value;
    let eid = document.forms["myform"]["mail"].value;

    if (nm === "") {
      document.getElementById("formname").innerHTML = "Please Enter Name";
      return false;
    } else {
      // eslint-disable-next-line no-unused-expressions
      document.getElementById("formname").innerHTML = "";
    }

    if (contry === "") {
      document.getElementById("forcity").innerHTML = "Please Enter City";
      return false;
    } else {
      // eslint-disable-next-line no-unused-expressions
      document.getElementById("forcity").innerHTML = "";
    }

    var monum = /^\d{10}$/;
    if (mobile === "") {
      document.getElementById("formobile").innerHTML = "Please Enter mo.number";
      return false;
    } else if (!mobile.match(monum)) {
      document.getElementById("formobile").innerHTML = "Please Enter 10 Digits";
      return false;
    } else {
      // eslint-disable-next-line no-unused-expressions
      document.getElementById("formobile").innerHTML = "";
    }

    var emid = /\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    if (eid === "") {
      document.getElementById("foremail").innerHTML = "Please Enter Email ID";
      return false;
    } else if (!eid.match(emid)) {
      document.getElementById("foremail").innerHTML = "Please Enter  Email ID";
      return false;
    } else {
      // eslint-disable-next-line no-unused-expressions
      document.getElementById("foremail").innerHTML = "";
    }

    console.log("first");
    add();
  };

  const editItem = useCallback(
    (item, index) => {
      setedit(1);
      setinx(index);
      setname(item.name);
      setcity(item.city);
      setphone(item.phone);
      setemail(item.email);
      toggleDrawer();
    },
    [toggleDrawer]
  );

  const renderData = useMemo(() => {
    if (ary === undefined || ary === null) return null;
    return ary?.map((item, index) => {
      return (
        <div
          key={`renderdata_index_${index}`}
          className="container"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <Data className="data">
            <div>Name : {item.name}</div>
            <div>City : {item.city}</div>
            <div>Phone : {item.phone}</div>
            <div>Email : {item.email}</div>
          </Data>
          <br />
          <Button1 onClick={() => del(item.name)}> DELETE </Button1>
          <tab></tab>
          <Button1 onClick={() => editItem(item, index)}> EDIT </Button1>
          <br />
          <br />
          <br />
        </div>
      );
    });
  }, [ary, del, editItem]);

  console.log("hello");
  return (
    <div>
      <Drawer anchor="right" open={drawer} onClose={toggleDrawer}>
        <div style={{ backgroundColor: "aqua", width: "400px" }}>
          <form onSubmit={(e) => validationform(e)} name="myform">
            <div>
              <label>
                Name :{" "}
                <input
                  type="text"
                  onChange={(e) => ChangeName(e)}
                  value={name}
                  name="fname"
                  placeholder="Enter Name"
                ></input>
              </label>
              <div
                id="formname"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "55px",
                }}
              ></div>
            </div>
            <br />
            <div>
              <label>
                City :{" "}
                <input
                  type="text"
                  onChange={(e) => ChangeCity(e)}
                  value={city}
                  name="ct"
                  placeholder="Enter city"
                ></input>
              </label>
              <div
                id="forcity"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "40px",
                }}
              ></div>
            </div>
            <br />
            <div>
              <label>
                Phone No. :{" "}
                <input
                  type="number"
                  onChange={(e) => ChangePhone(e)}
                  value={phone}
                  name="mob"
                  placeholder="Enter mo.no"
                ></input>
              </label>
              <div
                id="formobile"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "85px",
                }}
              ></div>
            </div>
            <br />
            <div>
              <label>
                Email :{" "}
                <input
                  type="email"
                  onChange={(e) => ChangeEmail(e)}
                  value={email}
                  name="mail"
                  placeholder="Enter Email"
                ></input>
              </label>
              <div
                id="foremail"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "50px",
                }}
              ></div>
            </div>
            <br />
            <Button1 type="submit"> ADD </Button1>
            <br />
            <br />
          </form>
        </div>
      </Drawer>
      {renderData}
      {/* {ary.map((x, index) => (
        <div
          key={index}
          className="container"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <Data className="data">
            <div>Name : {x.name}</div>
            <div>City : {x.city}</div>
            <div>Phone : {x.phone}</div>
            <div>Email : {x.email}</div>
          </Data>
          <br />
          <Button1 onClick={() => del(x.name)}> DELETE </Button1>
          <tab></tab>
          <Button1 onClick={() => editbtn(x, index)}> EDIT </Button1>
          <br />
          <br />
          <br />
        </div>
      ))} */}
      <div>
        <Button1
          onClick={toggleDrawer}
          style={{
            backgroundColor: "red",
            color: "white",
            marginTop: "30px",
            fontSize: "15px",
            marginLeft: "1240px",
            marginBottom: "40px",
          }}
        >
          ADD DATA
        </Button1>
      </div>
    </div>
  );
}

export default App;
