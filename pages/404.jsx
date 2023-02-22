import Link from "next/link";
import { Image } from "react-bootstrap";
import Header from "../components/common/layout/header";

export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className="errorMain">
        <div className="errorContainer">
          <div className="errorImg">
            <Image src="/images/error.jpg" alt="not found" />
          </div>
          <h3>Whoops! We Could Not Find The Page You're Looking For.</h3>
          <p>Maybe you were typing to fast. Or maybe we moved the page you were looking for (sorry about that). Whatever happened, there's
            nothing to see here, Try one of the links below to get back on track</p>

            <Link href="/">Go Back</Link>
        </div>
      </div>
    </>
  );
}
