import { Button } from "@material-tailwind/react";
import Book from "../../assets/images/book-1.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="py-5 ">
      <div className="hero bg-base-200 rounded-xl ">
        <div className="hero-content flex-col lg:flex-row justify-between items-center">
          <div className="text-start lg:p-10">
            <h1 className="text-4xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <p className="py-6">
              Books offer a gateway to diverse worlds, sparking imagination and
              broadening perspectives. With each turn of the page, they invite
              us to embark on new adventures, learn profound lessons, and
              discover hidden treasures.
            </p>

            <Link to="./listedBooks">
              <Button
                size="md"
                className="hidden lg:inline-block bg-gradient-to-r from-purple-500 to-pink-300"
              >
                <span>View The List</span>
              </Button>
            </Link>
          </div>
          <img src={Book} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
