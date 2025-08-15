
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
import { DialogDescription, DialogHeader, DialogTitle , Dialog, DialogContent} from "@/components/ui/dialog";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({message : "Please enter a valid email address."}),
  password: z.string().min(6),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SigninForm({onSuccess ,onClose} : {onSuccess?: (data?:any)=>void; onClose?: () => void}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  type FormValues = z.infer<typeof formSchema>;
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: FormValues) => {
   try {
      const res = await AxiosInstance.post("/api/auth/login", {
      email: values.email,
      password: values.password,
      })
      if(res){
      toast.success("Register success!");
      form.reset();
      if (onSuccess) onSuccess(res.data);
      if (onClose) onClose();
      console.log(values, "valuesss");
    }
    return res.data
   }catch(err){
    console.log( 'Fail ', err)
   }
  };
  return (
    <Dialog open>
        <DialogContent className="overflow-hidden bg-white p-0 text-black z-50 w-[400px] ">
          <DialogHeader className="m-2">
          <DialogTitle className=" text-3xl font-bold pl-4">
            Sign in
          </DialogTitle>
          <DialogDescription className="text-zinc-500 pl-4 text-xl">
            Sign in to your Vietnam Travel account and discover your fun anywhere
          </DialogDescription>
        </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-6 text-xl">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (*)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" value={field.value} onChange={field.onChange} />
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
                <Input placeholder="Choose a strong password (min 6 chars)." value={field.value} onChange={field.onChange} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /><div className="flex justify-center items-center py-2">
        <Button type="submit" className="flex-1" disabled={isLoading}>{isLoading ? "Submiting..." : "Submit"}</Button></div>
      </form>
    </Form>
    </DialogContent>
    </Dialog>
  );
}
