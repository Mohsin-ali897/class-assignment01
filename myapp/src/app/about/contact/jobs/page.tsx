
// import React from 'react'
// export default function Jobs() {
//     return (
//     <div className="h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500">
//     <h1 className="ext-sm text-black-600 text-center text-5xl pt-4">Jobs</h1>
//     <p className="text-center justify-center items-center mt-10 text-3xl">This is the jobs page</p>
//     </div>
// )
// }

import React from 'react'
export default async function Jobs() {
    await  new Promise(resolve => setTimeout(resolve, 4000));
    return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500">
    <h1 className="ext-sm text-black-600 text-center text-5xl pt-4">Jobs</h1>
    <p className="text-center justify-center items-center mt-10 text-3xl">This is the jobs page</p>
    </div>
)
}