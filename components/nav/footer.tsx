import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-40 py-10 w-full border-t bg-background flex items-center justify-center">
      <ul className="flex gap-5 text-sm">
        <li>
          <Link className="hover:underline underline-offset-2" href={"/policy"}>
            서비스 소개
          </Link>
        </li>
        <li>
          <Link className="hover:underline underline-offset-2" href={"/policy"}>
            제휴제안
          </Link>
        </li>
        <li>
          <Link className="hover:underline underline-offset-2" href={"/policy"}>
            이용약관
          </Link>
        </li>
        <li>
          <Link className="hover:underline underline-offset-2" href={"/policy"}>
            개인정보처리방침
          </Link>
        </li>
        <li>
          <Link className="hover:underline underline-offset-2" href={"/policy"}>
            고객센터
          </Link>
        </li>
      </ul>
    </footer>
  );
};
