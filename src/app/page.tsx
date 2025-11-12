import { redirect } from "next/navigation";

export default function OldPageRedirect() {
    redirect("/en");
}