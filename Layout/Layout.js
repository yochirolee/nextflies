import Header from "../contaniners/Header/header";
import Footer from "../contaniners/Footer/footer";


export default function Layout({ children, home }) {
  return (
    <div>
     

      <Header/>
      <main>{children}</main>
      <Footer/>
     
    </div>
  );
}
