import React, { useCallback, useEffect, useMemo, useState } from "react";

const User = () => {
  const data = useMemo(() => {
    return [
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
    ];
  }, []);

  const [userData, setUserData] = useState([]);

  const renderData = useMemo(() => {
    if (userData === undefined || data === null) return null;
    return userData?.map((item, index) => {
      return (
        <>
          <div>{item?.name}</div>
        </>
      );
    });
  }, [data, userData]);

  const loadData = useCallback(() => {
    setUserData(data);
  }, [data]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <div>{renderData}</div>
    </>
  );
};

export default User;
