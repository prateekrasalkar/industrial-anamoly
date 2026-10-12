import "./globals.css";
import "./components/dashboard.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Header />
          <div className="route-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
