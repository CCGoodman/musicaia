"use client";

import { cn } from "@/lib/utils";
import { DivideIcon as LucideIcon } from "lucide-react";

interface TextComponentProps {
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
  icon: typeof LucideIcon;
}

export function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
  icon: Icon,
}: Readonly<TextComponentProps>) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-2xl border transition-all duration-300",
        isOpen
          ? "border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
          : "scale-95 border-white/5 bg-white/5 opacity-50"
      )}
    >
      <div className="flex w-full items-center gap-4 p-4">
        <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-left text-xl font-medium text-white">
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left transition-all duration-500",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <p className="p-4 text-lg text-gray-300">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute left-0 top-0 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
