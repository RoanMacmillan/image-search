import React from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";

// Define the type for the layout props
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'My App' }) => {

  const router = useRouter();
  const { pathname } = router;

  return (
    <div className='px-2 max-w-[1400px] mx-auto relative'>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        {/* <Nav /> */}
      </header>
      <main className={` ${pathname === '/' ? 'mt-[84px] lg:mt-[108px]' : 'mt-[109px] lg:mt-[145px]'}`}>
        {children}
      </main>
      <footer>
        {/* Footer content */}
        {/* <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p> */}
      </footer>
    </div>
  );
};

export default Layout;
