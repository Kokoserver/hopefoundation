import { Minus, Plus } from "lucide-react";

export type CollapsibleItem = {
  title: string;
  content: React.ReactNode;
};

type AnimatedCollapsibleProps = {
  items: CollapsibleItem[];
  name: string;
  defaultOpenIndex?: number;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  numbered?: boolean;
};

export function AnimatedCollapsible({
  items,
  name,
  defaultOpenIndex = 0,
  itemClassName = "rounded-[8px] bg-[#f4f4f4] px-5 py-4",
  titleClassName = "text-[12px] font-semibold text-[#2A1708]",
  contentClassName = "pt-3 text-[11px] leading-5 text-[#697084]",
  numbered = true,
}: AnimatedCollapsibleProps) {
  return (
    <>
      {items.map((item, index) => (
        <details
          key={`${name}-${item.title}`}
          name={name}
          className={`group ${itemClassName}`}
          open={index === defaultOpenIndex}
        >
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden ${titleClassName}`}
          >
            <span>
              {numbered ? `${index + 1}. ` : ""}
              {item.title}
            </span>
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-open:rotate-180">
              <Plus className="h-3 w-3 group-open:hidden" />
              <Minus className="hidden h-3 w-3 group-open:block" />
            </span>
          </summary>
          <div className="faq-answer">
            <div className="overflow-hidden">
              <div className={contentClassName}>{item.content}</div>
            </div>
          </div>
        </details>
      ))}
    </>
  );
}
