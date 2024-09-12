import localFont from "next/font/local";
import SearchComponent from "@/components/containers/search";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SearchComponent></SearchComponent>
    </div>
  );
}
