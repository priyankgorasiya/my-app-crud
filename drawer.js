import React from 'react'

const drawer = () => {
    useEffect(() => {
      return () => {
        clearData()
      }
    }, [third])
    
  return (
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
  )
}

export default drawer