'use server';

// import { getServerSession } from "next-auth";
// import { authConfig } from '../auth'
// import Link from "next/link";

async function WithAuth({children} : {children : React.ReactNode}) {
  // const session = await getServerSession(authConfig);
  
  // if (!session?.user) {
  //   return <div className="flex justify-center items-center w-full">
  //       <Link href="/api/auth/signin">Log in!</Link>
  //   </div>;
  // }

  return <>{children}</>;
}

export default WithAuth;
