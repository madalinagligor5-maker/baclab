import { Suspense } from "react";
import { Practice } from "@/components/Practice";
import { Loading } from "@/components/ui";

export const metadata = { title: "Exersare" };

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Practice />
    </Suspense>
  );
}
