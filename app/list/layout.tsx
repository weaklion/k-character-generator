import Header from "@/components/header";

export default function ListLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="size-full">
      <Header />
      <div className="flex w-full grow flex-col">{children}</div>
    </main>
  );
}
