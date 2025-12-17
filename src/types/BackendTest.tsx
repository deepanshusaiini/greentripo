// // import React, { useState } from "react";

// // const BackendTest = () => {
// //   const [count, SetCount] = useState<number>(0);

// //     const handleClick = () => {
// //         if (count < 5) {
// //       SetCount(count + 1);
// //     };
// //   }

// //   return (
// //     <div>
// //       <h3>Count:{count}</h3>

// //       <button onClick={handleClick}>Add</button>
// //     </div>
// //   );
// // };

// // export default BackendTest;

// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // interface UserType {
// //   id: number;
// //   name: string;
// //   email: string;
// // }

// // const BackendTest = () => {
// //   const [users, setUsers] = useState<UserType[]>([]);

// //   useEffect(() => {
// //     const controller = new AbortController(); // 👈 create controller
// //     const signal = controller.signal;

// //     axios
// //       .get<UserType[]>("https://jsonplaceholder.typicode.com/users", {
// //         signal: controller.signal, // 👈 attach signal
// //       })
// //       .then((res: any) => {
// //         setUsers(res.data);
// //       })
// //       .catch((err: any) => {
// //         if (axios.isCancel(err)) {
// //           console.log("Request cancelled");
// //         } else {
// //           console.log("Error:", err);
// //         }
// //       });

// //     return () => {
// //       controller.abort(); // 👈 cancel request when component unmounts
// //       console.log("Cleanup done: Axios request aborted");
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       {users.map((item) => (
// //         <li key={item.id}>{item.name}</li>
// //       ))}
// //     </div>
// //   );
// // };

// // export default BackendTest;

// // import React, { useRef } from "react";

// // const BackendTest = () => {
// //   // const inputRef=useRef<HTMLInputElement>|(null)
// //   const inputRef = useRef<HTMLInputElement | null>(null);

// //     const handleValue=()=>{
// //         inputRef.current?.value

// //     }

// //   return (
// //     <div>

// //       <input
// //         ref={inputRef}
// //         type="text"
// //         placeholder="Your Name"
// //         style={{ width: "300px" }}
// //         onChange={handleValue}
// //       ></input>
// //     </div>
// //   );
// // };
// // export default BackendTest;

// // import React,{useState} from "react";

// // const BackendTest=()=>{
// // return(
// //     <div>
// //         <Bestdeals name='Detail'/>
// //     </div>
// // )
// // }

// // interface userProps{
// //     name:string
// // }

// // const Bestdeals:React.FC<userProps>=({name})=>{

// //     return(
// //         <div>
// //          <h3>{name}</h3>
// //         </div>
// //     )
// // }

// // export default BackendTest;

// import React from "react";
// interface states {
//   name: string;
//   age: number;
//   profession: string;
// }
// const BackendTest: React.FC<states> = () => {
//   const data = [
//     { name: "deepanshu", age: 22, profession: "developer" },
//     { name: "deepanshu", age: 22, profession: "developer" },
//     { name: "deepanshu", age: 22, profession: "developer" },
//     { name: "deepanshu", age: 22, profession: "developer" },
//     { name: "deepanshu", age: 22, profession: "developer" },
//   ];

//   return (
//     <div>
//       <table style={{ border: "1px solid black" }}>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Profession</th>
//         </tr>
//         <tr>
//           {data.map((item) => (
//             <li> {item.name}</li>
//             // <li> {item.age}</li>
//           ))}
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default BackendTest;
