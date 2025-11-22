import { ArrowLeft, DollarSign, Link, Share2, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DetailedPage() {
  const product = {
    name: "프로틴 워터 레몬맛",
    price: "3,500원",
    rating: 4.5,
    reviewCount: 128,
    description:
      "상쾌한 레몬향과 함께 즐기는 프로틴 워터입니다. 운동 후 단백질 보충과 수분 공급을 동시에 해결할 수 있으며, 무설탕으로 부담없이 즐길 수 있습니다.",
    features: [
      "단백질 15g 함유",
      "무설탕, 저칼로리",
      "비타민 B6 함유",
      "상쾌한 레몬향",
      "운동 후 빠른 회복",
      "휴대하기 편한 용량",
    ],
    nutrition: [
      { label: "열량", value: "60kcal" },
      { label: "단백질", value: "15g" },
      { label: "탄수화물", value: "2g" },
      { label: "당류", value: "0g" },
      { label: "지방", value: "0g" },
      { label: "나트륨", value: "45mg" },
    ],
    ingredients:
      "정제수, 유청단백질농축물, 레몬농축액, 구연산, 비타민B6, 스테비아잎추출물",
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background">
      <div className="w-[390px]">
        <div className="sticky top-0 z-50 bg-white border-b border-border border-gray-200">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="뒤로 가기"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <button
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="공유하기"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 pb-24">
          <div className="relative aspect-square bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden mb-6 mt-4">
            <div className="absolute inset-0 bg-[url('/protein-water-bottle.jpg')] bg-cover bg-center" />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="flex items-center gap-2 text-[25px] font-bold text-foreground mb-2 text-balance">
                {product.name}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5"
                >
                  <Link className="w-5" />
                </a>
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center text-[25px] font-[Medium] text-primary">
                  <DollarSign />
                  {product.price}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="text-foreground leading-relaxed break-keep">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                주요 특징
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 bg-primary/5 rounded-lg p-3 border border-primary/10"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                영양 성분
              </h2>
              <div className="bg-card border border-border shadow-[0_0_10px_rgba(175,175,175,0.25)] border-gray-100 rounded-xl overflow-hidden">
                <div className="bg-muted px-4 py-3 border-b border-border border-gray-100 bg-gray-100">
                  <p className="text-sm font-semibold ">
                    1회 제공량 기준 (500ml)
                  </p>
                </div>
                <div className="divide-y divide-border divide-gray-100">
                  {product.nutrition.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <span className="text-[13px]">{item.label}</span>
                      <span className="text-[15px] font-[Medium]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="w-full mt-[5px] flex justify-end text-gray-300 text-[12px]">
                제품 정보는 실제와 다를 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
