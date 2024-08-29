import HomeScreen from './homescreen/Homescreen';

export default function Page() {
    return (
      <main className="flex min-h-screen bg-[#F4FDD9] justify-center items-center">
      <div className="sm:my-12 sm:px-8 py-12 mx-2 px-4 w-full">
        <HomeScreen />
      </div>
      </main>
    );
  }