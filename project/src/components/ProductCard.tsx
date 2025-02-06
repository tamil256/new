import React from 'react';
import { ExternalLink, Star, StarHalf } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  imageUrl: string;
  affiliateLink: string;
}

export function ProductCard({ title, description, price, rating, imageUrl, affiliateLink }: ProductCardProps) {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          {renderRating()}
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300"
          >
            View on Amazon
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}