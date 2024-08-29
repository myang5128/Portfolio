import HomeScreen from './homescreen/Homescreen';

export default function Page() {
    return (
      <main className="flex min-h-screen bg-[#F4FDD9] justify-center items-center sm:min-w-full">
      <div className="flex sm:my-12 sm:px-10 py-12 mx-2 px-6">
        <HomeScreen />
      </div>
      </main>
    );
  }