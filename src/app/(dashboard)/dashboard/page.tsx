import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

const DashboardHomePage =async () => {

  const session = await getServerSession(authOptions)
  console.log(session);

  const quauto = "Let's manage your profile"
  
  return (
    <div className="flex flex-col justify-center items-center min-w-7xl min-h-full">
      <h1 className="text-4xl font-bold">Welcome Back, {session?.user?.name}</h1>
      <p>{quauto}</p>
    </div>
  );
};

export default DashboardHomePage;
