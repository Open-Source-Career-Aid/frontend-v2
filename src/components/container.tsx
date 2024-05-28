const containerTypes: Record<string, string> = {
	"primary": "max-w-[430px] mx-auto"
}

export default function Container({
	  type = "primary",
	  children,
}: Readonly<{
  type?: string;
  children: React.ReactNode;
}>) {
  return (
	<div className={"flex h-full w-full " + containerTypes[type]}>
	  {children}
	</div>
  );
}