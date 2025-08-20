import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AxiosInstance } from "@/api/axiosInstance";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useModal } from "../hooks";
import { useAuthStore } from "../hooks/use-auth";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6),
});

export function SigninForm({
  onSuccess,
}: {
  onSuccess?: (data?: unknown) => void;
}) {
  type FormValues = z.infer<typeof formSchema>;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const { isOpen, type, onClose, onSwitch } = useModal();
  const { SetUser } = useAuthStore();
  if (type !== "signinform") return null; // ❗ chỉ render khi đúng type
  if (!isOpen) return null; // ❗ đóng khi false
  const onSubmit = async (values: FormValues) => {
    try {
      const res = await AxiosInstance.post("/api/auth/login", {
        email: values.email,
        password: values.password,
      });
      const UserData = res.data.user;
      console.log(res.data, "Login response");
      if (UserData) {
        toast.success("Login success!");
        SetUser({
          email: UserData.email,
          username: UserData.username,
          _id: UserData.id,
        });
        if (onSuccess) {
          onSuccess(res.data);
          alert("Login success, please wait a moment to redirect to home page");
          window.location.href = "/";
          form.reset();
        }
        onClose();
      }
      return res.data;
    } catch (error) {
      console.log(error, "Login error");
      toast.error("Login failed, please check your email and password.");
      form.reset();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="overflow-hidden bg-white p-0 text-black z-50 w-[400px] ">
        <DialogHeader className="m-2">
          <DialogTitle className=" text-3xl font-bold pl-4">
            Sign in
          </DialogTitle>
          <DialogDescription className="text-zinc-500 pl-4 text-xl">
            Sign in to your Vietnam Travel account and discover your fun
            anywhere
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mx-6 text-xl"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (*)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      value={field.value}
                      onChange={field.onChange}
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
                <FormItem>
                  <FormLabel>Password (*)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Choose a strong password (min 6 chars)."
                      value={field.value}
                      onChange={field.onChange}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-center items-center py-2 gap-3">
              <Button
                type="submit"
                className="flex-1 w-full "
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Sign in"}
              </Button>
              <span className="text-sm">
                Haven't account, please {""}{" "}
                <button
                  onClick={() => onSwitch("signupform")}
                  className="text-red-300 text-base hover:cursor-pointer hover:underline"
                >
                  Register
                </button>{" "}
                with us
              </span>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
