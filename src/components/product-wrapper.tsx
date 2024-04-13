import { Card, CardContent } from "@/components/ui/card";
import { secondaryFont } from "@/fonts";
import { cn } from "@/lib/utils";

interface ProductWrapperProps {
  name: string;
  imgSrc?: string;
  price: number;
}

export const ProductWrapper = ({
  name,
  imgSrc,
  price,
}: ProductWrapperProps) => {
  return (
    <>
      <Card className="bg-white w-fit">
        <CardContent>
          <div className="py-4">
            <img
              src={imgSrc}
              alt={name}
              className="object-cover max-h-96 max-w-96"
            />
            <p className={cn("text-3xl mt-2", secondaryFont.className)}>
              {name}
            </p>
            <p className={cn("text-2xl mt-2", secondaryFont.className)}>
              RM {price}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
