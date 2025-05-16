import React from "react";


interface ReviewCardProps {
  review: string;
  name: string;
  title: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, name, title }) => {
  return (
    // Added transition for a smooth hover effect
    <div className="bg-neutral-800 hover:bg-pink-600 text-white rounded-lg p-6 transition-colors duration-200 ease-in-out cursor-pointer">
      <p className="text-gray-200 mb-4 text-sm leading-relaxed">{review}</p>
      <h3 className="font-semibold text-gray-100 text-base">{name}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );
};

const ClientReviews: React.FC = () => {
  const reviews = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare lesocondimentum, vel euismod erat placerat.",
      name: "Daneil Percy",
      title: "CEO Qwiktech",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare lesocondimentum, vel euismod erat placerat.",
      name: "Daneil Percy",
      title: "CEO Qwiktech",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare lesocondimentum, vel euismod erat placerat.",
      name: "Daneil Percy",
      title: "CEO Qwiktech",
    },
  ];

  return (
    <section className=" text-white py-16 px-6 md:px-12">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-decorative text-white mb-12">
        Some Of My Clients Review
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review.review}
            name={review.name}
            title={review.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
