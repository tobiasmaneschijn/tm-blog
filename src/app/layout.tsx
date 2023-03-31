import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import "./globals.css";

export const metadata = {
  title: "Tobias Maneschijn",
  description: "Personal blog of software engineer Tobias Maneschijn",
  authors: {
    name: "Tobias Maneschijn",
    url: "https://tobiasmaneschijn.com",
  },
  category: "blog",
  creator: "Tobias Maneschijn",
  publisher: "Tobias Maneschijn",
  robots: "index, follow",
  keywords:
    "blog, student, software, engineering, developer, developer blog, software engineer, software developer, typescript, react, javascript, nodejs, node",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden bg-slate-900 dark:bg-slate-900">
        <div className="min-h-screen w-full overflow-x-hidden  bg-white dark:bg-slate-900">
          <Header />
          <main className="flex flex-col min-h-screen mx-auto max-w-3xl px-6 py-6 ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
