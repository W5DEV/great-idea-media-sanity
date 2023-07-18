import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import Nav from "./nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
}
