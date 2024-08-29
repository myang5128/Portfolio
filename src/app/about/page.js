import About from './components/About';
import Header from '../components/header';
import Footer from '../components/footer';
import Contact from './components/Contact';

export default function Page() {
    return (
      <main className="min-h-screen bg-[#101310] w-full">
        <div className="flex flex-col mx-auto">
          <Header />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    );
  }