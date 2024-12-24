"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(4, {
    message: "최소 4글자를 입력해주세요",
  }),
  password: z.string().min(8, {
    message: "패스워드는 최소 8글자 입니다",
  }),
});

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="h-full w-full flex2 bg-custom-1/50">
      <section className="p-5 h-[700px] w-[1000px] bg-secondary rounded-xl flex justify-between gap-5">
        <div className="relative w-full flex2">
          <h2 className="absolute top-4 left-4 text-2xl font-semibold text-rose-300 eulyoo">
            Jazz Soup
          </h2>
          <Image
            src={"/images/login.png"}
            width={1000}
            height={1000}
            alt="login image"
            className="object-contain h-96"
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-shrink-0 p-10 h-full w-96 rounded-xl bg-background"
          >
            <h1 className="my-10 text-2xl font-bold opacity-80">로그인</h1>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormControl>
                    <Input
                      placeholder="아이디"
                      {...field}
                      className="py-6 rounded-none border-x-0 border-t-0 border-b shadow-none focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="패스워드"
                      {...field}
                      className="py-6 rounded-none border-x-0 border-t-0 border-b shadow-none focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="text-right">
                    특수 문자를 혼합하여 8자리 이상
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-16 py-6 w-full bg-custom-2 rounded-2xl"
              disabled={form.formState.isSubmitting}
            >
              로그인
            </Button>
            <p className="mt-5 text-center text-sm font-medium opacity-60">
              계정이 없으시다면{" "}
              <Link className="underline underline-offset-2" href={"/sign-up"}>
                회원가입
              </Link>
            </p>
            <p className="mt-1.5 text-center text-sm font-medium opacity-60">
              아이디나 패스워드를 잊으셨다면{" "}
              <Link
                className="underline underline-offset-2"
                href={"/forgot-password"}
              >
                클릭
              </Link>
            </p>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default SignInPage;
