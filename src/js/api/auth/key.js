// import { API_BASE } from "../constants";

// export async function getKey() {
//   const token = localStorage.getItem("token");
//   try {
//     const response = await fetch(
//       `${API_BASE}/auth/create-api-key`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({}),
//       }
//     );
//     if (!response.ok) {
//       throw new Error("something weeent wrong");
//     }

//     const responseData = await response.json();


//     console.log(responseData.data.key);
//   } catch (error) {}
// }