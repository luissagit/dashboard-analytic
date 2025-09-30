import type { ReactNode } from 'react';
import { Calendar, ChevronUp, Home, Inbox, Settings, User2 } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

interface PrivateLayoutProps {
  children: ReactNode;
}

const items = [
  {
    title: 'Dashboard',
    url: '/private/dashboard',
    icon: Home,
  },
  {
    title: 'Application',
    url: '/private/application',
    icon: Inbox,
  },
  {
    title: 'Report',
    url: '/private/report',
    icon: Calendar,
  },
  // {
  //   title: 'Search',
  //   url: '#',
  //   icon: Search,
  // },
  {
    title: 'Settings',
    url: '/private/setting',
    icon: Settings,
  },
];

export default function PrivateLayout(props: PrivateLayoutProps) {
  const { children } = props;
  const location = useLocation();

  const pathname = location.pathname;
  const selectedPath = items.find((data) => data.url === pathname);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen overflow-x-hidden">
        <div className="px-2 py-3 border-b-2 flex gap-1 items-center sticky top-0 bg-white">
          <SidebarTrigger />
          <h2 className="font-bold text-lg">{selectedPath?.title ?? ''}</h2>
        </div>
        <div className="p-3">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export function AppSidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/auth/login');
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h1 className="text-xl font-bold">SIIDAMANIS</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
