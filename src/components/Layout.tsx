
import { ReactNode } from "react";
import NavBar from "./NavBar";
import AnimatedTransition from "./AnimatedTransition";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24">
        <AnimatedTransition>{children}</AnimatedTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
