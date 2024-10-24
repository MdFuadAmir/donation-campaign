import PropTypes from "prop-types";

const Category = ({ categorey }) => {
  const { picture, title, category, category_bg, card_bg } = categorey;
  return (
    <div className={`card card-compac rounded-lg border bg-[${card_bg}]`}>
      <figure>
        <img
          src={picture}
          alt='logo'
        />
      </figure>
      <div className="py-5 px-4">
        <span className={`font-medium rounded-lg text-sm py-2 px-4 ${category_bg}`}>{category}</span>
        <h1 className="text-lg font-medium mt-3">{title}</h1>
      </div>
    </div>
  );
};
Category.propTypes = {
  categorey: PropTypes.array.isRequired
};

export default Category;
