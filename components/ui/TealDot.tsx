import clsx from "clsx";

type TealDotProps = {
  className?: string;
};

export function TealDot({ className }: TealDotProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "inline-block h-[7px] w-[7px] rounded-full bg-accent align-baseline",
        className,
      )}
    />
  );
}
