import { Topnav } from "@/components/nav/top-nav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
};

export default Layout;
