import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My Fragment App</h1>
      <p className="mt-4 text-lg">This is a sample Next.js application.</p>
      <Image
        src="/my-image.png"
        alt="Sample Image"
        width={500}
        height={300}
      />
    </main>
  );
}
