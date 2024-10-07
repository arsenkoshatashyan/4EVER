import "./Products.scss";
export default function Products() {
  const data = [
    {
      id: 1,
      img: "./images/Products/Pure.svg",
    },
    {
      id: 2,
      img: "./images/Products/Pure.svg",
    },
    {
      id: 3,
      img: "./images/Products/Pure.svg",
    },
    {
      id: 4,
      img: "./images/Products/Pure.svg",
    },
    {
      id: 5,
      img: "./images/Products/Pure.svg",
    },
  ];
  return (
    <div className="Products">
      <div className="Products__content">
        {data.map((elem) => (
          <div key={elem.id}>
            <img src={elem.img} alt="photo" />
            <button>Պատվիրել</button>
          </div>
        ))}
      </div>
    </div>
  );
}
