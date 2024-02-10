import Navbar from "./navbar";
import { Footer } from "./footer";
import { SiteContextProvider } from "../context/globalContext";

export function Layout({ children }: any) {
  //const [data,error] = useSWR('/api/navigation',fetch)

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
