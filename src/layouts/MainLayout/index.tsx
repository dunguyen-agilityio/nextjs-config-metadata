import { cn } from "@nextui-org/theme";

interface MainLayoutProps {
  className?: string;
}

const MainLayout = ({
  children,
  className = "",
}: React.PropsWithChildren<MainLayoutProps>) => {
  return (
    <main className={cn("flex-1 flex flex-col bg-background-500", className)}>
      {children}
    </main>
  );
};

export default MainLayout;
