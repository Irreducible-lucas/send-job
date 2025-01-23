import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/ui/app-sidebar";
import { SignUpMenu } from "../components";

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <SignUpMenu />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
// { children }: { children: React.ReactNode }
