import type { SVGProps } from "react";

type TechProps = {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

export default function Tech({ name, Icon }: TechProps) {
  return (
    <div className="border-dashed border  h-[50px] rounded-lg text-center flex justify-center items-center gap-2">
      <Icon className="w-6 h-6" />
      <p>{name}</p>
    </div>
  );
}
