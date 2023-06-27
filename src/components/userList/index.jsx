import React from 'react';
import styles from "./styles.module.scss";
import CustomizableTable from '../common/index';

const UserList = () => {
    const columns = [
        {
          name: "name",
          label: "Name",
          options: {
            sort: false,
          },
        },
        {
          name: "email",
          label: "Email Id",
          options: {
            sort: false,
          },
        },
        {
          name: "status",
          label: "Status",
          options: {
            sort: false,
          },
        },
    ];

    const title = "User Info";

      const data = [
        {
          name: "Anom",
          email: "anom23@gmail.com",
          status: true
        },
        {
            name: "Megha",
            email: "meagha@gmail.com",
            status: true
        },
        {
            name: "Subham",
            email: "subaj@gmail.com",
            status: true
        },
        {
            name: "danief",
            email: "daneid24@gmail.com",
            status: false
        },
        {
            name: "alopna",
            email: "alopna.jaj@gmail.com",
            status: true
        },
      ];
    
      let columnsWithAction = columns;

  return (
    <div className={styles.Table}>
      <div className={styles.TableContainer}>
        <CustomizableTable
          columnsWithAction={columnsWithAction}
          data={data}
          title={title}
        />
      </div>
    </div>
  )
}

export default UserList
