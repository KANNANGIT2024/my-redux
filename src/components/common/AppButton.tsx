
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function AppButton({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}