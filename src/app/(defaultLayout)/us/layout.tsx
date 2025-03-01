import UsNavbar from "../components/us-components/UsNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-dvh grid grid-rows-[auto,1fr,auto]">
      {children}
      <UsNavbar />
    </section>
  );
}
