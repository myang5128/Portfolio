import Header from '../components/header';
import Footer from '../components/footer';
import Projects from './components/projects';
import Skills from './components/Skills';

export default function Page() {
    return (
      <main className="min-h-screen bg-[#101310] w-full">
        <div className="flex flex-col mx-auto">
          <Header />
          <Skills />
          <Projects/>
          <Footer />
        </div>
      </main>
    );
  }