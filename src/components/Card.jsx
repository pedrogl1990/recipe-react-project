const Card = ({ preparationTime }) => {
  return (
    <div className="py-5 px-8 bg-rose-50 rounded-2xl">
      <h3 className=" text-rose-800 font-bold mb-3 text-lg">Preparation Time</h3>
      <div className="px-5">
        <ul className="text-stone-600 list-disc list-outside">
          <li className="list-card">
            <span className="bold-card">Total:</span> {preparationTime.total}
          </li>
          <li className="list-card">
            <span className="bold-card">Preparation:</span> {preparationTime.preparation}
          </li>
          <li className="list-card">
            <span className="bold-card">Cooking:</span> {preparationTime.cooking}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
