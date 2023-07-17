import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <div className="flex items-center justify-start w-screen h-16 gap-10 pl-16 mb-16 font-bold text-white bg-black">
          <span className="">Home</span>
          <span className="">News</span>
          <span className="">Sports</span>
          <span className="">Local</span>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
