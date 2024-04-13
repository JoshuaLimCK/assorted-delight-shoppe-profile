import { NavigationTab } from "@/components/navigation-tab";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationTab />
      {children}
    </>
  );
};

export default DashboardLayout;
