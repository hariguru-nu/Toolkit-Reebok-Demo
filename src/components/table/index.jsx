import CustomizableTable from "../common/index";
import styles from "./styles.module.scss";

const Table = () => {
  const columns = [
    {
      name: "storeCode",
      label: "Store Code",
      options: {
        sort: false,
      },
    },
    {
      name: "storeType",
      label: "Store Type",
      options: {
        sort: false,
      },
    },
    {
      name: "storeName",
      label: "Store Name",
      options: {
        sort: false,
      },
    },
    {
      name: "enabled",
      label: "Enabled",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];
  const title = "Store Info";
  const data = [
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a806e",
      },
      storeCode: "E0035",
      address: {
        addressLine1: "1 American Dream Way",
        addressLine2: "Suite B237",
        city: "East Rutherford",
        state: "NJ",
        zipCode: "07073",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Mon: "11:00 am - 09:00 pm",
        Tue: "11:00 am - 09:00 pm",
        Wed: "11:00 am - 09:00 pm",
        Thu: "11:00 am - 09:00 pm",
        Fri: "11:00 am - 10:00 pm",
        Sat: "11:00 am - 10:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-74.06692679999999, 40.8094502],
      },
      phoneNumber: "+15512484932",
      storeName: "American Dream",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a806f",
      },
      storeCode: "E0036",
      address: {
        addressLine1: "2801 W.Big Beaver Road",
        addressLine2: "Space K256",
        city: "Troy",
        state: "MI",
        zipCode: "48084",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "12:00 pm - 06:00 pm",
        Mon: "10:00 am - 08:00 pm",
        Tue: "10:00 am - 08:00 pm",
        Wed: "10:00 am - 08:00 pm",
        Thu: "10:00 am - 08:00 pm",
        Fri: "10:00 am - 08:00 pm",
        Sat: "10:00 am - 08:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-83.1834191, 42.5600991],
      },
      phoneNumber: "+12486492662",
      storeName: "Somerset Collection",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8072",
      },
      storeCode: "E0039",
      address: {
        addressLine1: "101 Hawthorn Center",
        city: "Vernon Hills",
        state: "IL",
        zipCode: "60061",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 06:00 pm",
        Mon: "11:00 am - 08:00 pm",
        Tue: "11:00 am - 08:00 pm",
        Wed: "11:00 am - 08:00 pm",
        Thu: "11:00 am - 08:00 pm",
        Fri: "11:00 am - 08:00 pm",
        Sat: "11:00 am - 08:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-87.9516931, 42.2427701],
      },
      phoneNumber: "+18476808607",
      storeName: "Hawthorn Mall",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8076",
      },
      storeCode: "E0438",
      address: {
        addressLine1: "800 Steven B. Tanger Blvd",
        addressLine2: "Ste 809",
        city: "Commerce",
        state: "GA",
        zipCode: "30529",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 07:00 pm",
        Mon: "10:00 am - 09:00 pm",
        Tue: "10:00 am - 09:00 pm",
        Wed: "10:00 am - 09:00 pm",
        Thu: "10:00 am - 09:00 pm",
        Fri: "10:00 am - 09:00 pm",
        Sat: "10:00 am - 09:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-83.4755867, 34.2491407],
      },
      phoneNumber: "+17063353281",
      storeName: "Tanger Commerce II",
      storeType: "Eddie Bauer Outlet",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8074",
      },
      storeCode: "E0737",
      address: {
        addressLine1: "595 West Linmar Lane",
        addressLine2: "Ste B-40",
        city: "Johnson Creek",
        state: "WI",
        zipCode: "53038",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 06:00 pm",
        Mon: "10:00 am - 07:00 pm",
        Tue: "10:00 am - 07:00 pm",
        Wed: "10:00 am - 07:00 pm",
        Thu: "10:00 am - 07:00 pm",
        Fri: "10:00 am - 08:00 pm",
        Sat: "10:00 am - 08:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-88.7634319, 43.0887433],
      },
      phoneNumber: "+19206994145",
      storeName: "Johnson Creek Premium Outlets",
      storeType: "Eddie Bauer Outlet",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a807a",
      },
      storeCode: "E0518",
      address: {
        addressLine1: "4802 Valley View Blvd",
        addressLine2: "Ste LB50",
        city: "Roanoke",
        state: "VA",
        zipCode: "24012",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "12:00 pm - 06:00 pm",
        Mon: "11:00 am - 08:00 pm",
        Tue: "11:00 am - 08:00 pm",
        Wed: "11:00 am - 08:00 pm",
        Thu: "11:00 am - 08:00 pm",
        Fri: "11:00 am - 08:00 pm",
        Sat: "11:00 am - 08:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-79.9632462, 37.3046275],
      },
      phoneNumber: "+15403666911",
      storeName: "Valley View Mall",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a807c",
      },
      storeCode: "E0042",
      address: {
        addressLine1: "27688 Novi Road",
        addressLine2: "A-203",
        city: "Novi",
        state: "MI",
        zipCode: "48377",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 06:00 pm",
        Mon: "10:00 am - 08:00 pm",
        Tue: "10:00 am - 08:00 pm",
        Wed: "10:00 am - 08:00 pm",
        Thu: "10:00 am - 08:00 pm",
        Fri: "10:00 am - 08:00 pm",
        Sat: "10:00 am - 09:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-83.4759559, 42.4933273],
      },
      phoneNumber: "+12483484411",
      storeName: "Twelve Oaks Mall",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8077",
      },
      storeCode: "E0040",
      address: {
        addressLine1: "12715 Wayzata Blvd.",
        addressLine2: "Space A",
        city: "Minnetonka",
        state: "MN",
        zipCode: "55305",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 06:00 pm",
        Mon: "11:00 am - 07:00 pm",
        Tue: "11:00 am - 07:00 pm",
        Wed: "11:00 am - 07:00 pm",
        Thu: "11:00 am - 07:00 pm",
        Fri: "11:00 am - 08:00 pm",
        Sat: "11:00 am - 08:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-93.43770239999999, 44.96774180000001],
      },
      phoneNumber: "+19525939111",
      storeName: "Ridgedale Center",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a807e",
      },
      storeCode: "E0443",
      address: {
        addressLine1: "Southgate Mall",
        addressLine2: "Sp J2",
        city: "Missoula",
        state: "MT",
        zipCode: "59801",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 06:00 pm",
        Mon: "10:00 am - 08:00 pm",
        Tue: "10:00 am - 08:00 pm",
        Wed: "10:00 am - 08:00 pm",
        Thu: "10:00 am - 08:00 pm",
        Fri: "10:00 am - 08:00 pm",
        Sat: "10:00 am - 08:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-114.0280609, 46.8449096],
      },
      phoneNumber: "+14065422244",
      storeName: "Southgate Mall",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8080",
      },
      storeCode: "E0044",
      address: {
        addressLine1: "6750 W Frontage Rd.",
        addressLine2: "Suite 321",
        city: "Medford",
        state: "MN",
        zipCode: "55049",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 06:00 pm",
        Mon: "10:00 am - 07:00 pm",
        Tue: "10:00 am - 07:00 pm",
        Wed: "10:00 am - 07:00 pm",
        Thu: "10:00 am - 07:00 pm",
        Fri: "10:00 am - 07:00 pm",
        Sat: "10:00 am - 07:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-93.26185939999999, 44.1711421],
      },
      phoneNumber: "+15074465866",
      storeName: "Medford Outlet Center",
      storeType: "Eddie Bauer Outlet",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8084",
      },
      storeCode: "E0055",
      address: {
        addressLine1: "11715-U Fair Oaks Mall",
        addressLine2: "Sp J225",
        city: "Fairfax",
        state: "VA",
        zipCode: "22033",
        country: "US",
      },
      createdAt: {
        $date: "2023-03-22T23:06:15.379Z",
      },
      enabled: true,
      hours: {
        Sun: "11:00 am - 07:00 pm",
        Mon: "10:00 am - 08:00 pm",
        Tue: "10:00 am - 08:00 pm",
        Wed: "10:00 am - 08:00 pm",
        Thu: "10:00 am - 08:00 pm",
        Fri: "10:00 am - 09:00 pm",
        Sat: "10:00 am - 09:00 pm",
      },
      location: {
        type: "Point",
        coordinates: [-77.356559, 38.861904],
      },
      phoneNumber: "+17032737728",
      storeName: "Fair Oaks Mall",
      storeType: "Eddie Bauer",
      updatedAt: {
        $date: "2023-03-22T23:29:10.926Z",
      },
    },
    {
      _id: {
        $oid: "641b8a6e2f44714ed17a8084",
      },
      storeCode: "R00393",
      enabled: true,
      phoneNumber: "+1872372378",
      storeName: "Reebok store",
      storeType: "REEBBOK",
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
  );
};

export default Table;
