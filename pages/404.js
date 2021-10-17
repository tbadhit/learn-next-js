import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  //  Cara redirect
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found"> Ooops.... </h1>
      <h1 className="title-not-found">
        Halaman yang anda cari tidak di temukan
      </h1>
    </div>
  );
}
