const AssignmentCard = ({ assignment }) => {
  const { title,thumbnail,description } = assignment;
  console.log(assignment);
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
         {description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
