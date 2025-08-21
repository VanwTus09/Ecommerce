import { 
  FormControl, FormField, FormItem, FormLabel, FormMessage, Form 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";

// ✅ chỉ cần type, không cần zod schema
export type FormSchema = {
  phone: string;
  name: string;
  email: string;
  address: string;
  adult: number;
  child: number;
};

interface PaymentFormProps {
  form: UseFormReturn<FormSchema>;
}

export const PaymentForm = ({ form }: PaymentFormProps) => {
  return (
    <Form {...form}>
      <form className="space-y-8 mx-6 text-xl">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HỌ TÊN (*)</FormLabel>
              <FormControl>
                <Input placeholder="Họ tên" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại (*)</FormLabel>
              <FormControl>
                <Input placeholder="Số điện thoại" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (*)</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Địa chỉ (*)</FormLabel>
              <FormControl>
                <Input placeholder="Địa chỉ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="adult"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Người lớn (*)</FormLabel>
              <FormControl>
                <Input
                  min={1}
                  type="number"
                  {...field}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)} // ép thành number
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="child"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trẻ nhỏ dưới 11 tuổi (Giảm 20%)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)} // ép thành number
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
