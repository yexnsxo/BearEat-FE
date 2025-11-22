import { Tag, DollarSign, Package, Target, ExternalLink } from "lucide-react";

export function RecommendCard() {
  const product = {
    name: "프로틴 워터 레몬맛",
    price: "3,500원",
    category: "음료",
    purpose: ["단백질 보충", "갈증 해소"],
    link: "제품 상세보기",
    additionalInfo: "무설탕, 저칼로리, 비타민 B6 함유",
  };

  return (
    <div className="w-full hover:scale-103 transition-all duration-500">
      <div className="bg-card rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(149,149,149,0.25)]">
        <div className="relative aspect-square bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/protein-water-bottle.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />
          <div className="relative z-10 text-6xl font-bold text-primary/20">
            이미지
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 text-primary font-semibold text-xl">
              <DollarSign className="w-5 h-5" />
              {product.price}
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-2 rounded-lg bg-primary/10">
                <Package className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">카테고리</p>
                <p className="text-[15px] font-[Medium]">{product.category}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-2 rounded-lg bg-primary/10">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">선택 목적</p>
                <div className="flex flex-wrap gap-2">
                  {product.purpose.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-[5px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-2 rounded-lg bg-primary/10">
                <Tag className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  건강 키워드
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  {product.additionalInfo}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full cursor-pointer h-10 flex justify-center items-center text-white bg-primary hover:bg-primary/90 text-primary-foreground font-[Medium] py-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <ExternalLink className="w-5 h-5 mr-2" />
              제품 상세보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
