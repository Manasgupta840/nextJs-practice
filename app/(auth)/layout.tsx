export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b p-1 text-center">Get 20% off</div>
      {children}
    </>
  );
}
