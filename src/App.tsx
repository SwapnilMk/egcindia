import SiteFooter from "./components/footer/site-footer";
import SiteHeader from "./components/header/site-header";

function App() {
  return (
    <div className="mx-auto">
      <SiteHeader />
      <div className="h-screen text-center bg-gray-100">content here</div>
      <SiteFooter />
    </div>
  );
}

export default App;
