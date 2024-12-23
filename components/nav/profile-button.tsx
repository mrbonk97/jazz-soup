import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ProfileButton = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar className="w-8 h-8 md:w-10 md:h-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>프로필</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>로그인</DropdownMenuItem>
        <DropdownMenuItem>회원가입</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
