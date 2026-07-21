import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  rounded-2xl
  font-semibold
  transition-all
  duration-300
  disabled:pointer-events-none
  disabled:opacity-50
  focus:outline-none
  focus:ring-2
  focus:ring-pink-500/40
  active:scale-[0.98]
  select-none
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-gradient-to-r
          from-pink-600
          to-fuchsia-600
          text-white
          hover:shadow-[0_0_35px_rgba(236,72,153,.45)]
          hover:scale-[1.02]
        `,

        secondary: `
          bg-white/5
          border
          border-white/10
          text-white
          backdrop-blur-xl
          hover:bg-white/10
        `,

        ghost: `
          bg-transparent
          text-white
          hover:bg-white/10
        `,

        outline: `
          border
          border-pink-500
          text-pink-400
          hover:bg-pink-500
          hover:text-white
        `,

        danger: `
          bg-red-600
          text-white
          hover:bg-red-700
        `,
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-6",

        lg: "h-14 px-8 text-lg",

        xl: "h-16 px-10 text-xl",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
