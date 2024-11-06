import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1> Hello world </h1>
      {/* <a href="/demo"> demo page</a>  re download everything from here {*/} 
      <Link to="/demo"> demo page</Link>  {/*spa redirect*/} 
    </>
  );
}
