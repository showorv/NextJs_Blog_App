import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const authSession = async ()=> getServerSession(authOptions)