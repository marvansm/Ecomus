import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  img: string;
  hoverImg: string;
  colors: string[];
  countdown?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  oldPrice,
  discount,
  img,
  hoverImg,
  colors,
  countdown,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, name, price, img });
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden bg-[#f6f6f6] mb-4">
        {discount && (
          <span className="absolute top-3 right-3 bg-[#db1215] text-white text-[12px] font-bold px-2 py-1 rounded-full z-10">
            {discount}
          </span>
        )}

        <div className="relative aspect-3/4 overflow-hidden">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={hoverImg}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {countdown && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-sm text-[13px] font-bold text-[#db1215] whitespace-nowrap z-10">
            {countdown}
          </div>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-20">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm">
            <Heart size={16} />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm">
            <Eye size={16} />
          </button>
          <button
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
          </button>
        </div>

          <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-20">
          <button
            className="w-full bg-white text-black py-2.5 rounded-sm text-[13px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-md"
            onClick={handleAddToCart}
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-[15px] font-medium text-black group-hover:text-[#db1215] transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-bold text-black">{price}</span>
          {oldPrice && (
            <span className="text-[14px] text-gray-400 line-through">
              {oldPrice}
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-1">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full border border-gray-200 cursor-pointer hover:border-black transition-colors`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
