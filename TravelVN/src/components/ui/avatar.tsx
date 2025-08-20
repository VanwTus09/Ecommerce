import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

interface AvatarProps {
  email: string;
  size?: number; // kích thước avatar
  className?: string;
}
export const Avatar: React.FC<AvatarProps> = ({ email, size = 40, className = "" }) => {
  if (!email) return null;

  const firstLetter = email[0].toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-blue-600 text-white font-bold ${className}`}
      style={{ width: size, height: size }}
    >
      {firstLetter}
    </div>
  );
};

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export {  AvatarImage, AvatarFallback }
export default Avatar;
